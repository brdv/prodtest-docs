---
title: prodtest
sidebar_position: 1
slug: /
---

# prodtest

The testing in production knowledge framework

---

**Documentation**: https://brdv.github.io/prodtest-docs

**Demo Code**: https://github.com/brdv/prodtest-demo

---

There is a lot of information about [testing in production](https://www.google.com/search?q=testing+in+production&oq=testing+in+production) (TIP) online, however, various sources give different names to the same techniques and not all information is as elaborate as others. Therefore prodtest (say protest) aims to centralize and standardize knowledge about testing in production on this platform.

On this site you will find:

- **Content** about TIP
- **Content** about TIP
- **Tips** to implement TIP

The prodtest project consists of two repositories: the [docs](https://github.com/brdv/prodtest-docs) and the [demo](https://github.com/brdv/prodtest-demo) project. The documentation repository is used to manage the [prodtest website](https://brdv.github.io/prodtest-docs) and the demo project provides extra information and examples on how to implement various ways of production testing.

## Running the documentation locally

If you want to run the documentation locally, to make a contribution for instance, follow these steps:

### Prerequisites

---

Make sure you have [nodejs](https://nodejs.org/en/) (and [yarn\*](https://yarnpkg.com/getting-started/install)) installed. If you have not done so already, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and create a [GitHub account](https://github.com/join).

\* _The development team uses yarn as package manager. NPM van be used locally but will not be accepted in contributions._

### Local installation

---

**Note: On Windows, please use Git Bash or WSL**

Clone the repository:

```bash
git clone git@github.com:brdv/prodtest-docs.git
```

Install the dependencies:

```bash
cd prodtest-docs
yarn install
```

Start the site:

```bash
yarn start
```

Check the site in your [browser](http://localhost:3000/prodtest-docs)
