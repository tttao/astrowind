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

### 12. Processus admin

Les tâches ponctuelles (ex. migration de baes de données) doivent être exécutées dans le même environnement que l’app.

✅ **Checklist**  

* Scripts de maintenance automatisés  
* Depuis la même base de code

### Définition(s) d’une application cloud-native

Demandez à 10 développeurs ce que signifie « cloud-native », vous obtiendrez 10 réponses différentes.

Pour certains, ce sont juste des apps qui tournent dans le cloud. Pour d’autres, c’est Kubernetes, le serverless ou les microservices. La réalité est plus subtile.

Selon la [Cloud Native Computing Foundation (CNCF), ](https://www.cncf.io)une application cloud-native est :

> "Un système faiblement couplé, interopérable, sécurisé, résilient, gérable, durable et observable."

Voyons ça en détail.

### Caractéristiques clés

* **Résilience** : tolérance aux pannes
* **Scalabilité** : adaptation automatique à la charge
* **Observabilité** : visibilité sur les métriques, logs, traces
* **Automatisation** : CI/CD, IaC, gouvernance
* **Couplage faible** : microservices et modularité

### Technologies cloud-native (liste non exhaustive)

* Conteneurs (Docker)
* Orchestration (Kubernetes)
* Service Mesh (Istio)
* Infrastructure immuable
* Fonctions serverless
* APIs déclaratives (GraphQL, REST)

## Application 12-Factor : la fondation du cloud-native

En quoi les 12 facteurs sont-ils liés au cloud-native ?

La vérité, c’est que la méthode 12-Factor est l’**ancêtre spirituel** du cloud-native. Ses idées (stateless, config externe, jetabilité…) sont aujourd’hui des **prérequis** au cloud-native.

**Comparatif rapide:**

| **Twelve-Factor App**       | **Cloud-Native App**                      |
| --------------------------- | ----------------------------------------- |
| Processus stateless         | Conteneurs ou fonctions stateless         |
| Config par variables d’env. | Config déclarative (YAML, Helm…)          |
| Logs vers stdout/stderr     | Pipelines d’observabilité centralisés     |
| Tâches admin ponctuelles    | Jobs Kubernetes, fonctions serverless     |
| Parité dev/prod             | Pipelines CI/CD immuables                 |
| Concurrence par processus   | Autoscaling horizontal via orchestrateurs |

Le cloud-native reprend les principes des 12 facteurs et les **étend horizontalement et opérationnellement** avec les outils modernes du cloud.

## Pourquoi c’est important : choisir la bonne stratégie

Que vous créiez une nouvelle plateforme SaaS, que vous migriez un monolithe ou lanciez des microservices, votre plan de développement est essentiel.

Scénarios et recommandations:

| **Scenario**                    | **Approche recommandée**                 |     |
| ------------------------------- | ---------------------------------------- | --- |
| Projet microservices greenfield | Démarrer en 12-Factor, puis outils cloud |     |
| Migration de monolithe          | Refactor avec la checklist 12-Factor     |     |
| Backend serverless              | Appliquer les principes 12-Factor        |     |
| Déploiement sur Kubernetes      | Combiner 12-Factor et stack cloud-native |     |

✅ **Checklist to move toward Cloud-Native**  

* * Refactoriser selon les 12 facteurs
* * Conteneuriser et utiliser un orchestrateur de containeurs (ex. Kubernetes)   

  * CI/CD pour automatiser les builds et les releases  
* Utiliser l'infra as code (ex Terraform) pour de l'infrastructure reproductible
* Utiliser des outils d'observabilité (Prometheus, Grafana)  
* Sécurité à toutes les couches  

## Conclusion

Les applications 12-Factor et cloud-native **ne s’excluent pas**.

En réalité, les secondes sont souvent **l’évolution naturelle** des premières.

Voyez les 12 facteurs comme une fondation intemporelle.

Le cloud-native en est l’extension moderne, orientée scalabilité, agilité et robustesse.

**Vous développez pour le cloud, dans le cloud, ou à cause du cloud ?**

Alors adopter les deux approches n’est pas une option — c’est indispensable.

💡 **Prochain pas :** Auditez votre application avec les 12 facteurs. Puis, tracez votre stratégie cloud-native pour les prochains mois.



## FAQ

❓ **Quelle est la principale différence entre une app 12-Factor et une app cloud-native ?**

Une app 12-Factor suit une méthode de conception, tandis qu’une app cloud-native s’appuie sur l’infrastructure cloud et les pratiques opérationnelles modernes. L’une est une philosophie, l’autre une réalité opérationnelle.

❓ **Peut-on ignorer les 12 facteurs en cloud-native ?**

Pas vraiment. La plupart des apps cloud-native performantes respectent implicitement les 12 principes.

❓ **La méthode 12-Factor est-elle dépassée en 2025 ?**

Absolument pas. Elle reste un socle essentiel, même dans les environnements modernes.

❓ **Peut-on appliquer les 12 facteurs aux apps serverless ou conteneurisées ?**

Oui, totalement. Les principes fondamentaux s’appliquent dans tous ces cas.

❓ **Faut-il Kubernetes pour être cloud-native ?**

Non, même si Kubernetes est un outil central, on peut être cloud-native avec du serverless, du PaaS ou d’autres services managés.



## References

* [The Twelve-Factor App](https://12factor.net)
* [Cloud Native Computing Foundation](https://www.cncf.io/)
* [AWS Cloud-Native Guide](https://aws.amazon.com/what-is/cloud-native/)
* [NGINX - Migrating to Cloud-Native Architectures](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Migrating_to_Cloud-Native_Application_Architecutres_NGINX.pdf)
