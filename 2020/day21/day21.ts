interface IProduct {
  id: number;
  ingredients: string[];
  allergens: string[];
}

const dataPreparator = (str: string): IProduct[] => {
  let lines = str.split('\n');
  return lines.map((l, i) => {
    const arr = l.replace(/\)|\(|\,/g, '').split(' ');
    const ind = arr.indexOf('contains');

    return {
      id: i,
      ingredients: arr.slice(0, ind),
      allergens: arr.slice(ind + 1)
    }
  });
};

const getIntersection = (arr1: string[], arr2: string[]): string[] =>
  arr1.filter(value => arr2.includes(value));

const getLikelyTranslates = (products: IProduct[]): {[allergen: string]: string[]} => {
  let likelyTranslates = {};
  for (let currProduct of products) {
    let restProducts = products.filter(({ id }) => id !== currProduct.id);
    for (let allergen of currProduct.allergens) {
      likelyTranslates[allergen] = currProduct.ingredients;
      for (let product of restProducts) {
        if (product.allergens.includes(allergen)) {
          likelyTranslates[allergen] = getIntersection(likelyTranslates[allergen], product.ingredients);
        }
      }
    }
  }
  return likelyTranslates;
}

const getUniqueValues = (obj: {[allergen: string]: string[]}): string[] =>
  Array.from(new Set(Object.keys(obj).reduce((res, a) => res.concat(obj[a]), [])));

const groupAllIngredients = (products: IProduct[]): string[] =>
  products.reduce((res, p)=> res.concat(p.ingredients), []);
// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const likelyTranslates = getLikelyTranslates(prepared);
  const products = groupAllIngredients(prepared);
  const allergens = getUniqueValues(likelyTranslates);

  return products.filter(e => !allergens.includes(e)).length;
}

const getSmartUniqueValues = (trans) => {
  let copied = JSON.parse(JSON.stringify(trans));

  while (true) {
    const [ toCheck ] = Object.keys(copied).filter(k => copied[k].length === 1);

    if (!toCheck) {
      break;
    }

    copied[toCheck] = copied[toCheck][0];
    const toIterate = Object.keys(copied).filter(k => (typeof copied[k] !== 'string' && copied[k].length > 1));
    for (let k of toIterate) {
      copied[k] = copied[k].filter(n => n !== copied[toCheck])
    }
  }

  return copied;
}


// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const likelyTranslates = getLikelyTranslates(prepared);
  const allergens = getSmartUniqueValues(likelyTranslates);
  
  return Object.keys(allergens).sort().map(k => allergens[k]).join();
}