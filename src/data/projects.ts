import { MousePointerClick, Files, Variable, Database, Gem, Rotate3d, Code, ToggleRight, ListChecks, ChartColumn, Layers, Layers2, Thermometer, Sword, Camera, Play, Server, Container, GitBranch, Cpu, Library, TextInitial, UserKey  } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import studiolys from '../assets/projects/studiolys-format.png'
import studiolys1 from '../assets/projects/studiolys-1.png'
import studiolys2 from '../assets/projects/studiolys-2.png'
import studiolys3 from '../assets/projects/studiolys-3.png'

import serenity from '../assets/projects/serenity-format.png'

import terminus from '../assets/projects/terminus-format.png'
import terminus1 from '../assets/projects/temrinus-1.png'
import terminus2 from '../assets/projects/terminus-2.png'
import terminus3 from '../assets/projects/terminus-3.png'

import studiogaming from '../assets/projects/studiogaming-14.webp'
import studiogaming1 from '../assets/projects/studiogaming-12.webp'
import studiogaming2 from '../assets/projects/studiogaming-15.webp'
import studiogaming3 from '../assets/projects/studiogaming-13.webp'



import scss from '../assets/projects/scss-format.webp'

import dashboard from '../assets/projects/dashboard.webp'

export type ProjectFeature = {
    title: string
    description: string
    icon: LucideIcon
}
export type Project = {
    slug: string
    title: string
    subtitle: string
    longDescription: string[]
    tech: string[]
    features?: ProjectFeature[]
    image: string[]
    github?: string
}

export const projects: Project[] =
    [
        {
            slug: "studio-lys",
            title: "Studio Lys",
            subtitle: "Site web de freelance",
            longDescription: ["Site vitrine personnel développé de A à Z pour présenter l'activité freelance de Studio Lys. Conçu comme une landing page moderne, il reflète autant une identité visuelle soignée qu'un savoir-faire technique affirmé. ",
                "L'interface mise sur un rendu premium avec des effets de glassmorphism, des dégradés maîtrisés et des animations fluides pilotées par Framer Motion — notamment une navbar responsive qui se masque au scroll. L'architecture adopte une approche data-driven : les contenus (services, témoignages, tarifs) sont centralisés dans des fichiers de données typés via des interfaces TypeScript, ce qui facilite la maintenabilité et l'évolution du site.",
                "Côté fonctionnalités, le site intègre un formulaire de contact connecté à un service d'envoi d'e-mails, un composant de tarification interactif, un carrousel de témoignages avec notation par étoiles, ainsi qu'un système de modals. Le suivi des performances est assuré via Google Analytics 4."
            ],
            tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion", "Next.js (App Router)"],
            image: [studiolys, studiolys1, studiolys2, studiolys3],
            github: 'https://github.com/elysabeth-studiolys/studiolys',

            features: [
                {
                    title: "UI Prenium",
                    description: "UI premium — Glassmorphism, dégradés, navbar hide-on-scroll et animations Framer Motion.",
                    icon: Gem

                },
                {
                    title: "Animations Framer Motion",
                    description: "Animations fluides pilotées par Framer Motion, notamment une navbar responsive qui se masque au scroll.",
                    icon: Rotate3d
                },
                {
                    title: "Next.js 14 + TypeScript",
                    description: "App Router, architecture data-driven avec interfaces TypeScript centralisées pour les contenus.",
                    icon: Code
                },
                {
                    title: "Composants interactifs",
                    description: "Formulaire de contact, tarification dynamique, carrousel de témoignages, modals.",
                    icon: ToggleRight
                }
            ]
        },
        {
            slug: "serenity",
            title: "Serenity",
            subtitle: "Application mobile de suivi personnel",
            longDescription: ["Application mobile de suivi personnel développée avec Flutter, conçue pour centraliser la gestion du quotidien en un seul outil. Organisée autour de quatre modules — bien-être, école, maison et projets — elle offre une vue d'ensemble claire sur les différentes sphères de la vie quotidienne depuis une interface unifiée.",
                "Le projet repose sur une clean architecture avec pattern repository, séparant strictement la logique métier de l'UI. La gestion d'état est assurée par Riverpod, la persistance locale par Hive — sans dépendance serveur, les données restent disponibles hors ligne.",
                "Chaque module embarque ses propres fonctionnalités : suivi des tâches et dépenses avec filtrage par semaine, gestion des habitudes et indicateurs de bien-être, suivi de projets personnels. L'architecture découplée permet à chaque module d'évoluer indépendamment."
            ],
            tech: ["Flutter · Dart", "Riverpod", "Hive", "Clean Architecture"],
            image: [serenity],
            github: 'https://github.com/elysabeth-studiolys/studiolys-app',

            features: [
                {
                    title: "Suivi multi-modules",
                    description: "Modules bien-être, école, maison et projets regroupés dans une seule interface.",
                    icon: Layers

                },
                {
                    title: "Gestions des tâches & dépenses",
                    description: "Suivi des tâches et dépenses avec filtrage par semaine.",
                    icon: ListChecks
                },
                {
                    title: "Visualisation des données",
                    description: "Graphiques hebdomadaires pour suivre l'évolution et comparer les performances semaine après semaine.",
                    icon: ChartColumn
                },
                {
                    title: "Persistance locale",
                    description: "Données stockées localement via Hive sans dépendance serveur.",
                    icon: Database
                },

            ]
        },
        {
            slug: "terminus",
            title: "Terminus",
            subtitle: "Jeu de plateforme 2D basé sur des mécaniques de température",
            longDescription: ["Jeu réalisé dans le cadre d'une Game Jam sous Unity en C#, où j'ai pris en charge le développement technique et le game design. Le concept repose sur des mécaniques de température comme moteur principal du gameplay : un système de valeurs dynamiques géré en code, qui conditionne en temps réel les actions, capacités et la survie du personnage.",
                "Côté développement, le projet implique la conception d'un système de heat management custom, la gestion des états du joueur via des scripts C#, une IA ennemie réactive, ainsi qu'un système de combat et de détection au sol. La caméra dynamique est pilotée par Cinemachine, et l'ensemble des assets audio est géré via un AudioManager centralisé.",
                "Un projet livré sous contrainte de temps (5 jours), de la mécanique de jeu jusqu'au déploiement WebGL sur itch.io — démontrant la capacité à architecturer, coder et shipper un produit fonctionnel rapidement."],
            tech: ["Unity", "C#", "CineMachine", "WebGL"],
            image: [terminus, terminus1, terminus2, terminus3],
            github: 'https://github.com/elysabeth-studiolys/GameJam-Terminus',

            features: [
                {
                    title: "Mécanique de température",
                    description: "Système de chaleur/froid influençant directement le gameplay et l'état du joueur.",
                    icon: Thermometer

                },
                {
                    title: "Combat & IA ennemie",
                    description: "Ennemis avec comportements autonomes et système de dommages.",
                    icon: Sword
                },
                {
                    title: "Caméra Cinemachine",
                    description: "Suivi dynamique du joueur adapté aux niveaux 2D.",
                    icon: Camera
                },
                {
                    title: "Déploiement WebGL",
                    description: "Jeu jouable directement dans le navigateur via itch.io.",
                    icon: Play
                },

            ]
        },
        {
            slug: "css-to-scss",
            title: "From CSS to SCSS",
            subtitle: "Projet scolaire dans le cadre de l'apprentissage de SCSS",
            longDescription: ["Projet scolaire réalisé dans le cadre d'un cours dédié à l'apprentissage de Dart Sass et SCSS. L'objectif : maîtriser les fondamentaux du préprocesseur et produire un CSS maintenable, structuré et scalable.",
                "Le site est composé de quatre pages — accueil, à propos, équipe et contact — entièrement stylisées en SCSS et compilées via Dart Sass. L'architecture des fichiers Sass suit une organisation modulaire par composants, avec un système de variables globales et de mixins réutilisables pour garantir la cohérence du design.", "Quelques interactions dynamiques légères viennent compléter l'ensemble, gérées en JavaScript vanilla, sans dépendance externe."],
            tech: ["HTML", "SCSS", "Dart Sass", "JavaScript"],
            image: [scss],
            github: 'https://github.com/elysabeth-studiolys/School-project-scss',

            features: [
                {
                    title: "Architecture SCSS modulaire ",
                    description: "Fichiers Sass organisés par composants et compilés via Dart Sass.",
                    icon: Layers2

                },
                {
                    title: "Variables & mixins",
                    description: "Système de design cohérent à travers des variables globales et mixins réutilisables.",
                    icon: Variable
                },
                {
                    title: "Site multi-pages",
                    description: "Navigation entre 4 pages HTML structurées sémantiquement.",
                    icon: Files
                },
                {
                    title: "Interactions JS",
                    description: "Comportements dynamiques légers pilotés par un script vanilla.",
                    icon: MousePointerClick
                },

            ]
        },
        {
            slug: "dashboard",
            title: "Dashboard gestion petites entreprises",
            subtitle: "Application CRM fullstack — PHP, Angular & MySQL",
            longDescription: [
                "Application CRM fullstack développée de A à Z, permettant de gérer contacts, entreprises, ventes et projets. L'architecture repose sur une séparation stricte backend/frontend : une API REST en PHP MVC expose des endpoints JSON consommés par un frontend Angular standalone.",
                "Le backend suit le pattern MVC avec des classes Collection abstraites, des modèles typés PHP 8, des requêtes PDO préparées et des jointures SQL pour enrichir les données (nom du contact associé à un deal, entreprise liée). Le frontend Angular exploite les services, l'injection de dépendances, le routing, et la change detection manuelle pour garantir la réactivité des données.",
                "L'ensemble est conteneurisé via Docker avec 3 images distinctes (MySQL, PHP, Angular/Nginx) orchestrées par Docker Compose. Un pipeline CI/CD GitHub Actions automatise le build et le déploiement à chaque push sur main."
            ],

            tech: ["Angular", "PHP", "MySQL", "Docker", "SCSS", "GitHub Actions"],
            image: [dashboard],
            github: 'https://github.com/elysabeth-studiolys/mini-crm-angular-php',

            features: [
                {
                    title: "API REST PHP MVC",
                    description: "Architecture MVC stricte avec routeur match(), modèles typés, PDO préparé et CORS configuré pour Angular.",
                    icon: Server
                },
                {
                    title: "Angular Standalone",
                    description: "Frontend Angular 21 avec services, HttpClient, routing, FormsModule et ChangeDetectorRef pour la réactivité.",
                    icon: Code
                },
                {
                    title: "Docker 3 conteneurs",
                    description: "Conteneurisation complète avec 3 images Docker (MySQL, PHP, Angular/Nginx) orchestrées via Docker Compose.",
                    icon: Container
                },
                {
                    title: "CI/CD GitHub Actions",
                    description: "Pipeline automatisé qui build et déploie l'application à chaque push sur la branche main.",
                    icon: GitBranch
                }

            ]
        },
        {
            slug: "studiogaming",
            title: "StudioGaming",
            subtitle: "Forum de jeux vidéo & vérification de setup Gaming",
            longDescription: [
                "Studio Gaming est une plateforme communautaire dédiée aux joueurs PC, conçue et développée en solo dans le cadre de ma formation en développement web et mobile. Le projet couvre l'intégralité du cycle de développement, de la modélisation de la base de données à la mise en production d'une API REST, jusqu'à la construction d'une interface React consommant cette API.",
                "L'architecture choisie repose sur une séparation stricte entre le back-end Symfony — exposant une API stateless sécurisée par JWT — et le front-end React, organisé en composants réutilisables avec une charte graphique cohérente. Cette approche reflète les standards actuels du développement en entreprise, où front et back évoluent indépendamment.",            
                "Au-delà des aspects techniques, Studio Gaming intègre des fonctionnalités pensées pour l'expérience utilisateur : un système de vérification de compatibilité matérielle basé sur des listes de composants ordonnées par performance, une collection personnalisable avec statuts de progression, un système d'avis communautaires et un blog éditorial. Le projet a également été mené en équipe pour les fonctionnalités jeux, impliquant une gestion de branches Git et une base de données partagée en cloud.",
            ],

            tech: ["Symfony 7", "MySQL", "JWT", "React", "Axios", "Markdown"],
            image: [studiogaming, studiogaming1, studiogaming2, studiogaming3],
            github: 'https://github.com/elysabeth-studiolys/mini-crm-angular-php',

            features: [
                {
                    title: "Vérification de compatibilité setup",
                    description: "L'Algorithme de comparaison par index de performance qui détermine si la configuration matérielle de l'utilisateur peut faire tourner un jeu donné.",
                    icon: Cpu
                },
                {
                    title: "Bibliothèque personnelle",
                    description: "Système de collection permettant d'ajouter des jeux, gérer leur statut de progression et laisser des avis notés consultables par la communauté.",
                    icon: Library
                },
                {
                    title: "Blog Markdown",
                    description: "Espace éditorial admin avec rendu côté client via react-markdown et remark-gfm pour des articles enrichis stockés en base de données.",
                    icon: TextInitial
                },
                {
                    title: "Authentification JWT & rôles",
                    description: "Sécurisation complète de l'API Symfony avec tokens JWT, gestion des rôles ROLE_USER / ROLE_ADMIN et protection des routes côté React.",
                    icon: UserKey
                }

            ]
        },

    ]