/**
 * Exercice 5 — Typage des Promises
 *
 * Durée estimée : 20 minutes
 * Objectif : écrire ce qu'une fonction async place dans sa Promise.
 *
 * Notions : async, Promise, Flight | undefined, type narrowing
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - Les deux fonctions sont async.
 * - Le type de retour annoncé est une Promise.
 * - N'utilise pas `any`.
 * - Dans getDestination, lis la destination seulement après avoir écarté undefined.
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

// 1. findFlight
// - paramètre flightNumber : string
// - retour annoncé : Promise<Flight | undefined>
// Cherche le vol et retourne-le.
// "KP999" donne undefined une fois la Promise résolue.
// Tu retournes le vol, pas une Promise construite à la main.
async function findFlight(flightNumber: string): Promise<Flight | undefined> {
  const flight = flights.find((flight) => flight.flightNumber === flightNumber);
  return flight;
}

// 2. getDestination
// - paramètre flightNumber : string
// - retour annoncé : Promise<string>
// "KP101" donne "Accra" une fois la Promise résolue.
// "KP999" donne "Flight not found".
// Réutilise findFlight avec await.
async function getDestination(flightNumber: string): Promise<string> {
  const flight = await findFlight(flightNumber);
  if (flight === undefined) {
    return "Flight not found";
  }
  return flight.destination;
}

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
