---
title: Project Structure
sidebar_position: 0
---

This pages shows the project structure and describes what files to find where.
The project consists of the followin files

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

## Kubernetes manifests [ ./kubernetes ]

This folder contains all kubernetes manifests.

## Scripts [ ./scripts ]

This folder contains scripts for the demo-project. Currently this folder contains two subfolders and a script.

- **simulate_api_calls.sh**

  This script can be used to run a specified (default 500) number of POST requests on the API to use for testing purposes.

### docker [ ./scripts/docker ]

- **latest.deploy.sh**

  This script will build and deploy a 'latest'-tagged image of the RegisterService to the docker registry.

- **next.deploy.sh**

  This script will build and deploy a 'vnext'-tagged image of the RegisterService to the docker registry.

### kubernetes [ ./scripts/kubernetes ]

- **setup-darklaunch.sh**

  This script applies all resources needed for the dark launch to a default kubernetes cluster.

- **cleanup.sh**

  This script deletes all resources that are applied by the script above.

## Source code [ ./src ]

This folder contains all source code for the ProdtestDemo project. It contains the following subfolders:

### RegisterService

This folder contains the source code for the RegisterService.

### RegisterService.Tests

This folder contains the tests for the RegisterService.
