export interface Flight {
  city: string;
  duration: string;
}

export const flights: Flight[] = [
  { city: 'Lisbon', duration: '1h 50min' },
  { city: 'Porto', duration: '2h 00min' },
  { city: 'Madrid', duration: '2h 25min' },
  { city: 'Paris', duration: '3h 40min' },
  { city: 'London', duration: '3h 50min' },
  { city: 'Zurich', duration: '3h 55min' },
  { city: 'Frankfurt', duration: '4h 05min' },
  { city: 'Amesterdam', duration: '4h 10min' },
];
