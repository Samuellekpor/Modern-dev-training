# Formation AI-Native Full-Stack Software Engineer

Formation personnelle de 12 semaines pour concevoir, développer, tester et déployer des applications professionnelles qui intègrent des fonctionnalités d'intelligence artificielle.

Le travail se fait en français, avec le vocabulaire technique anglais utilisé dans l'industrie. Les exemples et les exercices s'appuient sur les opérations aériennes : vols, planification et données opérationnelles. Ils n'implémentent pas de règles de sécurité aérienne critiques.

Rythme visé : environ 16 heures par semaine.

## Objectif

Devenir autonome sur une application full-stack, de la donnée affichée jusqu'au déploiement, puis ajouter des fonctionnalités d'IA de façon compréhensible et vérifiable.

Le projet fil rouge est l'**Aviation Operations Intelligence Platform**. Il grandit avec les compétences, sans architecture prématurée.

## Programme

| Semaine | Sujet |
| --- | --- |
| 1 | Web fundamentals, JavaScript et TypeScript |
| 2 | React et TypeScript |
| 3 | Python et backend |
| 4 | SQL, PostgreSQL et intégration backend |
| 5 | LLMs et APIs d'IA |
| 6 | Embeddings et RAG |
| 7 | Agents, tool calling et MCP |
| 8 | Évaluation, tests et fiabilité de l'IA |
| 9 | Git, Docker et CI/CD |
| 10 | Architecture, sécurité et system design |
| 11 | Next.js, context engineering et coding agents |
| 12 | Projet final, portfolio et préparation professionnelle |

## Où en est le dépôt

Semaine 1, TypeScript. Les notions validées et l'exercice en cours sont dans `progression.md`.

Exercices présents :

- `src/exercises/01-type-inference-and-functions.ts`
- `src/exercises/02-object-types-and-unions.ts`
- `src/exercises/03-type-narrowing.ts`

Le mini-projet JavaScript Flight Operations Data Manager a été terminé avant la création de ce dépôt. Son code n'est pas encore dans ces fichiers.

## Vérifier le TypeScript

Le projet n'a pas de dépendances locales. TypeScript est utilisé via le compilateur déjà installé sur la machine.

```bash
tsc --noEmit
```

Pour exécuter un fichier d'exercice :

```bash
node --experimental-strip-types src/exercises/01-type-inference-and-functions.ts
```

## Organisation

```text
.
├── README.md
├── progression.md
├── tsconfig.json
├── src/exercises/
└── .cursor/rules/
```

`progression.md` est le suivi de la formation. `.cursor/rules/` contient les règles de tutorat utilisées dans Cursor.
