// Merge two sequential arrays into one, and put the number in ascending order.


function mergeSortArray(array1: any[], array2: any[]) {
  const mergedArray: any[] = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i: number = 1;
  let o: number = 1;
  //check input type 
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[o];
      o++;
    }

  }
  return mergedArray;
}


console.log(mergeSortArray([1, 2, 3], [4, 5, 7]));