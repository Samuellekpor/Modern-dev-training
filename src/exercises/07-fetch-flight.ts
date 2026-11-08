/**
 * Exercice 7 — fetch, response.ok et toFlight
 *
 * Durée estimée : 20 minutes
 * Objectif : lire un vol depuis une URL sans traiter une erreur HTTP comme un vol.
 *
 * Notions : fetch, response.ok, response.json(), unknown, Promise
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any` dans loadFlight.
 * - N'utilise pas d'assertion `as`.
 * - Réutilise toFlight. Ne réécris pas cette fonction.
 * - Une réponse HTTP qui n'est pas 2xx retourne undefined.
 * - Une panne réseau reste un rejet de la Promise. Ne la masque pas avec try/catch.
 */

type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  passengers: number;
}

// Déjà validée dans l'exercice 6. Les modules éviteront bientôt cette copie.
function toFlight(value: unknown): Flight | undefined {
  if (typeof value !== "object" || value === null) {
    return undefined;
  }

  if (!("flightNumber" in value) || typeof value.flightNumber !== "string") {
    return undefined;
  }

  if (!("destination" in value) || typeof value.destination !== "string") {
    return undefined;
  }

  if (!("status" in value) || typeof value.status !== "string") {
    return undefined;
  }

  if (
    value.status !== "Scheduled" &&
    value.status !== "Delayed" &&
    value.status !== "Cancelled"
  ) {
    return undefined;
  }

  if (
    !("passengers" in value) ||
    typeof value.passengers !== "number" ||
    Number.isNaN(value.passengers)
  ) {
    return undefined;
  }

  return {
    flightNumber: value.flightNumber,
    destination: value.destination,
    status: value.status,
    passengers: value.passengers,
  };
}

// loadFlight
// - paramètre url : string
// - retour annoncé : Promise<Flight | undefined>
// 1. Appelle fetch avec cette URL.
// 2. Si la réponse HTTP n'est pas ok, retourne undefined.
// 3. Lis le JSON et range-le dans unknown.
// 4. Retourne le résultat de toFlight.

async function loadFlight(url: string): Promise<Flight | undefined> {
  const response = await fetch(url);
  if (!response.ok) {
    return undefined;
  }
  const data: unknown = await response.json();
  const result = toFlight(data);
  return result;
}

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
