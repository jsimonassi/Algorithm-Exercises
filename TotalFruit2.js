/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
    const numberFruitsByCategory = new Map();
    
    for(const fruit of fruits){        
        numberFruitsByCategory.set(fruit, numberFruitsByCategory.get(fruit) + 1 || 1);
    }
    
    let maxFruitValue = 0;
    let secondMaxFruitValue = 0;
    
    for(const [fruit, total] of numberFruitsByCategory){
        if(total > maxFruitValue){
            secondMaxFruitValue = maxFruitValue;
            maxFruitValue = total;
        }
    }
    
    return maxFruitValue + secondMaxFruitValue;
};

const input = [1,2,1];

console.log(totalFruit(input));