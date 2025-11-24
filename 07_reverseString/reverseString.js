const reverseString = function(str) {
    let reversed = "";
    let temp = [];
    for (let i = 0; i < str.length; i++){
        temp.push(str[i]);
        reversed = temp.pop() + reversed;
    }
    console.log(reversed)
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
