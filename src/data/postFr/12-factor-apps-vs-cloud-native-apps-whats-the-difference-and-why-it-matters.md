---
title: "Applications 12 facteurs vs Applications cloud-native : quelle est la
  différence et pourquoi est-ce important ?"
excerpt: Fondations pour concevoir des applications sécurisées, résilientes,
  faciles à gérer, durables et observables.
category: Software design
tags:
  - ARCHITECTURE
image: https://media.fabricemonnier.com/pexels-thisisengineering-3861972.jpg
publishDate: 2025-04-18T16:38:00.000Z
author: Fabrice Monnier
---
# Applications 12 facteurs vs Applications cloud-native : quelle est la différence et pourquoi est-ce important ?

**Fondations pour concevoir des applications sécurisées, résilientes, faciles à gérer, durables et observables**

## IntroductionLe monde du développement logiciel évolue à une vitesse fulgurante.

De nouveaux paradigmes émergent, les technologies changent, et avec eux apparaissent de nouvelles attentes quant à la manière de concevoir, déployer et maintenir les applications.

Dans ce contexte, deux termes reviennent souvent dans les discussions techniques, les entretiens d’embauche, les revues d’architecture ou les débats DevOps : **applications 12 facteurs** et **applications cloud-native**.

Mais que signifient-ils vraiment ?

Sont-ils équivalents ? Complémentaires ? Ou issus de deux époques différentes ?

Si vous êtes développeur, architecte ou passionné du cloud, vous avez probablement entendu parler des deux — mais la distinction entre eux peut rester floue. Pourtant, comprendre cette différence peut avoir un impact considérable sur la manière dont vous concevez et faites évoluer vos systèmes.

Ce post a pour but d'éclaircir  sujet.

Nous allons comparer la méthodologie 12-Facteurs — un ensemble fondamental de principes pour créer des applications web modernes — avec les pratiques architecturales actuelles du cloud-native. Vous apprendrez comment chaque approche fonctionne, comment elles s’alignent, où elles divergent, et surtout, comment les appliquer efficacement dans votre propre stratégie de développement.

Plongeons dans le vif du sujet.

## La méthodologie des applications 12 facteurs

En 2011, Adam Wiggins, cofondateur de Heroku, publia la méthodologie « The Twelve-Factor App ». Ce n’était pas juste un autre guide de bonnes pratiques de codage : c’était un cadre ambitieux conçu pour résoudre les problèmes réels rencontrés par les développeurs dans la création et l’exploitation d’applications SaaS à grande échelle.

Ces 12 facteurs sont devenus un manifeste — une feuille de route éprouvée pour des logiciels évolutifs, portables et résilients.

### 1. Codebase

Une seule base de code suivie par un système de contrôle de version, utilisée dans tous les déploiements. Pas de copier-coller de projets.

✅ **Checklist**

* Stocker le code dans un dépôt Git
* Réutiliser le même dépôt pour tous les environnements
* Utiliser des tags pour les versions

### 2. Dépendances

Déclarer toutes les dépendances dans un manifeste (ex. : `package.json`, `pom.xml`). Ne jamais compter sur des packages installés globalement.

✅ **Checklist**

* Utiliser des gestionnaires de dépendances natifs (e.g. `npm`, `maven`, `gradle`)
* Éviter les dépendances cachées

### 3. Config

**Séparer la configuration du code**. Les secrets, URLs, ports, etc. doivent être dans des variables d’environnement.

✅ **Checklist**  

* Utiliser `.env` ou des gestionnaires de secrets
* Ne rien coder en dur pour gérer les différences de comportement entre environnemens

### 4. Services externes

Les bases de données, caches ou files de messages sont des services externes. Les considérer comme des ressources.

✅ **Checklist**  

* Accès via URLs ou service locators
* On doit pouvoir remplacer facilement un service par un autre (e.g. MySQL par Postgre) via la conf

### 5. Build, Release, Run

Séparer le pipeline en 3 étapes :

* **Build** → Compilation
* **Release** → Intégration avec la config
* **Run** → Exécution

✅ **Checklist**

* CI/CD pour automatiser les builds
* Artéfacts séparés des environnements

### 6. Processus

L’application doit être conçue comme des processus **sans état**. La persistance doit être externe.

✅ **Checklist**  

* Pas de fichiers locaux
* Utilisation de DB, queues, caches distribués

### 7. Binding de port

L’application doit exposer son propre serveur web (ex. Express, Spring Boot), sans dépendre d’Apache ou Nginx.

✅ **Checklist**  

* Utiliser les servers fournis par le framework utilisé (ex. Express.js, Spring Boot)  
* Le `$PORT` est défini dans une variable d'environment

### 8. Concurrence

Possibilité de montée en charge via des **processus multiples** et indépendants.

✅ **Checklist**  

* Scalabilité horizontale
* Séparer les rôles (web, workers…)

### 9. Jetable

Démarrage rapide, arrêt propre. Utile pour le scaling rapide et la résilience.

✅ **Checklist**  

* Éviter les temps de démarrage longs  
* Gérer correctement les signaux système

### 10. Parité Dev/Prod

Garder les environnements aussi proches que possible pour réduire les **bugs post- déploiement**. Même OS, mêmes services, et mêmes versions.

✅ **Checklist**  

* Conteneurs/VMs  
* Répliquer la production en dev/staging

### 11. Logs

Les logs sont des flux d’événements. Les écrire sur stdout/stderr, pas sur fichiers.

✅ **Checklist**  

* Rediriger vers des outils de logs  
* Pas de rotation de fichiers

### 12. Admin Processes

Run one-off admin tasks (like database migrations) in the same environment as the app.

✅ **Checklist**  

* Automate maintenance scripts  
* Run from the same codebase as the app

## Definition(s) of a Cloud-Native Application

Ask ten developers what “cloud-native” means, and you might get ten different answers.

Some think it’s simply “apps that run in the cloud.” Others associate it with Kubernetes, microservices, or serverless. The truth is more nuanced—and **more powerful**.

The [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io) defines cloud-native apps as:

> "Loosely coupled systems that interoperate in a manner that is secure, resilient, manageable, sustainable, and observable."

Let’s break that down.

### Core Characteristics of Cloud-Native Apps

1. **Resilience** – Built to handle failure gracefully. The system doesn’t crash just because one service goes down.
2. **Scalability** – Can grow or shrink dynamically based on demand.
3. **Observability** – Deep insights into metrics, traces, logs, and behavior.
4. **Automation** – CI/CD pipelines, Infrastructure as Code (IaC), policy-driven governance.
5. **Loose Coupling** – Microservices architecture enables flexibility and modularity.

### Cloud-Native Technologies (Not Exhaustive)

* Containers (e.g., Docker)
* Orchestration (e.g., Kubernetes)
* Service Mesh (e.g., Istio)
* Immutable Infrastructure
* Serverless Functions
* Declarative APIs (e.g., GraphQL, REST)

## Twelve-Factor App: The Foundation for Cloud-Native

So how do the Twelve-Factor principles relate to cloud-native architecture?

In many ways, **the Twelve-Factor App is the spiritual ancestor of cloud-native thinking**. Its ideas—statelessness, configuration management, disposability—are now *requirements* for cloud-native development.

Let’s compare:

| Twelve-Factor App         | Cloud-Native App                           |
| ------------------------- | ------------------------------------------ |
| Stateless processes       | Stateless containers or functions          |
| Environment-based config  | Declarative configuration via YAML or Helm |
| Logs to stdout            | Centralized observability pipelines        |
| One-off admin processes   | Kubernetes Jobs or serverless tasks        |
| Dev/prod parity           | Immutable CI/CD pipelines                  |
| Concurrency via processes | Horizontal autoscaling with orchestration  |

Cloud-native architecture simply takes the 12-Factor philosophy and scales it **horizontally and operationally** using modern cloud primitives.

## Why This Matters: Choosing the Right Plan

Whether you’re designing a new SaaS platform, migrating legacy monoliths, or launching microservices, your **development plan** matters.

Here’s how to choose the right approach:

| Scenario                         | Recommended Approach                             |
| -------------------------------- | ------------------------------------------------ |
| Greenfield microservices project | Start with 12-Factor → Adopt cloud-native tools  |
| Legacy monolith migration        | Refactor using 12-Factor as a checklist          |
| Serverless backend               | Apply 12-Factor rules (especially statelessness) |
| Kubernetes deployment            | Use both models: 12-Factor + cloud-native stack  |

✅ **Checklist to move toward Cloud-Native**  

* Refactor apps using 12-Factor principles  
* Containerize and adopt orchestration (Kubernetes)  
* Implement CI/CD for automated builds and releases  
* Use IaC (Terraform, Pulumi) for reproducible infra  
* Integrate observability tools (Prometheus, Grafana)  
* Enforce security at every layer (Zero Trust, policies)  

## Conclusion

12-Factor Apps and Cloud-Native Apps are not mutually exclusive. In fact, the latter is often a natural evolution of the former.

**Think of the 12-Factor methodology as the bedrock**—a timeless set of rules that remain relevant, even as the tech stack evolves.

**Cloud-native practices extend that foundation**, enabling scalability, resilience, and agility at unprecedented levels.

If you're building for the cloud, on the cloud, or *because* of the cloud, embracing both frameworks is not optional—it's essential.

Ready to modernize your architecture?

💡 **Take the next step**: Audit your application today using the 12 factors. Then, map your cloud-native strategy for the next quarter.

## FAQ

### ❓What is the main difference between a 12-Factor App and a Cloud-Native App?

A 12-Factor App is a methodology for building scalable and maintainable apps, while a Cloud-Native App leverages cloud infrastructure and practices like orchestration, observability, and automation. One is a philosophy of design, the other is an operational reality.

### ❓Can a Cloud-Native App ignore the 12-Factor methodology?

Not really. Most successful cloud-native apps implicitly follow the 12-Factor principles. It's hard to build scalable microservices without statelessness or proper config management.

### ❓Is 12-Factor outdated in 2025?

Absolutely not. The 12-Factor principles are still relevant and often form the baseline for cloud-native and microservices best practices.

### ❓Can I apply 12-Factor principles to serverless or container-based apps?

Yes. Whether you're using AWS Lambda, Google Cloud Run, or Kubernetes, the core principles like config separation, statelessness, and disposability still apply.

### ❓Do I need Kubernetes to be Cloud-Native?

No—but Kubernetes is one of the most popular orchestration tools that facilitates cloud-native architecture. You can be cloud-native using serverless, PaaS, or managed services.

## References

* [The Twelve-Factor App](https://12factor.net)
* [Cloud Native Computing Foundation](https://www.cncf.io/)
* [AWS Cloud-Native Guide](https://aws.amazon.com/what-is/cloud-native/)
* [NGINX - Migrating to Cloud-Native Architectures](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Migrating_to_Cloud-Native_Application_Architecutres_NGINX.pdf)
