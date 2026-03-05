import { Database, Gem, Rotate3d, Code, ToggleRight, ListChecks } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import studiolys from '../assets/projects/studiolys-format.png'
import studiolys1 from '../assets/projects/studiolys-1.png'
import studiolys2 from '../assets/projects/studiolys-2.png'
import studiolys3 from '../assets/projects/studiolys-3.png'

import serenity from '../assets/projects/serenity-format.png'


export type ProjectFeature = {
    title: string
    description: string
    icon: LucideIcon
}
export type Project = {
    slug: string
    title: string
    subtitle: string
    longDescription: string []
    tech: string[]
    features?: ProjectFeature[]
    image: string []
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
                    icon: ListChecks

                },
                {
                    title: "Composants interactifs",
                    description: "Formulaire de contact, tarification dynamique, carrousel de témoignages, modals.",
                    icon: Database
                },
                {
                    title: "Visualisation des données",
                    description: "Graphiques hebdomadaires pour suivre l'évolution et comparer les performances semaine après semaine.",
                    icon: Database
                },
                {
                    title: "Persistance locale",
                    description: "Données stockées localement via Hive sans dépendance serveur.",
                    icon: Database
                },
                
            ]
        },

    ]