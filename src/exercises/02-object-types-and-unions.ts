/**
 * Exercice 2 — Object types, interfaces, union types
 *
 * Durée estimée : 20 minutes
 * Objectif : décrire un vol par une interface et restreindre son statut
 *            à une union de valeurs connues.
 *
 * Notions : object type, interface, union type, Flight | undefined, function typing
 *
 * Vérification :
 *   tsc --noEmit
 *
 * Règles :
 * - N'utilise pas `any`.
 * - Le statut n'est pas un simple `string`.
 * - N'annote pas `flight` dans un callback si TypeScript l'infère.
 * - Ne modifie pas le tableau `flights`.
 */

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

// 1. FlightStatus
// Union des seuls statuts présents dans ce dataset :
// "Scheduled", "Delayed", "Cancelled".
type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

// 2. Flight
// Interface avec :
// - flightNumber : string
// - destination : string
// - status : FlightStatus
// - passengers : number
// Annote ensuite `flights` avec Flight[].
interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  passengers: number;
}

// 3. getFlightsByStatus
// - paramètre status : FlightStatus
// - retour : Flight[]
// Retourne les vols dont le statut est exactement celui demandé.
function getFlightsByStatus(status: FlightStatus): Flight[] {
  return flights.filter((flight) => flight.status === status);
}

// 4. getFlightByNumber
// - paramètre flightNumber : string
// - retour : Flight | undefined
// Retourne le vol correspondant, ou undefined s'il n'existe pas.
// "KP999" doit produire undefined.
function getFlightByNumber(flightNumber: string): Flight | undefined {
  return flights.find((flight) => flight.flightNumber === flightNumber);
}

// 5. getPassengersByStatus
// - paramètre status : FlightStatus
// - retour : number
// Somme des passagers des vols de ce statut.
// Résultats attendus :
// "Scheduled" => 260
// "Delayed" => 205
// "Cancelled" => 80

function getPassengersByStatus(status: FlightStatus): number {
  return flights
    .filter((flight) => flight.status === status)
    .reduce((acc, flight) => flight.passengers + acc, 0);
}
// Après le typage, cet appel doit être refusé par tsc.
// Ajoute-le temporairement, lis l'erreur, puis retire-le :
// getFlightsByStatus("Boarding");

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
