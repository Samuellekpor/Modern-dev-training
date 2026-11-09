# Cours 10 — keyof, Pick et Partial

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/10-types-utiles.ts`  
Prérequis : `Flight` et un paramètre de type `T`.

## keyof et T[K]

`keyof Flight` est l'union des noms de propriétés : `"flightNumber" | "destination" | "status" | "passengers"`.

`readField<T, K extends keyof T>` reçoit un objet et une de ses clés. `extends keyof T` limite `K` à ces noms. `T[K]` est le type de la propriété désignée. Pour un `Flight` et la clé `"passengers"`, ce type est `number`. La fonction retourne `item[key]`.

## Pick et Partial

`Pick<Flight, "flightNumber" | "destination">` garde seulement ces deux propriétés. `Partial<Flight>` rend toutes les propriétés optionnelles.

## À reconnaître

`typeof`, écrit là où TypeScript attend un type, désigne le type d'une valeur. Le `typeof` de JavaScript s'exécute et produit `"string"` ou `"object"`. `never` est le type d'une fonction qui ne retourne jamais de valeur.

## Ce qu'il faut pouvoir réexpliquer

`readField(flight, "passengers")` a le type `number` parce que `T[K]` retrouve le type de la propriété nommée par la clé.
