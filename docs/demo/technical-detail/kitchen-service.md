---
title: KitchenService
sidebar_position: 3
slug: kitchen-service
---

The kitchen service consumes new order events that are published on the message queue. Once an order is published, it will handle the order and store a OrderHandled object into a database.

## Architecture

The kitchen service is a .NET Console Application and consists of three main layers. Note that on the image below, the Message Queue has been taken into account but this is actually not a primary part of the kitchen service.

![architecture schematic](./img/kitchen-service-architecture-layers.png)

The worker layer is responsible for collecting new orders from the queue. The service will handle the order as needed and eventually pass it on to the repository layer. This last layer will make sure the HandledOrder is saved to the database.

## Flow

The flow of the kitchen service is as follows:

![Swim lane diagram](./img/kitchen-service-swim-lane.png)

Once a new order is published on the queue, the KitchenWorker will collect and deconstruct it. This results in an OrderModel. This OrderModel will then be passed to the KitchenService. The KitchenService will then "handle" the order. The preparation of the order is mocked and this will result in a preparation time that is dependent on the estimated preparation time of the order and the speed of the kitchen. When the order is complete, the service will create a new HandledOrder object. This object basically holds all relevant information of the handled order. The handled order will then be passed on to the repository layer, which saves it to the database.

## Implementation

The above layers and flow are implemented as followed:

![class diagram](./img/kitchen-service-class-diagram.png)

Note: all classes marked with an asterix (\*) can be found in the Domain.Commons project. They are not directly part of the kitchen service, but it does depend on them.

<!-- TODO: Add link to domain.commons project above. -->

## Dependencies

## Development choices
