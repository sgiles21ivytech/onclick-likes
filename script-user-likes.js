var countLikes = 1;
var countLikes2 = 1;
var countLikes3 = 1;
var countElement = document.querySelector("#likes");
var countElement2 = document.querySelector("#likes-2");
var countElement3 = document.querySelector("#likes-3");

console.log(countElement);

function like1() {
  countLikes++;
  countElement.innerText = countLikes + " Like(s) " ;
  console.log(countLikes);

  
}

function like2() {
    countLikes2++;
    countElement2.innerText = countLikes2 + " Like(s) " ;
    console.log(countLikes2);
  
    
  }

  function like3() {
    countLikes3++;
    countElement3.innerText = countLikes3 + " Like(s) " ;
    console.log(countLikes3);
  
    
  }