const removeFromArray = function(array, ...itemsToRemove) {
    for (arg of itemsToRemove){
        let result = array.filter(element => !itemsToRemove.includes(element));
        return result;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
