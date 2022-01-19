function add(num1, num) {
  if (num) {
    return num1 + num;
  }
  return function (num2) {
    return num1 + num2;
  };
}

//console.log(add(2)(5));
//console.log(add(2, 5));
//////////////////////////////////////////

function deepClone(obj) {
  if (obj === null) return null;
  let clone = Object.assign({}, obj); // Cloning an object
  Object.keys(clone).forEach((key) => {
    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });
  return clone;
}
const listOfItems = { apple: "Mac", items: { Mouse: 10, keyboard: 2 } };
const copyListOfItems = deepClone(listOfItems);

//console.log(listOfItems);
//console.log(copyListOfItems);
//////////////////////////////////////////////////////////////////
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let halfLength = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, half);
  let rightArr = arr.slice(half);

  return mergeDown(mergeSort(leftArr), mergeSort(rightArr));
}
function mergeDown(arrL, arrR) {
  let tempArr = [];
  while (arrL.length && arrR.length) {
    if (arrL[0] < arrR[0]) {
      tempArr.push(arrL.shift());
    } else {
      tempArr.push(arrR.shift());
    }
  }
  return tempArr.concat(arrL.slice()).concat(arrR.slice());
}

let nums = [5, 7, 1, 3, 4, 100, 5];
//console.log(mergeSort(nums));
///////////////////////////////////////////////
