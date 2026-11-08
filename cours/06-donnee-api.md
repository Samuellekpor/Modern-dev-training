# Cours 6 — Typer une donnée d'API

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/06-api-payload.ts`  
Prérequis : `unknown`, `Flight`, et le fait qu'une fonction `async` retourne une Promise.

## Pourquoi

`fetch` retourne une `Promise<Response>`. `response.json()` retourne une `Promise<any>` dans les types DOM de TypeScript. `any` laisse lire les propriétés sans vérification. Le JSON n'est pas encore un `Flight`.

Ranger le résultat dans `unknown` retire cette liberté. TypeScript exige alors les vérifications avant toute lecture. `unknown` ne vérifie rien tout seul au runtime : ce sont les `if` qui contrôlent la valeur. L'annotation oblige à les écrire.

## La frontière

`toFlight` reçoit `unknown` et retourne `Flight | undefined`. Elle vérifie que la valeur est un objet, puis que chaque champ a le type attendu. Le statut doit être l'une des trois valeurs de `FlightStatus`. `NaN` est écarté, parce que `typeof NaN` vaut `"number"`.

Le retour est un nouvel objet construit avec les quatre champs déjà vérifiés. Si un champ manque ou a le mauvais type, le résultat est `undefined`.

## Ce qu'il faut pouvoir réexpliquer

`any` autorise l'usage sans contrôle. Le placer dans `unknown` rend les vérifications obligatoires. Après ces vérifications, la valeur peut devenir un `Flight`.
