export interface Building {
  id: number | null;
  name: string;
  style: string;
  type: string;
  address: string;
  height: number | null;
  floors: number | null;
  architect: string;
  landmark: boolean;
  yearBuilt: number;
}

export const buildings: Building[] = [
  {
    id: 1,
    name: 'Chrysler Building',
    style: 'Art Deco',
    type: 'office',
    address: '405 Lexington Avenue, New York, NY 10174',
    height: 1046,
    floors: 77,
    architect: 'William Van Alen',
    landmark: true,
    yearBuilt: 1930,
  },
  {
    id: 2,
    name: 'Solomon R. Guggenheim Museum',
    style: 'Modern',
    type: 'musuem',
    address: '1071 Fifth Avenue, New York, NY 10128',
    height: null,
    floors: 8,
    architect: 'Frank Lloyd Wright',
    landmark: true,
    yearBuilt: 1959,
  },
  {
    id: 3,
    name: 'Glass House',
    style: 'Modern',
    type: 'residential',
    address: '798-856 Ponus Ridge Road, New Canaan, CT',
    height: null,
    floors: 1,
    architect: 'Phillip Johnson',
    landmark: true,
    yearBuilt: 1949,
  },
  {
    id: 4,
    name: 'Edith Farnsworth House',
    style: 'International',
    type: 'residential',
    address: 'Plano, IL',
    height: null,
    floors: 1,
    architect: 'Ludwig Mies van der Rohe',
    landmark: true,
    yearBuilt: 1951,
  },
]