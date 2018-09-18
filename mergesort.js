function split(wholeArray) {
  if (wholeArray.length === 1) return [wholeArray];
  const midPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let mergedArray = [];
  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      mergedArray.push(firstHalf.shift());
    } else {
      mergedArray.push(secondHalf.shift());
    }
  }
  if (firstHalf.length) {
    mergedArray = mergedArray.concat(firstHalf);
  } else mergedArray = mergedArray.concat(secondHalf);
  return mergedArray;
}

function mergeSort(array) {
  array = split(array);
  let temp = [];
  while (!array.reduce((x, y) => x && y.length === 1, true)) {
    array.forEach(current => temp.push(...split(current)));
    array = temp;
    temp = [];
  }
  while (typeof array[0] !== 'number') {
    while (array.length) {
      const firstHalf = array.shift();
      const secondHalf = array.shift();
      if (!secondHalf) {
        temp.push(firstHalf);
      } else {
        temp.push(merge(firstHalf, secondHalf));
      }
    }

    array = temp;
    temp = [];
    if (array.length === 1) array = array[0];
  }

  return array;
}
