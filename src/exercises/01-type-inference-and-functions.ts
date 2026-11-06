/**
 * Exercice 1 — Type inference, primitive types, function typing
 *
 * Durée estimée : 15 minutes
 * Objectif : typer des fonctions opérationnelles sans `any`,
 *            et laisser TypeScript inférer ce qui peut l'être.
 *
 * Vérification :
 *   tsc --noEmit
 *   node --experimental-strip-types src/exercises/01-type-inference-and-functions.ts
 *
 * Règles :
 * - N'utilise pas `any`.
 * - Annote chaque paramètre.
 * - Annote la valeur de retour de chaque fonction que tu écris.
 * - N'annote pas une variable locale quand le type est déjà évident.
 * - Dans un callback `reduce`, n'annote pas `acc` et `flight` si TypeScript les infère.
 */

const flights = [
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

// 1. formatFlightCode
// - airline : code compagnie, par exemple "KP" (string)
// - number : numéro de vol, par exemple 101 (number)
// - retour : string, par exemple "KP101"
// Le résultat assemble le code et le numéro.

function formatFlightCode(airline: string, number: number): string {
  const code = `${airline}${number}`;
  return code;
}

// 2. isOperational
// - passengers : number
// - status : string
// - retour : boolean
// true uniquement si passengers > 0 ET status n'est pas "Cancelled".
function isOperational(passengers: number, status: string): boolean {
  return passengers > 0 && status != "Cancelled";
}

// 3. getPassengerLoad
// - passengers : number
// - capacity : number
// - retour : number
// Calcule passengers / capacity.
// Si capacity <= 0, retourne 0.
function getPassengerLoad(passengers: number, capacity: number): number {
  if (capacity <= 0) {
    return 0;
  }
  return passengers / capacity;
}

// 4. describeLoad
// - passengers : number
// - retour : string
// "Heavy load" si passengers > 100, sinon "Normal load".
// La valeur 100 est "Normal load".
// Les deux branches doivent retourner un string.
function describeLoad(passengers: number): string {
  if (passengers > 100) {
    return "Heavy load";
  }
  return "Normal load";
}

// 5. getTotalPassengers
// - aucun paramètre
// - retour : number
// Somme de flights[].passengers.
// Résultat attendu sur ce dataset : 545.
function getTotalPassengers(): number {
  return flights.reduce((acc, flight) => flight.passengers + acc, 0);
}

// Quand les cinq fonctions existent, ajoute ces appels pour vérifier le comportement :
console.log(formatFlightCode("KP", 101));
console.log(isOperational(120, "Scheduled"));
console.log(isOperational(80, "Cancelled"));
console.log(isOperational(0, "Scheduled"));
console.log(getPassengerLoad(120, 150));
console.log(getPassengerLoad(120, 0));
console.log(describeLoad(140));
console.log(describeLoad(100));
console.log(getTotalPassengers());
//
// Résultats attendus :
// "KP101"
// true
// false
// false
// 0.8
// 0
// "Heavy load"
// "Normal load"
// 545

// Isole ce fichier des autres exercices. Les modules seront étudiés plus tard.
export {};
