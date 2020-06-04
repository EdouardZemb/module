// Additionne tous les nombres d'un tableau
export function sum(array) {
  let sum = 0;
  array.forEach((int) => {
    sum += int;
  });
  return sum;
}

// Renvoie un bool si le nombre est impair
export function isOdd(int) {
  return int % 2 !== 0 ? true : false;
}

// Additionne uniquement les nombres impairs d'un tableau
export function sumOddNumbers(array) {
  let oddNumbers = [];
  array.forEach(number => {
    if (isOdd(number)) {
      oddNumbers.push(number);
    }
  })
  return sum(oddNumbers);
}

export default {
  sum,
  isOdd,
  sumOddNumbers,
};
