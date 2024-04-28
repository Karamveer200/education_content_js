const chotaPasand = 
    (first, second) => first - second;

const badaPasand = 
    (first, second) => second - first;



const faltuArray = [16, 10, 5, 20, 4];

// faltuArray.sort((first, second) => 
//     chotaPasand(first, second));

// faltuArray.sort((first, second) => 
//     badaPasand(first, second));

faltuArray.sort();
["16", "10", "5", "20", "4"];

console.log(faltuArray);
