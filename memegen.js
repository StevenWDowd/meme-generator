
/*
document.getElementById("create").addEventListener("submit", function(event){
  event.preventDefault();
  return false;
}) */

/*document.addEventListener("DOMContentLoaded", function() {
    let gallery = document.getElementById('memeList');
    let myForm = document.getElementById('memeForm');

  })
*/
let gallery = document.getElementById('memeList');
let myForm = document.getElementById('memeForm');

//document.getElementById("memeForm")
myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let gallery = document.getElementById('memeList');
//a function to generate the meme using the form content
//it makes an <li> and appends it to the list
  let topText = document.querySelector('.topText');
  let bottomText = document.querySelector('.bottomText');
  bottomText.setAttribute("class", "memeTextBottom");
  topText.setAttribute("class", "memeTextTop");

  let userImg = document.getElementById('imgURL').value;
  let newMeme = document.createElement('li');
  newMeme.setAttribute("class", "listedMeme");
  let topDiv = document.createElement('div');
  topDiv.setAttribute("class", "memeHigh")
  let bottomDiv = document.createElement('div');
  bottomDiv.setAttribute("class", "memeLow");
  let pic = document.createElement('img');
  pic.src = userImg;

  //for deleting memes
  let removeOption = document.createElement('div');
  removeOption.setAttribute("class", "remover");
  let xButton = document.createElement('button');
  xButton.setAttribute("class", "delButton");
  xButton.innerText = "X";
  xButton.onclick = function(event) {
    event.target.parentNode.parentNode.remove();
  }
  removeOption.appendChild(xButton);


  //putting it all together
  topDiv.appendChild(topText);
  bottomDiv.appendChild(bottomText);
  newMeme.appendChild(removeOption);
  newMeme.appendChild(pic);
  newMeme.appendChild(topDiv);
  newMeme.appendChild(bottomDiv)
  let holder = document.createElement('div');
  holder.appendChild(newMeme);
  holder.setAttribute("class", "memeBox");
  //document.getElementById('memeList').appendChild(newMeme);
  gallery.appendChild(holder);

  //return false;
  //bottomText.reset()
  //function setLowFocus(element){
  let bPara = document.createElement('p');
  let newBottom = document.createElement('input');
  newBottom.setAttribute("class", "bottomText");
  //setLowFocus(newBottom);
  bPara.appendChild(newBottom);
  myForm.prepend(bPara);
  //function setHighFocus(element) {

  //myForm.prepend(breaker);
  let tPara = document.createElement('p');
  let newTop = document.createElement("input");
  newTop.setAttribute("class", "topText");
  tPara.appendChild(newTop);
  myForm.prepend(tPara)
  document.getElementById("memeForm").reset();



});
