/**
 * Module partagé des vols.
 *
 * Exercice 8 — export
 * Durée estimée : 20 minutes
 * Objectif : exposer le type Flight et la fonction toFlight pour les autres fichiers.
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - Exporte FlightStatus, Flight et toFlight.
 * - toFlight a le même contrat que dans l'exercice 6.
 * - N'utilise pas `any` ni `as`.
 */

export type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

export interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  passengers: number;
}

export function toFlight(value: unknown): Flight | undefined {
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
export {};
