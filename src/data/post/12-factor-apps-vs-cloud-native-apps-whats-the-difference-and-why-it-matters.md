---
title: "12-Factor Apps vs Cloud-Native Apps: What's the Difference and Why It Matters"
excerpt: Excertp blablabla
category: Software design
tags:
  - ARCHITECTURE
image: https://media.fabricemonnier.com/pexels-thisisengineering-3861972.jpg
publishDate: 2025-04-18T16:38:00.000Z
author: Fabrice Monnier
---
Whether you are a seasoned software developer, a cloud enthousiast or a software architect, you might be familiar with the concept of Cloud-Native applications. 

Maybe you are also already aware of the older 12-Factor App methodology? But do you know the differences between those two concepts?

If the answer if no, this short article is what you need! If the answer is yes, you still might benefit from a refresher.

In both cases, mastering those concepts will help you design more robust, scalable and resilient applications, whether for the Cloud, or for on-premises infrastructures.

## The Twelve-Factor App methodology

Published in 2011 by [Heroku](https://www.heroku.com/) cofounder [Adam Wiggins](https://adamwiggins.com), the Twelve-Factor App provides best practices for building SaaS (software-as-a-service) applications. The methodology breaks down those best practices  into 12 factors:

1. **Codebase.** The application's code is versioned and is the same across all deploys.
2. **Dependencies.** All dependencies are explicitly defined in a manifest (e.g. package.json file for NodeJS projects, pom.xml file for Maven projects). The application should not rely on any implicit dependency -e.g. a system-wide package-. 
3. **Config.** There should be a strict separation of config and code. In other words (quoting <https://12factor.net/>), "Config varies substantially across deploys, code does not". Configuration should be stored as environment variables.
4. **Backing services.** The Twelve-Factor App methodology defines backing services as all services that the application consumes over the network -e.g. databases, APIs, messaging systems, etc.-. All backing services should be considered as resources and accessed via a URL or a service locator, stored in the config.
5. **Build, release, run.** The application lifecycle should be managed in three distinct, sequentials stages: **the Build stage**, where the codebase is converted into an immutable package. **The Release stage**, where the result of the Build stage is combined with the configuration, resulting in a versionned release ready to be deployed. And finally **the Run stage**, where the application is executed, as stateless and disposable processes. 
6. **Processes.** The app consists in one or many stateless  and share-nothing processes. Statelessness and share-nothing paradigm are pre-requisite in order to achieve efficient horizontal scaling.
7. **Port binding.** The app is a standalone service that listens on a port defined by the environment—no external web server required.
8. **Concurrency.** Use multiple stateless processes to handle different tasks, and scale each process type independently.
9. **Disposability.** Apps should be resilient and lightweight—able to start and stop quickly, making them easy to scale, deploy, and recover.
10. **Dev/prod parity.** Make all environments consistent to reduce bugs and deployment issues.
11. **Logs.** Output logs to the console and leave log management to external tools.
12. **Admin processes.** Run admin/maintenance tasks as one-off processes in the same environment as the app.

The Twelve-Factor App methodology, introduced over a decade ago, laid the foundation for what are now widely accepted best practices in modern application development. Its principles—such as strict separation of config, stateless processes, and environment parity—have become standard in today’s cloud-native and microservices architectures.

Despite its age, the methodology remains highly relevant and continues to provide a solid blueprint for designing scalable, maintainable, and resilient SaaS applications. It’s a timeless guide that aligns naturally with the demands of modern development workflows and infrastructure.

## Definition(s) of a Cloud-Native application

## Twelve-Factor App: the Foundation for Cloud-Native

## Why It Matters for Modern Application Development

## Further Reading

Matt Stine, Migrating to cloud-native application architectures
