# Cours 11 — State et rendu

Durée estimée : 20 minutes  
Statut : validé  
Exercice : `week-02/flight-board/src/FlightBoard.tsx`  
Prérequis : un component, JSX, props, et `useState`.

## Render

Un render est un appel du component. React reçoit la description de l'interface et met à jour le DOM là où elle diffère.

`useState` fournit la valeur de cet appel et un setter. Le setter enregistre la prochaine valeur et programme un nouvel appel. Il ne change pas la variable du render en cours.

React compare la prochaine valeur à l'actuelle avec `Object.is`. La même référence ne programme pas de nouveau rendu.

## Mise à jour d'une liste

`setFlights` doit recevoir un nouveau tableau. Pour le vol choisi, le code construit un nouvel objet avec `status: "Delayed"`. Les autres vols restent les mêmes objets. La `key` reste `flightNumber`, qui identifie la même ligne d'un render à l'autre.

## Ce qu'il faut pouvoir réexpliquer

Le clic change l'écran parce que le setter programme un render avec une nouvelle valeur. Modifier `flights[0].status` puis passer le même tableau à `setFlights` change l'objet en mémoire, mais React ne refait pas le rendu : la référence du tableau est identique.
