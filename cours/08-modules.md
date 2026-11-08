# Cours 8 — Modules

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/flights.ts` et `src/exercises/08-modules.ts`  
Prérequis : `toFlight`, et le fait qu'un fichier avec `export` a son propre scope.

## Pourquoi

Recopier `toFlight` dans chaque exercice oblige à corriger chaque copie. Un module sépare le propriétaire de la fonction et les fichiers qui l'utilisent.

Un fichier qui contient `import` ou `export` est un module. Ses noms restent dans son scope. `export` rend un nom disponible à l'extérieur. `import` choisit ce nom dans un autre fichier.

Dans ce projet, le chemin s'écrit sans extension : `"../flights"`.

## Le résultat de toFlight

`filter` garde l'élément d'origine. Pour obtenir les vols construits, il faut conserver le retour de `toFlight` et écarter `undefined`. L'ordre des éléments valides reste celui du tableau reçu. Le tableau reçu n'est pas modifié.

`Array.isArray` appliqué à `unknown` donne `any[]` pour TypeScript. `any` peut masquer un tableau qui n'est pas vraiment composé de `Flight`.

## Ce qu'il faut pouvoir réexpliquer

Un `export` garde les noms dans le fichier et en fait un module. Un autre fichier les récupère avec `import`. Le tableau retourné contient les objets produits par `toFlight`, pas les JSON de départ.
