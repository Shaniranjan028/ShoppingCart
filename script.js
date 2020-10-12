var product_total_amt = document.getElementById("product_total_amt");
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt = document.getElementById("total_cart_amt");
var discountCode = document.getElementById("discount_code1");

const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  //   console.log(itemval.value);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative value is not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "red";
    itemval.style.color = "#fff";
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
    // console.log(itemprice.innerHTML);
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  //   console.log(itemval.value);
  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 allowed");
    itemval.style.background = "#fff";
    itemval.style.color = "#000";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
    // itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
  }
};

const discount_code = () => {
  let totalamtcurr = parseInt(total_cart_amt.innerHTML);
  let error_trw = document.getElementById("error_trw");
  if (discountCode.value === "My100") {
    let newtotalamt = totalamtcurr - 15;
    total_cart_amt.innerHTML = newtotalamt;
    error_trw.innerHTML = "Code Mtched";
  } else {
    error_trw.innerHTML = "Valid Code is My100";
  }
};
