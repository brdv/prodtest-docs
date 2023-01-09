"use strict";(self.webpackChunkprodtest=self.webpackChunkprodtest||[]).push([[300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"KitchenService",sidebar_position:3,slug:"kitchen-service"},o=void 0,s={unversionedId:"demo/technical-detail/kitchen-service",id:"demo/technical-detail/kitchen-service",title:"KitchenService",description:"The kitchen service consumes new order events that are published on the message queue. Once an order is published, it will handle the order and store a OrderHandled object into a database.",source:"@site/docs/demo/technical-detail/kitchen-service.md",sourceDirName:"demo/technical-detail",slug:"/demo/technical-detail/kitchen-service",permalink:"/prodtest-docs/demo/technical-detail/kitchen-service",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"KitchenService",sidebar_position:3,slug:"kitchen-service"},sidebar:"tutorialSidebar",previous:{title:"OrderService",permalink:"/prodtest-docs/demo/technical-detail/order-service"},next:{title:"Queue Details",permalink:"/prodtest-docs/demo/technical-detail/message-queue"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Flow",id:"flow",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Development choices",id:"development-choices",level:2}],d={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The kitchen service consumes new order events that are published on the message queue. Once an order is published, it will handle the order and store a OrderHandled object into a database."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The kitchen service is a .NET Console Application and consists of three main layers. Note that on the image below, the Message Queue has been taken into account but this is actually not a primary part of the kitchen service."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture schematic",src:n(4671).Z,width:"1180",height:"974"})),(0,r.kt)("p",null,"The worker layer is responsible for collecting new orders from the queue. The service will handle the order as needed and eventually pass it on to the repository layer. This last layer will make sure the HandledOrder is saved to the database."),(0,r.kt)("h2",{id:"flow"},"Flow"),(0,r.kt)("p",null,"The flow of the kitchen service is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Swim lane diagram",src:n(1014).Z,width:"2212",height:"1344"})),(0,r.kt)("p",null,'Once a new order is published on the queue, the KitchenWorker will collect and deconstruct it. This results in an OrderModel. This OrderModel will then be passed to the KitchenService. The KitchenService will then "handle" the order. The preparation of the order is mocked and this will result in a preparation time that is dependent on the estimated preparation time of the order and the speed of the kitchen. When the order is complete, the service will create a new HandledOrder object. This object basically holds all relevant information of the handled order. The handled order will then be passed on to the repository layer, which saves it to the database.'),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"The above layers and flow are implemented as followed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"class diagram",src:n(9645).Z,width:"2264",height:"1642"})),(0,r.kt)("p",null,"Note: all classes marked with an asterisk (","*",") can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brdv/prodtest-demo/tree/sprint/5/src/Common/Domain.Common"},"Domain.Commons")," project. They are not directly part of the kitchen service, but it does depend on them."),(0,r.kt)("p",null,"As you can see in the image above. The kitchen service consists of various classes."),(0,r.kt)("p",null,"The main starting point is the ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenWorker"),". This class is responsible for subscribing and listening to the message queue for new orders. It depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"IKitchenService"),", in the form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenService"),". This service is responsible for handling orders and is dependent on the ",(0,r.kt)("inlineCode",{parentName:"p"},"IKitchenRepository")," in the form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenRepository")," implementation. The ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenRepository")," functions as a data access layer over the database and is dependent on the ",(0,r.kt)("inlineCode",{parentName:"p"},"KitchenDbContext"),". This class makes the connection with the database and sets up al relevant tables and data models. It is a subclass of Entity Framework's ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext?view=entity-framework-6.2.0"},(0,r.kt)("inlineCode",{parentName:"a"},"DbContext")),".\nThereby, in the class diagram, you can find two model classes. An ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderModel"),", and a ",(0,r.kt)("inlineCode",{parentName:"p"},"HandledOrder"),". These classes are not directly part of the kitchen service, but the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brdv/prodtest-demo/tree/sprint/5/src/Common/Domain.Common"},"Domain.Commons")," project. The kitchen service is dependent on these classes and uses them via a project reference."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In the class diagram above you see two services; the (I)KitchenService, (I)KitchenRepository and the (I)KitchenDbContext. These services are created and passed by using ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-7.0"},"dependency injection"),". An example of how this is implemented can be found below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dependency Injection",src:n(1559).Z,width:"2456",height:"440"})),(0,r.kt)("h2",{id:"development-choices"},"Development choices"),(0,r.kt)("p",null,"Below you find a table containing (architectural) decisions with their context, options, choice and rationale."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Context"),(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Choice"),(0,r.kt)("th",{parentName:"tr",align:null},"Rationale"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In order to make sure the HandledOrders data of Vnext will not pollute Vlatest data, we need to separate the data generated by both services"),(0,r.kt)("td",{parentName:"tr",align:null},"Separate database, separate table, extending data model"),(0,r.kt)("td",{parentName:"tr",align:null},"Separate table"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"/prodtest-docs/demo/technical-detail/data-separation#database"},"this")," page")))))}h.isMDXComponent=!0},1559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/di-example-kitchen-service-96f863cf0bd32881818909788b41c99a.png"},4671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kitchen-service-architecture-layers-41594501fff01f6df77a1bd55066eaa8.png"},9645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kitchen-service-class-diagram-466dfe9154adad43301a7bdd6873b397.png"},1014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kitchen-service-swim-lane-ffbebddc2feb25ee9baf86d6e2a03b73.png"}}]);