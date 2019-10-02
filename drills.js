function urlify(str){
    let result = ''
    for(let i = 0; i < str.length; i++){
        if (str[i] === ' '){
            result += '%20'
        } else {
            result += str[i]
        }
    }
    return result;
}

// console.log(urlify('www.thinkful.com /tauh ida parv een'));


function filter(array, number){
  let result = []
  for (let i=0; i<array.length; i++){
    if(array[i]>=number){
      result.push(array[i])
    }
  }
  return result;
}

// console.log(filter([5,1,6,2,7,8], 5));


function maxSum(arr) {
    let max = 0;
     for (let i = 0 ; i < arr.length; i ++ ){
         let sum = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j]
            // console.log(sum);
            if (max < sum) {
                max = sum
            }
        }
     }
     return max;
}

// console.log(maxSum([-4, 6, -3, 5, -2, 1]));     //12


//Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArr(arr1, arr2) {
  let result = [];
  let auxFlag = true;
  let i = 0;
  let j = 0;
  while (auxFlag){
    if (i<arr1.length && j<arr2.length){
      if( arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++
      }else{
        result.push(arr2[j])
        j++
      }
    }else if (i< arr1.length){
      result.push(arr1[i])
      i++
    }else if (j< arr2.length){
      result.push(arr2[j])
      j++
    }else{
      auxFlag=false
    }
  }
  return result;
}

//console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));


function urlify(str){
    let result = ''
    for(let i = 0; i < str.length; i++){
        if (str[i] !== 'a' && str[i] !== 'e'  && str[i] !== 'i' && str[i] !== 'o'  && str[i] !== 'u'   ){
            
            result += str[i]
        }
    }
    return result;
}

// console.log(urlify('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')); //'Bttl f th Vwls: Hw vs. Grzny'
