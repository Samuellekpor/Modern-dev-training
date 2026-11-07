# Cours 2 — Object types, interfaces et union types

Durée estimée : 15–20 minutes  
Statut : validé  
Exercice : `src/exercises/02-object-types-and-unions.ts`  
Prérequis : le cours 1, en particulier le literal type et l'élargissement vers `string`.

## Le problème

Un paramètre `status: string` accepte n'importe quel texte. `isOperational(80, "Boarding")` passe le contrôle des types, alors que les seuls statuts du dataset sont `"Scheduled"`, `"Delayed"` et `"Cancelled"`.

Un vol pose une seconde difficulté. Son numéro, sa destination, son statut et son nombre de passagers forment une seule fiche. Si chaque fonction redécrit ces cases, une faute dans un nom de propriété peut passer.

## Fermer la liste

Une union type décrit une valeur qui est l'un de plusieurs types. Ici, chaque membre est un literal type.

```ts
type StandStatus = "Free" | "Occupied";
```

`StandStatus` n'accepte que ces deux textes. On l'utilise quand la liste métier est connue et fermée. Un nom de ville reste un `string` tant que la liste des destinations n'est pas fermée.

## Nommer la fiche

Une interface donne un nom à un object type : le nom de chaque case et le type autorisé dedans.

```ts
interface Stand {
  code: string;
  status: StandStatus;
}

const stand: Stand = {
  code: "A12",
  status: "Free",
};
```

La case `status` réutilise la liste fermée. `"Closed"` est refusé. Une case manquante est refusée aussi. On écrit la fiche une fois, puis on l'utilise comme paramètre, comme retour ou comme `Stand[]`.

`type` peut aussi nommer un objet. Pour ces cours, `type` sert à la liste fermée et `interface` sert à la fiche. La comparaison complète entre les deux viendra seulement si elle devient utile.

## Pourquoi annoter le tableau

```ts
const gate = { code: "A12", status: "Free" };
```

La variable `gate` peut être déclarée avec `const`. La case `gate.status` peut quand même recevoir un autre texte. TypeScript abandonne donc `"Free"` et retient `string`. C'est le même raisonnement que pour une variable modifiable.

`const stand: Stand` impose la fiche. La case `status` reste `"Free" | "Occupied"`. Annoter un tableau de vols avec `Flight[]` garde le statut dans la liste fermée.

Une interface est visible dans tout le fichier. Le tableau peut l'utiliser même si la fiche est écrite plus bas. La placer au-dessus du tableau rend la lecture plus directe.

## L'absence de résultat

`find` retourne l'élément trouvé, ou `undefined` s'il n'existe pas. Le type du résultat est donc `Stand | undefined`. Vérifier cette absence avant d'utiliser l'objet s'appelle le type narrowing. C'est le cours suivant.

## Ce qu'il faut pouvoir réexpliquer

- Une union ferme une liste de textes.
- Une interface nomme les cases d'un objet et peut utiliser cette liste dans une case.
- Sans annotation, une case modifiable devient `string`, même si l'objet est dans une `const`.
- Avec l'annotation, la liste fermée reste en place.
- `find` ajoute `undefined` quand la recherche peut échouer.
