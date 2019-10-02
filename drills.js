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

