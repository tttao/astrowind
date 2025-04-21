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
Intro

## The Twelve-Factor App methodology

Published in 2011 by [Heroku](https://www.heroku.com/) cofounder [Adam Wiggins](https://adamwiggins.com), the Twelve-Factor App provides best practices for building SaaS (software-as-a-service) applications. The methodology breaks down those best practices  into 12 factors:

1. **Codebase.** The application's code is versioned and is the same across all deploys.
2. **Dependencies.** All dependencies are explicitly defined in a manifest (e.g. package.json file for NodeJS projects, pom.xml file for Maven projects). The application should not rely on any implicit dependency -e.g. a system-wide package-. 
3. **Config.** There should be a strict separation of config and code. In other words (quoting <https://12factor.net/>), "Config varies substantially across deploys, code does not".
4. **Backing services**
5. **Build, release, run**
6. **Processes**
7. **Port binding**
8. **Concurrency**
9. **Disposability**
10. **Dev/prod parity**
11. **Logs**
12. **Admin processes**

## Definition(s) of a Cloud-Native application

## Twelve-Factor App: the Foundation for Cloud-Native

## Why It Matters for Modern Application Development

## Further Reading

Matt Stine, Migrating to cloud-native application architectures
