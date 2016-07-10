// Playing with the concept of an accordion in Javascript
accoridon = document.getElementById("accordion");
titles = accordion.getElementsByTagName("h2");

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

var name;
var price;

var shoppingList = [
    {
      name: "milk",
      price:2.19
    },
    {
      name: "yogurt",
      price:0.88
    },
    {
      name: "chicken breast",
      price: 3.15
    },
    {
      name: "steak",
      price: 5.00
    },
    {
      name: "rice",
      price: 1.50
    },
    {
      name: "potatoes",
      price: 2.25
    }
  ];

var total = 0;
shoppingList.forEach(function(item) {
  console.log(item.name);
  console.log(item.price);
  total += item.price;
});
 console.log("total: $"+total.toFixed(2));


/******* Fishbowl test *******/
// var groceryList = [
//   {
//     name: "apples",
//     price: 1.15
//   },
//   {
//     name: "bananas",
//     price: 2.00
//   },
//   {
//     name: "chicken",
//     price: 3.50
//   }
// ];
//
// groceryList.push ({
//   name: "ground beef",
//   price: 5.55
// });
//
// var total = 0;
// groceryList.forEach(function(item) {
//   console.log(item.name);
//   console.log(item.price);
//   total += item.price;
// });
//   console.log("total: $"+total.toFixed(2));
