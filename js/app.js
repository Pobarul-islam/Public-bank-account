/*===============================================
        Import All Id And converted on Variable
    ============================================*/

const btnCalculate = document.getElementById("calculate");
const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothees");
const totoalExprese = document.getElementById("totoal-exprese");
const balance = document.getElementById("balance");
const remBalance = document.getElementById("rem-balance");
const persent = document.getElementById("persent");
const save = document.getElementById("save");
const saveAmount = document.getElementById("save-amount");
const Remaining = document.getElementById("rem-balance");
const spend = document.getElementById("spend");
const have = document.getElementById("have");
const youHave = document.getElementById("youhave");

const myIncome = parseInt(income.value); //my income Fer Month

btnCalculate.addEventListener("click", calculateHandler); // Added EventListener on Calculate Button .
/*=========================================
        Error Handler  Function Start
    =========================================*/
function errorHandler(var1, var2) {
  document.getElementById(var1).style.display = "flex";
  document.getElementById(var2).style.display = "block";
  return;
}
/*=========================================
        Error Handler  Function End
    =========================================*/
/*=========================================
        First  Function Start
    =========================================*/

function calculateHandler() {
  /*=========================================
        converting value string to  number 
    =========================================*/
  const spendForFood = parseInt(food.value); // For Food Value
  const spendForRent = parseInt(rent.value); //For Rent value
  const spendForClothse = parseInt(clothes.value); // clothes.value

  /*=========================================
                 total summery 
    =========================================*/

  const totoalSpend = spendForFood + spendForClothse + spendForRent; //total spend money

  if (totoalSpend <= myIncome) {
    totoalExprese.innerText = totoalSpend; // set total spend mony in totoalExprese.innerText

    const newBalance = myIncome - totoalSpend; //new balance ofter spending

    balance.innerText = newBalance; //set value on new balance.
  } else {
    const newBalance = myIncome - totoalSpend; //new balance ofter spending
    spend.innerText = newBalance;
    have.innerText = myIncome;
    // document.getElementById('error-box').style.display="flex";
    // document.getElementById('error1').style.display= "block";
    errorHandler("error-box", "error1");
  }
  thisIsError();
}

/*=========================================
        First  Function End 
    =========================================*/

/*=========================================
        second Function for second part Start 
    =========================================*/

save.addEventListener("click", saveMoney); // adding eventListener On save Button ..

function saveMoney() {
  /*=========================================
        converting value string to  number 
    =========================================*/

  const myIncome = parseInt(income.value);
  const numpersent = parseInt(persent.value);
  const balanceNew = parseInt(balance.innerText);

  let persentage = myIncome / 100;

  const finulSaveAmmount = persentage * numpersent;

  /*=========================================
        Error Handler 
    =========================================*/

  if (finulSaveAmmount <= balanceNew) {
    saveAmount.innerText = finulSaveAmmount;

    Remaining.innerText = balanceNew - finulSaveAmmount;
  } else {
    const afterb = document.getElementById("afterb");
    afterb.innerText = myIncome;
    youHave.innerText = balance.innerText;

    errorHandler("error-box", "error2"); //Erroe Handler
  }
  thisIsError();
}

// close error message

document.getElementById("close").addEventListener("click", closeError);
function closeError() {
  document.getElementById("error-box").style.display = "none";
}

/* Error Handler For All Input Feild  */
const isError = console.log(!isNaN(income.value));
function linkFrom(linkId, kuch) {
  linkId.style.border = "2px solid red";
  linkId.value = "" + kuch;
  linkId.style.color = "red";
}
function thisIsError() {
  if (!isNaN(income.value) !== true) {
    linkFrom(income, "Plz Relode Page & try Again");
  } else if (!isNaN(food.value) !== true) {
    linkFrom(food, "");
  } else if (!isNaN(rent.value) !== true) {
    linkFrom(rent, "");
  } else if (!isNaN(clothes.value) !== true) {
    linkFrom(clothes, "");
  } else if (!isNaN(persent.value) !== true) {
    linkFrom(persent, "");
  }
}
