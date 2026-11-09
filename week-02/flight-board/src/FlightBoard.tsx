/*
  Exercice — state et rendu
  Objectif : faire changer le statut d'un vol à l'écran.
  Déjà fourni : le type Flight et l'affichage de la liste.
  À écrire : le state, le bouton, et la mise à jour.

  Contraintes :
  - le state a le type Flight[]
  - un bouton « Mark delayed » sur chaque ligne passe ce vol à "Delayed"
  - ne modifie pas initialFlights ni l'objet déjà présent dans le tableau
  - la key reste flightNumber

  Vérification : npm run dev, puis le clic change seulement la ligne choisie.
*/

import { useState } from "react";

export type FlightStatus = "Scheduled" | "Delayed" | "Cancelled";

export interface Flight {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
}

const initialFlights: Flight[] = [
  { flightNumber: "KP101", destination: "Accra", status: "Scheduled" },
  { flightNumber: "KP102", destination: "Abidjan", status: "Delayed" },
  { flightNumber: "KP103", destination: "Lagos", status: "Scheduled" },
  { flightNumber: "KP104", destination: "Douala", status: "Cancelled" },
  { flightNumber: "KP105", destination: "Dakar", status: "Delayed" },
];

export function FlightBoard() {
  const [flights, setFlights] = useState<Flight[]>(initialFlights);
  //const [status, setStatus] = useState<Flight[]>();

  return (
    <section>
      <h1>Flight board</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.flightNumber}>
            {flight.flightNumber} — {flight.destination} — {flight.status}
            <button
              onClick={() => {
                setFlights((currentFlights) =>
                  currentFlights.map((aflight) => {
                    if (aflight.flightNumber === flight.flightNumber) {
                      return { ...flight, status: "Delayed" };
                    }
                    return aflight;
                  }),
                );
              }}
            >
              Mark delayed
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
