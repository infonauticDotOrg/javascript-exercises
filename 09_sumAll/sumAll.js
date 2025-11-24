const sumAll = function(starting,ending){
    let array = [];
    if (ending - starting < 0 ){
        let temp = starting;
        starting = ending;
        ending = temp;
    }else if (ending < 0 || starting < 0) {
        return "ERROR";
    } else if (Number.isInteger(ending) != true || Number.isInteger(starting) != true) {
        return "ERROR";
    }
    for (let i = starting; i <= ending; i++){
        array.push(i)
    }
    let final = array.reduce((accumulator, current) => {
        return accumulator + current;
    })
    return final

};

// Do not edit below this line
module.exports = sumAll;
