---
title: Project Structure
sidebar_position: 0
---

This pages shows the project structure and describes what files to find where.
The project consists of the following files

## root [ ./ ]

This is the root folder of the project. You can find all folders listed below here. Besides those folders, the following files are stored in the root folder.

- .gitignore
  File that tells git what to ignore.
- README.md
  Readme documentation file.
- stryker-config.json
  Configuration file for [stryker](https://stryker-mutator.io).

## GitHub config files [ ./.github ]

The GitHub folder currently contains only workflow files. These files describe CI/CD jobs to be run, what to run and when to do it.

## VSCode config files [ ./.vscode ]

The VSCode folder contains two files:

- **tasks.json**

  Specifies VSCode tasks for the project. Tasks such as 'test', 'build' and 'watch'.

- **launch.json**

  Contains the settings to use the VSCode debugger.

## Kubernetes manifests [ ./manifests ]

This folder contains all kubernetes manifests.

## Scripts [ ./scripts ]

This folder contains scripts for the demo-project. Currently this folder contains two subfolders and a script.

- **simulate_api_calls.sh**

  This script can be used to run a specified (default 500) number of POST requests on the API to use for testing purposes.

### docker [ ./scripts/docker ]

- **build-prodtest-images.sh**

  Script to build the docker images of the Kitchen- and OrderService.

### kubernetes [ ./scripts/kubernetes ]

- **cleanup.sh**

  This script deletes all resources that are applied by the script above.

- **pfw-rabbitmq.sh**

  Script to open up the RabbitMQ dashboard on localhost:15672

- **setup-infra.sh**

  Sets up the infrastructure components of the project in kubernetes cluster. Things like the proxy, database and RabbitMQ instance.

- **setup-darklaunch.sh**

  This script applies all resources needed for the dark launch to a default kubernetes cluster.

## Source code [ ./src ]

This folder contains all source code for the ProdtestDemo project. It contains the following subfolders:

### Common

This folder contains the code for shared resources for all services in the repository.

### Services

This folder contains the code for all services of the demo project. The subfolders are:

#### Kitchen

Contains the projects for the KitchenService: the KitchenService itself and the tests for the KitchenService.

#### Order

Contains the projects for the OrderService: the Order API and the tests therefore.
