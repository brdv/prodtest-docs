"use strict";(self.webpackChunkprodtest=self.webpackChunkprodtest||[]).push([[147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={title:"Internal Dark Launch",sidebar_position:1},o=void 0,i={unversionedId:"demo/examples/internal-dl",id:"demo/examples/internal-dl",title:"Internal Dark Launch",description:"As described on the dark launch page, an internal dark launch is a dark launch that happens between two clusters. In this case, the traffic does not pass through a proxy. The two services have another way of communication.",source:"@site/docs/demo/examples/internal-dl.md",sourceDirName:"demo/examples",slug:"/demo/examples/internal-dl",permalink:"/prodtest-docs/demo/examples/internal-dl",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Internal Dark Launch",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"External Dark Launch",permalink:"/prodtest-docs/demo/examples/external-dl"}},c={},l=[{value:"TL;DR",id:"tldr",level:2},{value:"The use case",id:"the-use-case",level:2},{value:"Implementation",id:"implementation",level:2},{value:"RabbitMQ Exchanges",id:"rabbitmq-exchanges",level:3},{value:"Publishing messages:",id:"publishing-messages",level:4},{value:"Subscribing to messages",id:"subscribing-to-messages",level:4}],h={toc:l};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As described on the dark launch page, an internal dark launch is a dark launch that happens between two clusters. In this case, the traffic does not pass through a proxy. The two services have another way of communication."),(0,r.kt)("p",null,"For this example, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brdv/prodtest-demo"},"prodtest-demo")," project."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"In this example, we implement and internal dark launch for two services that communicate via a Message Queue. The software runs in a kubernetes cluster."),(0,r.kt)("h2",{id:"the-use-case"},"The use case"),(0,r.kt)("p",null,"In the demo project we have two main components; the ",(0,r.kt)("a",{parentName:"p",href:"/prodtest-docs/demo/technical-detail/order-service"},"order service"),", and the ",(0,r.kt)("a",{parentName:"p",href:"/prodtest-docs/demo/technical-detail/kitchen-service"},"kitchen service"),"."),(0,r.kt)("p",null,"Let's say you want to test a new kitchen, which should increase the speed of handling orders. The kitchen service checks the queue for new orders, and will process and prepare the new orders.\nAs manager of this burger restaurant, you want to test another way to prepare orders. You decide to use a dark launch to test this new process."),(0,r.kt)("p",null,"One important part of this use case is that you want to handle all or some of the orders that appear on the queue by both the current (Vlatest) and the next (Vnext) version of the kitchen service. To do so, you have to make sure that multiple services can be subscribed to the same messages or queues."),(0,r.kt)("p",null,"The simplified base architecture is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simple architecture",src:n(4022).Z,width:"662",height:"528"})),(0,r.kt)("p",null,"You want to be able to do something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Desired architecture",src:n(3883).Z,width:"632",height:"716"})),(0,r.kt)("p",null,"In this case (the latter), you want both Vnext and the main kitchen service to be able to process the ",(0,r.kt)("strong",{parentName:"p"},"same")," images."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"This section describes how the use case is implemented. Note that these examples are from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brdv/prodtest-demo"},"prodtest-demo")," project. A more elaborate description of the classes of the code snippets below can be found in technical descriptions of the ",(0,r.kt)("a",{parentName:"p",href:"/prodtest-docs/demo/technical-detail/order-service"},"order service")," and the ",(0,r.kt)("a",{parentName:"p",href:"/prodtest-docs/demo/technical-detail/kitchen-service"},"kitchen service"),"."),(0,r.kt)("p",null,"To start, you have to make sure that it is possible to have multiple subscribers listening to the same messages and that those message will not be deleted once read."),(0,r.kt)("h3",{id:"rabbitmq-exchanges"},"RabbitMQ Exchanges"),(0,r.kt)("p",null,"The message queue used in the demo project is RabbitMQ. It provides a feature that does exactly what we want: ",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/tutorials/amqp-concepts.html#exchanges"},"exchanges"),"."),(0,r.kt)("p",null,"An exchange is basically a middleman that all messages are sent to. It allows the message to be sent to multiple queues. In this case, we want the order service to send all messages to the 'main' exchange. The exchange will send the message to all queues that are bound to the exchange. Therefore, all services that have a queue that is bound to the exchange, will receive the messages."),(0,r.kt)("p",null,"This is implemented as follows:"),(0,r.kt)("h4",{id:"publishing-messages"},"Publishing messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public void PublishEvent(string hostname, string message, string exchange)\n{\n    var factory = new ConnectionFactory() { HostName = hostname };\n    using (var connection = factory.CreateConnection())\n    using (var channel = connection.CreateModel())\n    {\n        channel.ExchangeDeclare(exchange, ExchangeType.Fanout);\n\n        var encodedBody = Encoding.UTF8.GetBytes(message);\n\n        channel.BasicPublish(exchange: exchange,\n                                routingKey: "",\n                                basicProperties: null,\n                                body: encodedBody);\n    }\n}\n')),(0,r.kt)("p",null,"The method above is located in the RabbitMQService."),(0,r.kt)("p",null,"As you can see, after we have set up a connection to the RabbitMQ instance located at the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," parameter, we start by declaring an exchange. After we have encoded the message into a variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," we can publish the message by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".BasicPublish"),". This method takes various parameters, the important parts here are the exchange, which is set to be the ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange")," parameter of the method and the body (a.k.a.) the message you want to publish, set to the encoded message in the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),". (Note that we do not (yet) have to declare an actual queue, RabbitMQ takes care of this for us.)"),(0,r.kt)("h4",{id:"subscribing-to-messages"},"Subscribing to messages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public void Run(string exchangeToUse)\n{\n    var factory = new ConnectionFactory() { HostName = RMQHost };\n    using (var connection = factory.CreateConnection())\n    using (var channel = connection.CreateModel())\n    {\n        channel.ExchangeDeclare(exchangeToUse, ExchangeType.Fanout);\n\n        var queueName = channel.QueueDeclare().QueueName;\n\n        channel.QueueBind(queue: queueName, exchange: exchangeToUse, routingKey: "");\n\n        var consumer = new EventingBasicConsumer(channel);\n\n        consumer.Received += (model, ea) =>\n        {\n            var body = ea.Body.ToArray();\n            var decodedBody = Encoding.UTF8.GetString(body);\n            var order = JsonSerializer.Deserialize<OrderModel>(decodedBody);\n\n            if (order != null)\n            {\n                _service.HandleOrder(order);\n            }\n            else\n            {\n                Console.WriteLine("Something went wrong. Order is empty");\n            }\n        };\n\n        channel.BasicConsume(queue: queueName,\n                                autoAck: true,\n                                consumer: consumer);\n    }\n}\n')),(0,r.kt)("p",null,"This snippet is from the ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenWorker")," class, as described ",(0,r.kt)("a",{parentName:"p",href:"/prodtest-docs/demo/technical-detail/kitchen-service"},"here"),"."),(0,r.kt)("p",null,"Once again, we have to set up a connection with the RabbitMQ instance first. In this case the host scoped to the class.\nWhen we have a connection, we first check if the exchange already exists on line 7 by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".ExchangeDeclare")," (Note: this method like an ",(0,r.kt)("a",{parentName:"p",href:"https://cockroachlabs.com/blog/sql-upsert/#what-is-an-upsert-in-sql"},"upsert")," in SQL).. Then on line 11 it binds the queue it create on line 9 to that exchange.\nOnce the queue is bound, it creates a consumer for events on that queue. This consumer will listen to the queue an on a received message, perform the steps on line 17-28. These lines will decode the encoded message, serialize it to an ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderModel")," and if it is a valid order, pass it on to the service (which is a dependency in this class)."))}d.isMDXComponent=!0},3883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/desired-internal-dl-df5f68f6d64a4e819935a144254be574.png"},4022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/simple-internal-dl-10b1886fabbe96e0ff3aca713dfe943a.png"}}]);