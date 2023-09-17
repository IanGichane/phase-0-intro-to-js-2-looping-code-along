// Code your solutions in this file

//Goals build a for loop
//Build a  while loop

/**
 * const gifts = [ "teddy bear", "drone", "doll"]
function wrapGift(gift){
    console.log(`Wrapped ${gift} and added a bow!`)
}
wrapGift(gifts[0])

repetitive code incase we need to call the individual gifts
 */
//  1.0 THE FOR LOOP
/**
 * 
 * for([initialization];[condition];[iteration]){
 * [loop body]
 * }
 */

/**
 * for(let age=30;age <40; age++){
    console.log(`I'm ${age} yearss old.Happy birthday to me!`)
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
 */

function writeCards(namesArr, event){
  let arr=[];
    for(let i=0;i < namesArr.length;i++){
        let message = `Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`
        console.log(message)
        arr.push(message)
        
    }
    return arr
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
function countDown(num){
    for(let i=num;i>=0;i--){
        console.log(i)
    }

}
countDown(5)