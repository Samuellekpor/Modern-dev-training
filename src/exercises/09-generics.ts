/**
 * Exercice 9 — Generics
 *
 * Durée estimée : 15 minutes
 * Objectif : écrire une fonction qui retire undefined sans fixer le type des éléments.
 *
 * Notions : generic, type parameter, T | undefined
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - Le type des éléments vient du paramètre de type T.
 * - Ne modifie pas le tableau reçu.
 */

// definedItems
// - paramètre de type : T
// - paramètre items : Array<T | undefined>
// - retour : T[]
// Garde les éléments définis, dans le même ordre.

function definedItems<T>(items: Array<T | undefined>): T[] {
  const result: T[] = [];
  for (const element of items) {
    if (element !== undefined) {
      result.push(element);
    }
  }
  return result;
}
// definedItems(["KP101", undefined, "KP102"]) => ["KP101", "KP102"]
// La même fonction doit accepter des Flight | undefined.

export {};
