/**
 * Exercice 8 — import
 *
 * Durée estimée : 20 minutes
 * Objectif : utiliser toFlight depuis le module partagé, sans recopier la fonction.
 *
 * Notions : export, import, module, unknown, Flight
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - Importe toFlight et Flight depuis "../flights".
 * - N'écris pas une nouvelle copie de toFlight.
 * - Ne modifie pas le tableau reçu en paramètre.
 */

// flightsFromPayloads
// - paramètre values : unknown[]
// - retour : Flight[]
// Garde seulement les valeurs que toFlight reconnaît comme des vols.
// L'ordre des vols valides reste celui du tableau reçu.
//
// Exemple :
// [
//   { flightNumber: "KP101", destination: "Accra", status: "Scheduled", passengers: 120 },
//   null,
//   { flightNumber: "KP102", destination: "Abidjan", status: "Delayed", passengers: 95 }
// ]
// => deux vols, KP101 puis KP102

import { Flight, toFlight } from "../flights";

function flightsFromPayloads(values: unknown): Flight[] {
  if (!Array.isArray(values)) {
    return [];
  }
  const results = values.map((value) => toFlight(value));
  const flights: Flight[] = [];

  for (let index = 0; index < results.length; index++) {
    const element = results[index];
    if (element !== undefined) {
      flights.push(element);
    }
  }
  return flights;
}

export {};
