/**
 * Exercice 6 — Typer une donnée d'API
 *
 * Durée estimée : 25 minutes
 * Objectif : transformer un JSON inconnu en Flight, ou reconnaître qu'il n'est pas un vol.
 *
 * Notions : unknown, union type, interface, type narrowing
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - N'utilise pas d'assertion `as`.
 * - Retourne un nouvel objet construit avec les quatre champs vérifiés.
 * - Si un champ manque ou a le mauvais type, retourne undefined.
 */

type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  passengers: number;
}

// toFlight
// - paramètre value : unknown
// - retour : Flight | undefined

function toFlight(value: unknown): Flight | undefined {
  if (typeof value !== "object" || value === null) {
    return undefined;
  }

  if (!("flightNumber" in value)) {
    return undefined;
  }
  if (typeof value.flightNumber !== "string") {
    return undefined;
  }
  if (!("destination" in value)) {
    return undefined;
  }
  if (typeof value.destination !== "string") {
    return undefined;
  }
  if (!("status" in value)) {
    return undefined;
  }
  if (typeof value.status !== "string") {
    return undefined;
  }
  if (
    value.status !== "Scheduled" &&
    value.status !== "Delayed" &&
    value.status !== "Cancelled"
  ) {
    return undefined;
  }
  if (!("passengers" in value)) {
    return undefined;
  }
  if (typeof value.passengers !== "number" || Number.isNaN(value.passengers)) {
    return undefined;
  }

  return {
    flightNumber: value.flightNumber,
    destination: value.destination,
    status: value.status,
    passengers: value.passengers,
  };
}
//
// Un vol valide a exactement :
// - flightNumber : string
// - destination : string
// - status : "Scheduled", "Delayed" ou "Cancelled"
// - passengers : number, et pas NaN
//
// Résultats attendus :
// { flightNumber: "KP101", destination: "Accra", status: "Scheduled", passengers: 120 }
//   => le vol correspondant
// { flightNumber: "KP101", destination: "Accra", status: "Boarding", passengers: 120 }
//   => undefined
// { flightNumber: "KP101" }
//   => undefined
// null
//   => undefined
// { flightNumber: "KP101", destination: "Accra", status: "Scheduled", passengers: "120" }
//   => undefined

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
