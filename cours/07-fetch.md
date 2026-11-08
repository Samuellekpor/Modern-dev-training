# Cours 7 — Lire un vol avec fetch

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/07-fetch-flight.ts`  
Prérequis : `toFlight`, `unknown`, et une fonction `async`.

## Pourquoi

`fetch(url)` retourne une `Promise<Response>`. Cette Promise est rejetée quand le réseau échoue. Un HTTP 404 ou 500 ne la rejette pas : la réponse arrive, et `response.ok` vaut `false`. `ok` est vrai seulement pour les statuts 200 à 299.

## La fonction

`loadFlight` attend la réponse. Si elle n'est pas `ok`, la fonction retourne `undefined`. Sinon, `await response.json()` fournit le corps. Son type d'origine est `Promise<any>`. Le résultat est rangé dans `unknown`, puis passé à `toFlight`.

Le type annoncé est `Promise<Flight | undefined>`. Le rejet réseau n'est pas dedans. Sans `try/catch`, il reste visible pour l'appelant.

`fetch` et `Response` viennent de la bibliothèque DOM. Le `tsconfig.json` du projet inclut donc `ES2022` et `DOM`.

## Ce qu'il faut pouvoir réexpliquer

Une 404 ne rejette pas la Promise de `fetch`. `response.ok` devient `false`, et `loadFlight` retourne `undefined`. Une panne réseau, elle, rejette la Promise.
