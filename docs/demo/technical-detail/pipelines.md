---
title: Pipelines
sidebar_position: 5
---

The [prodtest-demo repository](https://github.com/brdv/prodtest-demo) uses pipelines to do a few automatic checks on the codebase. This page describes what pipelines are used, why and how they are implemented.

## Automated checks

A pipeline is one or a set of processes that perform certain actions to your code base. Some examples are testing, building and deploying your code. The pipelines can be run automatically in many git providers. GitHub, the provider used for de demo project, has Actions (basically pipelines) to automate these checks. The main benefit of using these automated pipelines is that you can make sure code is not merged or deployed without passing all the specified checks.

## Workflows

In the demo project, there are a few checks implemented to assure code quality and functionality. These checks are implemented in so called workflow files. A distinction has been made between two types of workflows: one on the whole project/solution, and on per-service. The used workflows are as follows:

### Solution level

At solution level, two checks are conducted.

#### Code conventions

First, the code is checked for code conventions. For this check [dotnet format](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-format) is used. A rule set is defined in the `.editorconfig` file. This rule set is copied from the dotnet project. The implemented pipeline is as follows:

```yaml showLineNumbers
lint-project:
  name: Check Code Conventions
  runs-on: ubuntu-latest
  strategy:
    matrix:
      dotnet-version: ['6.x.x']
  steps:
    - uses: actions/checkout@v3
    - name: Setup .NET Core SDK ${{ matrix.dotnet-version }}
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: ${{ matrix.dotnet-version }}
    - name: Install dependencies
      run: dotnet restore ./src
    - name: Format
      run: dotnet format --version && echo "\n" && dotnet format style ./src --verbosity n --verify-no-changes --severity warn
```

As you can see. It runs on ubuntu latest and runs the command `dotnet format --version && echo "\n" && dotnet format style ./src --verbosity n --verify-no-changes --severity warn`.
It asks for the version first, this is done for debugging purposes. The it formats the `./src` folder to check for code style. The flags mean the following: `--verbosity n` normal verbosity, has to be specified or no logs are shown; `--verify-no-changes`, makes the pipeline fail if the code is formatted; --severity warn, formats everything that is specified as warning of up (error).

#### SonarScanner

The second job in this workflow is running SonarScanner. SonarScanner is a SonarQube code scanner that checks multiple quality meassures. For example, it checks if there are any known bugs or code smells in the project. The sonarscanner job is implemented as follows:

```yaml showLineNumbers
sonar:
  name: Sonar
  runs-on: ubuntu-latest
  needs: lint-project
  steps:
    - name: Set up JDK 11
      uses: actions/setup-java@v1
      with:
        java-version: 1.11
    - uses: actions/checkout@v2
      with:
        fetch-depth: 0 # Shallow clones should be disabled for a better relevancy of analysis
    - name: Cache SonarCloud packages
      uses: actions/cache@v1
      with:
        path: ~\sonar\cache
        key: ${{ runner.os }}-sonar
        restore-keys: ${{ runner.os }}-sonar
    - name: Install SonarCloud scanners
      run: |
        dotnet tool install --global dotnet-sonarscanner
    - name: Build and analyze
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Needed to get PR information, if any
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
      run: |
        dotnet-sonarscanner begin /k:"prodtest-demo" /o:"isbumpafstuderen" /d:sonar.login="${{ secrets.SONAR_TOKEN }}" /d:sonar.host.url="https://sonarcloud.io" /d:sonar.cs.opencover.reportsPaths=**/TestResults/**/coverage.opencover.xml
        dotnet build ./src
        dotnet test ./src --logger trx --collect:"XPlat Code Coverage" -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=opencover
        dotnet-sonarscanner end /d:sonar.login="${{ secrets.SONAR_TOKEN }}"
```

The final run command runs the scanner. It also adds code coverage on line 29 using coverlet. It pushes the results tot the prodtest-demo sonarcloud project.

### Project level

Each individual project has some checks that need to run per-project. This is to help identifying possible issues as quickly as possible. The jobs are: Mutation testing (with [Stryker](https://stryker-mutator.io)) and building. The workflow jobs are specified in the file 'service-check.yaml'. They can be used by other files, this looks as follows:

```yaml showLineNumbers
name: OrderService

on:
  pull_request:
    branches:
      - main
      - 'sprint/**'

jobs:
  run-checks:
    uses: brdv/prodtest-demo/.github/workflows/service-check.yaml@sprint/4
    with:
      project_dir: 'src/Services/Order/Order.API'
      test_project: 'src/Services/Order/Order.API.Tests/'
```

On line 10, we use a yaml file in the repository itself. This way we can define the jobs once, and use them in multiple service-workflows.
