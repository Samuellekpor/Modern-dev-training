# Cours 1 — Type inference, primitive types et function typing

Durée estimée : 15–20 minutes  
Statut : validé  
Exercice : `src/exercises/01-type-inference-and-functions.ts`

## Pourquoi TypeScript

JavaScript ne connaît les types qu'au moment où le programme tourne. Une fonction peut recevoir une chaîne à la place d'un nombre, produire un résultat faux, et l'erreur n'apparaît que plus tard.

TypeScript vérifie les types avant l'exécution. Les annotations disparaissent ensuite : le programme qui tourne reste du JavaScript. Une annotation ne transforme pas la valeur.

## Ce que TypeScript retient tout seul

La type inference est la capacité de TypeScript à déduire un type depuis la valeur écrite.

```ts
const destination = "Accra";
```

`destination` a le type `"Accra"`, parce qu'une `const` ne peut pas recevoir une autre valeur. On appelle ça un literal type : le type est le texte exact.

Si la variable peut changer, TypeScript retient seulement `string`. Le texte pourra être remplacé par n'importe quel autre.

Les paramètres d'une fonction ne sont pas déduits. Le corps de la fonction les utilise, mais il ne dit pas ce que l'appelant a le droit d'envoyer. En mode `strict`, un paramètre sans type produit l'erreur `implicit any`.

## Les types de base

Les primitive types utilisés ici sont `string`, `number` et `boolean`. `number` couvre `120` et `0.8`. Il couvre aussi `NaN` et `Infinity` : le type n'empêche donc pas une division par zéro. `null` et `undefined` sont des types séparés. En mode `strict`, un `string` n'accepte pas `null`.

## Le contrat d'une fonction

```ts
function getFlightLabel(flightNumber: string, destination: string): string {
  const label = `${flightNumber} — ${destination}`;
  return label;
}
```

Les paramètres et le retour sont annotés. `label` ne l'est pas : TypeScript voit un texte construit et retient `string`.

L'annotation de retour est un contrat. Si un chemin sort de la fonction sans `return`, JavaScript produit `undefined`. Quand le contrat dit `string`, TypeScript signale `TS2366` : la fonction ne retourne pas un `string` sur tous les chemins.

Un `return` dans un `if` est valable pour ce chemin. Un `if/else` dont chaque branche retourne un `string` couvre toute la fonction. TypeScript n'exige pas un troisième `return` après le `if`.

## Ce qu'il faut pouvoir réexpliquer

- TypeScript vérifie avant l'exécution. Les annotations ne restent pas au runtime.
- On annote les paramètres et le retour. On laisse l'inference agir quand la valeur rend le type évident.
- `const` peut garder un literal type. Une variable modifiable devient `string`.
- `: string` oblige chaque chemin à retourner un `string`.
