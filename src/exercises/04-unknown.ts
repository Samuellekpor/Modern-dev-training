/**
 * Exercice 4 — unknown
 *
 * Durée estimée : 20 minutes
 * Objectif : lire une valeur venue de l'extérieur seulement après l'avoir vérifiée.
 *
 * Notions : unknown, type narrowing, typeof, null
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - N'utilise pas d'assertion `as`.
 * - Ne lis une propriété qu'après avoir vérifié que la valeur est un objet.
 */

// 1. readPassengerCount
// - paramètre value : unknown
// - retour : number | undefined
// Retourne value seulement si c'est un number.
// NaN doit donner undefined.
// Résultats attendus :
// 120 => 120
// "120" => undefined
// NaN => undefined
function readPassengerCount(value: unknown): number | undefined {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return undefined;
  }

  return value;
}

// 2. readFlightNumber
// - paramètre value : unknown
// - retour : string | undefined
// Retourne flightNumber seulement si value est un objet
// et si cette propriété est un string.
// null, un nombre, ou un objet sans flightNumber donnent undefined.
// Résultats attendus :
// { flightNumber: "KP101", destination: "Accra" } => "KP101"
// { destination: "Accra" } => undefined
// null => undefined

function readFlightNumber(value: unknown): string | undefined {
  if (typeof value !== "object" || value === null) {
    return undefined;
  }

  if (!("flightNumber" in value)) {
    return undefined;
  }

  if (typeof value.flightNumber !== "string") {
    return undefined;
  }

  return value.flightNumber;
}

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
