# Cours 5 — Typer une Promise

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/05-promise-typing.ts`  
Prérequis : une fonction `async` retourne toujours une Promise. `find` peut donner `Flight | undefined`.

## Pourquoi

Un type de retour comme `Flight | undefined` décrit la valeur elle-même. Une fonction `async` ne donne pas cette valeur immédiatement à l'appelant. Elle donne une Promise, et la valeur arrive quand cette Promise est résolue.

`Promise<Flight | undefined>` annonce les deux temps : l'appelant reçoit d'abord une Promise, puis un vol ou `undefined`.

## Le retour dans la fonction

```ts
async function findStand(code: string): Promise<Stand | undefined> {
  const stand = stands.find((item) => item.code === code);
  return stand;
}
```

`return stand` fournit la valeur qui sera dans la Promise résolue. La fonction ne construit pas une Promise à la main. Comme elle est `async`, TypeScript place `stand` dans la Promise annoncée.

L'appelant écrit `await findStand("A12")` pour retrouver le stand ou `undefined`.

Le type annoncé d'une fonction `async` doit être une `Promise`. Annoncer seulement `Stand | undefined` est refusé.

## Ce qu'il faut pouvoir réexpliquer

La fonction retourne le vol directement parce que ce vol est le contenu de la Promise une fois résolue. L'appelant, lui, reçoit la Promise et l'attend.
