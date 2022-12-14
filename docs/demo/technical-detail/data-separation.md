---
title: Data Separation
sidebar_position: 5
slug: data-separation
---

We have talked about ways to separate data when using a dark launch [over here](/tip-basics/dark-launch/data-separation). On this page we will look at how data separation is implemented in the [prodtest-demo](https://github.com/brdv/prodtest-demo) project's dark launch.

## Situation

As a refresher, the architecture of the demo project:

![demo project architecture](./img/components-overview.png)

In the demo, we have two main components that store or save data: the message queue and the database. The kitchen service publishes new orders onto the message queue. The kitchen service is subscribe to the queue that those messages are published to and - after preparing - will save handled orders into a database.

This leaves us with two possible ways of data pollution: the database and the message queue.

## Database

The kitchen service uses a database to store information about handled orders. In this case, we do not want orders handled by Vnext to pollute orders handled by Vlatest.

### Options and choice

For databases, the main three options are: using a separate database, using a separate table and extending the data model. The option that was implemented in the demo project, is using a separate table. The main reason for this choice is that the database of the demo project is quite simple. It has only one table that is only used to write to. This means that adding a separate table will have minor impact on the database's performance. Thereby it is quite a simple solution, since we only have to specify and somehow create a separate table to be used by Vnext. Last, but not least, the data generated by Vnext will not be pollute the Vlatest data and the code will still have the desired cleanliness.

### Implementation

**Note:** The following implementation is from the `KitchenDbContext`, that is described [here](./kitchen-service.md).

The kitchen service has to use a separate table to store the data generated by Vnext. In dotnet, [Entity Framework](https://learn.microsoft.com/en-us/ef/) is used to interact with the database. Entity Framework has a method on the modelBuilder called `.ToTable(string tableName)` in which you can specify the name of the table for a specific entity. We can use this in our advantage.

The base logic looks as follows (simplified):

```csharp showLineNumbers
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    var tableName = version == "latest" ? "HandledOrders" : "HandledOrdersShadow";

    modelBuilder.Entity<HandledOrder>().ToTable(tableName);

    base.OnModelCreating(modelBuilder);
}
```

This method overrides the OnModelCreating that is defined by the class DbContext which KitchenDbContext inherits. It is used to specify how to create the database models. On line 3 we check what the version is (this could be an environment variable, for example). On line 5 we explicitly specify what tableName to use for the HandledOrders objects and on line 7, we pass the modelBuilder to the base class (DbContext).

If the version is `latest`, we make the application use a table named `HandledOrders`. In all other cases, for example if the version variable is `Vnext`, we use the table named `HandledOrdersShadow`.

In this way, we make sure that two different versions of the application (i.e. Vlatest and Vnext), will not use the same database table.

## Message Queue

Both the kitchen service and the order service both use the message queue. The order service published messages on the queue, which are consumed by the kitchen service.

### Options and choice

For message queues, the two main options are: using a separate queue or using routing to separate the messages on the queue. In the demo project, a separate queue was implemented. The main reason therefore is that it is the cleanest solution. In this way, there is practically no data pollution since both versions publish to a separate queue. Since everything is running locally, the monetary cost is negligible.

### Implementation

The implementation of this way of separating data is quite simple:

```csharp showLineNumbers
private void PublishNewOrder(OrderModel order)
{
    var serializedOrder = JsonSerializer.Serialize(order);
    var versionTag = _configuration["DL_INTERNAL_TAG"];

    _rmqService.PublishEvent(_configuration["RMQ_HOST"], serializedOrder, $"dl-exchange-{versionTag}");
}
```

As you can see, the exchange used by the `PublishNewOrder` method in the `OrderService` makes the exchange dependent on the version tag. This tag is set to either `latest` or `Vnext`. We can then tell our kitchen service to only listen for messages on the exchange with the `latest` tag.

**Note:** we use exchanges in stead of queues for publishing, more about that [here](../examples/internal-dl.md#rabbitmq-exchanges).
