
let p=console.log.bind(console)
import { checkInventory, processPayment, shipOrder } from "./test_modules.js";


//VERSION 1
const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 1554
  };
  
  checkInventory(order)
  .then((resolvedValueArray) => {
   return processPayment(resolvedValueArray)
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray)
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
  
p('dd')

//VERSION 2
  /* 
  let p=console.log.bind(console)
  import { checkInventory, processPayment, shipOrder } from "./test_modules.js";

  const order = {
      items: [['sunglasses', 100], ['bags', 2]],
      giftcardBalance: 100000
    };
    
    checkInventory(order)
    .then((resolvedValueArray) => {
    return (resolvedValueArray) ? processPayment(resolvedValueArray) : null
    },
    p)
    .then((resolvedValueArray) => {
      return (resolvedValueArray) ? shipOrder(resolvedValueArray) : null
    },
    p)
    .then((successMessage) => {
      successMessage? console.log(successMessage): null;
    },
    p)
    */