---
title: Technical detail
sidebar_position: 1
---

This page gives an overview of the components of the demo project.

## Introduction

Documentation about testing in production is neat. Know what's even better? Implementation examples! This is the reason the demo project was brought into existence. This project shows how a the documented ways of testing in production can be implemented in real-world projects.

This section will give an overview of the software components in the afore mentioned demo project.

## Schematic overview

![Component overview](./img/components-overview.png)

As of right now, the project consists of two components: the Proxy ([Traefik](https://traefik.io/)) and the RegisterService.

### Proxy (Traefik)

The proxy is the only component that can be accessed from outside of the cluster. The job of the proxy is to evaluate the request and forward it to the appropriate service.

### OrderService

The order service is the first entrypoint for requests. It is this service that handles orders from hypothetical customers. It consists of an API that has three endpoints. Read more about this service [here](./order-service.md).
