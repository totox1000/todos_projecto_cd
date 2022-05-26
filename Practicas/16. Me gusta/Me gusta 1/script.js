var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement)

function add1() {
    count++;
    countElement.innerText = count + " Likes (s) " ;
    console.log(count);
}