/**
 * Exercice 10 — keyof, Pick et Partial
 *
 * Durée estimée : 20 minutes
 * Objectif : lire une propriété dont le nom est typé, puis décrire deux formes dérivées de Flight.
 *
 * Notions : keyof, T[K], Pick, Partial, generic
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - Importe Flight depuis "../flights".
 * - readField retourne la propriété demandée, pas une copie de l'objet.
 */

import { Flight } from "../flights";

// 1. readField
// - paramètres de type : T, et K qui doit être une clé de T
// - paramètres : item: T, key: K
// - retour : T[K]
// readField(flight, "destination") a le type string.
// readField(flight, "passengers") a le type number.
// readField(flight, "gate") est refusé.
function readField<T, K extends keyof T>(item: T, key: K): T[K] {
  return item[key];
}
// 2. FlightSummary
// Type alias égal à Pick<Flight, "flightNumber" | "destination">.
type FlightSummary = Pick<Flight, "flightNumber" | "destination">;

// 3. FlightUpdate
// Type alias égal à Partial<Flight>.
// Toutes les propriétés de Flight deviennent optionnelles.
type FlightUpdate = Partial<Flight>;

export {};
