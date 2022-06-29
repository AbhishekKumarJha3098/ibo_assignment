const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

var res = {};

for(var i = 0 ; i < listOfProducts.length ; i++){
  let str = listOfProducts[i].productName;
  //console.log(listOfProducts[i].productName);
    if(res[str] == undefined){
         res[str] = 1;
    }else{
      res[str]++;
    }
}
console.log(res);

let result = [];

for(let i  = 0  ; i < listOfProducts.length ; i++){
  let flag = true;
  for(let j = 0 ; j < result.length ; j++){
    if(listOfProducts[i].productName === result[j].productName){
      result[j].quantity = result[j].quantity + listOfProducts[i].quantity;
      flag = false;
    }
  }
    if(flag === true){
      result.push(listOfProducts[i]);
    }
  }
  

  console.log(result);
