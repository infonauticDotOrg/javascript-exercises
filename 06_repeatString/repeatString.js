const repeatString = function(str, num) {
    let arr = []
    if(num < 0){
        return 'ERROR';
    }
    for (let i=1; i<=num; i++){
        arr.push(str)
    }
    let result = arr.reduce((add, current) => add + current, "")
    console.log(result)
    return result;
};


// Do not edit below this line
module.exports = repeatString;
