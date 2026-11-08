# Cours 4 — unknown

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/04-unknown.ts`  
Prérequis : le type narrowing.

## Pourquoi

`Flight | undefined` décrit deux possibilités déjà connues. Une donnée reçue de l'extérieur n'a pas cette liste. Elle peut être un objet, un texte, un nombre, `null` ou autre chose.

`unknown` dit que la valeur existe, mais que TypeScript ne sait pas encore ce qu'elle est. Il refuse d'en deviner l'usage. `value.destination` est donc refusé. Une condition doit d'abord prouver le type. C'est le type narrowing, en partant de `unknown`.

`any` accepte tous les usages sans vérification. `unknown` peut contenir les mêmes valeurs au runtime, mais il bloque les opérations tant qu'une vérification n'a pas réduit le type.

## Un nombre

```ts
function readStandCapacity(value: unknown): number | undefined {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return undefined;
  }

  return value;
}
```

`typeof NaN` vaut `"number"`. `Number.isNaN` écarte ce cas. Le `||` n'appelle cette vérification que si la valeur est déjà un nombre.

## Un objet

`typeof null` vaut `"object"`. Il faut donc écarter `null` avant de lire une propriété. `"code" in value` vérifie que la case existe. `value.code` reste `unknown` tant que `typeof` n'a pas montré que c'est un `string`.

## Ce qu'il faut pouvoir réexpliquer

`unknown` peut être n'importe quelle valeur au runtime. TypeScript refuse de deviner laquelle avant une vérification. Après la vérification, le type est réduit et la valeur devient utilisable.
