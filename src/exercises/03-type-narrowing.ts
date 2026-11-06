/**
 * Exercice 3 — Type narrowing
 *
 * Durée estimée : 20 minutes
 * Objectif : utiliser un vol seulement après avoir retiré les cas impossibles.
 *
 * Notions : type narrowing, Flight | undefined, union type, function typing
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - Lis une propriété du vol seulement quand son type est Flight.
 * - Chaque chemin de describeOperationalImpact retourne un string.
 */

type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  passengers: number;
}

const flights: Flight[] = [
  {
    flightNumber: "KP101",
    destination: "Accra",
    status: "Scheduled",
    passengers: 120,
  },
  {
    flightNumber: "KP102",
    destination: "Abidjan",
    status: "Delayed",
    passengers: 95,
  },
  {
    flightNumber: "KP103",
    destination: "Lagos",
    status: "Scheduled",
    passengers: 140,
  },
  {
    flightNumber: "KP104",
    destination: "Douala",
    status: "Cancelled",
    passengers: 80,
  },
  {
    flightNumber: "KP105",
    destination: "Dakar",
    status: "Delayed",
    passengers: 110,
  },
];

// 1. getDestinationByNumber
// - paramètre flightNumber : string
// - retour : string
// Cherche le vol.
// S'il n'existe pas, retourne "Flight not found".
// Sinon, retourne sa destination.
// Résultats attendus :
// "KP101" => "Accra"
// "KP999" => "Flight not found"

// 2. describeOperationalImpact
// - paramètre flight : Flight
// - retour : string
// "Cancelled" => "No passengers to handle"
// "Delayed" => "Passengers waiting: 95" pour un vol de 95 passagers
// "Scheduled" => "Passengers expected: 120" pour un vol de 120 passagers
// Le nombre vient de flight.passengers.

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
