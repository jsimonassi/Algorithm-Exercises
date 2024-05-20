/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {    
    const fruitMap = new Map();
    for(let fruit of fruits){
        if(fruitMap.has(fruit)){
            fruitMap.set(fruit, fruitMap.get(fruit) + 1);
        }else{
            fruitMap.set(fruit, 1);
        }
    }
    
    let firstMaxFruit = -Infinity;
    let secondMaxFruit = -Infinity;
    
    for (let [fruitKey, fruitValue] of fruitMap.entries()) {
        if (fruitValue > firstMaxFruit) {
            secondMaxFruit = firstMaxFruit;
            firstMaxFruit = fruitValue;
        } else if (fruitValue > secondMaxFruit) {
            secondMaxFruit = fruitValue;
        }
    }
    
    if(secondMaxFruit === -Infinity){
        return firstMaxFruit;
    }
    
    return firstMaxFruit + secondMaxFruit;
};

console.log(totalFruit([1,2,1]));