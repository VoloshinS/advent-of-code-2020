const dataPreparator = (str: string): number[] => {
  return str.split('\n').map(i => parseInt(i));
};


// Puzzle 1
// find it, individually calculate the fuel needed for the mass of each module 
// (your puzzle input), then add together all the fuel values.
export const getFuelForModule = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, mass) => (res + Math.floor(mass / 3) - 2), 0);
}


// Puzzle 2

const countFuel = (mass: number) => {
  const fuel = Math.floor(mass / 3) - 2;

  return fuel <= 0 ? 0 : countFuel(fuel) + fuel;
}

export const getFuelForModuleRecursively = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, mass) => res + countFuel(mass), 0);
}