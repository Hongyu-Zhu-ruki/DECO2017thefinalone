

function firstLetter(word) {
  return word[0];
};

function getAcronym(str) {
  var words = str.split(" "); // ["for","your","information"]
  var acr = words.map(firstLetter); // ["f","y","i"]
  return acr.join("").toUpperCase();
};
function wordSearch(str) {
  /*str = str.replace(str[0], str[0].toLowerCase());
  console.log(str);*/
  console.log("str"+str)
  if(str==''){
    alert("please input words")
  }else{
  var words = str.split(" "); // ["for","your","information"]
  var acr = words.map(firstLetter); // ["f","y","i"]
  var result = acr.join("").toUpperCase();
  document.getElementById("test").value = result;
  }

};
function reloadPage(){
  document.getElementById("test").value="";
  document.getElementById("wts").value="";
}
