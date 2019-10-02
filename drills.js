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

console.log(filter([5,1,6,2,7,8], 5));
