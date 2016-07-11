// Playing with the concept of an accordion in Javascript
// Have it set to manipulate the h2 and their child <p> through DOM

accoridon = document.getElementById("accordion");
titles = accordion.getElementsByTagName("h2");

// I use a for loop to check on the length of the h2 class.
for (i=0; i<titles.length;i++){
  titles[i].addEventListener("click", displayAccordion);
}

function displayAccordion(){
  content = this.nextSibling.nextSibling;

  if (content.style.display != "block"){
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Begin Shopping List Stuff
var shoppingList = [];
var total = 0.00

// Make Total display initially
document.getElementById('totalPrice').innerHTML += ("Your total grocery bill is: $" + total.toFixed(2));

// Target the form to add items, price, and their quantity
function addGroceries(){
	var newItem = document.getElementById("foodToAdd").value;
	var newPrice = document.getElementById("priceToAdd").value;
  var newQuant = document.getElementById("quantToAdd").value;

  document.getElementById("growingFoodList").innerHTML += "<li>" + newItem + "<li>";
	growingFoodList.innerHTML = newItem;

	document.getElementById("growingPriceList").innerHTML += "<li>" + newPrice + "<li>";
	growingPriceList.innerHTML = newPrice.toFixed(2);

total += Number(newPrice);
    document.getElementById("totalPrice").innerHTML = ("Your total grocery bill is: $" + total.toFixed(2));
}
