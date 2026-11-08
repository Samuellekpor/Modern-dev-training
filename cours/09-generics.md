# Cours 9 — Generics

Durée estimée : 12 minutes  
Statut : validé  
Exercice : `src/exercises/09-generics.ts`  
Prérequis : `Promise<Flight>` et le retrait des valeurs `undefined`.

## Pourquoi

`Promise<Flight>` est un type générique déjà utilisé. `Promise` est le modèle. `Flight`, entre chevrons, dit ce que la Promise contiendra.

Une fonction qui retire `undefined` ne doit pas être réécrite une fois pour les textes et une fois pour les vols. Le paramètre de type `T` représente le type choisi à l'appel. TypeScript le déduit depuis l'argument.

```ts
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}
```

Pour `["KP101", "KP102"]`, `T` est `string`. Pour un tableau de vols, `T` est `Flight`. `any` accepterait les deux appels, mais le type du résultat disparaîtrait.

`definedItems<T>` reçoit `Array<T | undefined>` et retourne `T[]`. Avec des `Flight | undefined`, `T` est `Flight`.

## Ce qu'il faut pouvoir réexpliquer

`T` est décidé par les valeurs passées à la fonction. Le corps reste le même, et le résultat garde le type précis.
