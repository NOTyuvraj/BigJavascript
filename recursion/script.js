// function fib( number ){
//   if(number <= 1){
//     return number;
//   }else{
//     return fib(number-1) + fib(number-2);
//   }
// }

// console.log(fib(7));


function mergeSort( array ){
  if(array.length <= 1){
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0 , mid);
  const right = array.slice(mid);
  return merge(mergeSort(left) , mergeSort(right));
}

function merge(left , right){
  const result = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }

  return [...result , ...left , ...right];
}

const arr = [4, 1, 5, 2, 6, 3, 7, 8];
console.log(mergeSort(arr));