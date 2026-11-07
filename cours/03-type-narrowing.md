# Cours 3 — Type narrowing

Durée estimée : 15 minutes  
Statut : validé  
Exercice : `src/exercises/03-type-narrowing.ts`  
Prérequis : une union, en particulier `Flight | undefined`.

## Pourquoi

`find` peut retourner un vol ou `undefined`. Tant que les deux possibilités existent, `flight.destination` est refusé : la destination n'existe que sur le vol.

## Comment une condition réduit le type

Le type narrowing est la réduction d'une union dans une branche, après une condition. TypeScript retire la possibilité que la condition a écartée.

```ts
const flight = flights.find((item) => item.flightNumber === "KP101");

if (flight === undefined) {
  return "Flight not found";
}

return flight.destination;
```

Avant le `if`, `flight` est `Flight | undefined`. Le `if` traite `undefined` et quitte la fonction. Sur la ligne suivante, cette possibilité a disparu. `flight` est un `Flight`.

La même réduction s'applique à un statut. Après `if (flight.status === "Cancelled")`, la branche suivante ne contient plus `"Cancelled"`. Si `"Delayed"` est traité ensuite, il reste `"Scheduled"`.

`if (flight)` retire aussi `undefined`, parce qu'un objet est vrai et `undefined` est faux. Écrire `flight === undefined` montre plus clairement le cas traité.

## Limite utile

Un `else` final accepte tout ce qui reste. Avec trois statuts, il reste `"Scheduled"`, donc le message est juste. Si un quatrième statut est ajouté à la union, ce `else` l'accepte encore et le décrit comme un vol prévu. Nommer explicitement le dernier statut rend cet oubli visible.

## Ce qu'il faut pouvoir réexpliquer

Une union annonce plusieurs possibilités. Une condition en retire une dans une branche. Après le traitement de `undefined`, la valeur qui reste est le vol, et ses propriétés peuvent être lues.
