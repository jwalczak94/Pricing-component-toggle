"use strict";
const toggleButton = document.querySelector("#pricing-toggle"),
  planType = document.querySelectorAll(".plan-type");

let priceValues = document.querySelectorAll(".price");

const pricePlan = {
  basic: {
    annualy: 19.99,
    monthly: 199.99,
  },
  professional: {
    annualy: 24.99,
    monthly: 249.99,
  },
  master: {
    annualy: 39.99,
    monthly: 399.99,
  },
};

toggleButton.addEventListener("click", function () {
  let currentPlan;

  if (toggleButton.checked) {
    currentPlan = 1;
  } else {
    currentPlan = 0;
  }

  for (let i = 0; i < planType.length; i++) {
    let currentType = planType[i].innerHTML.toLowerCase();
    priceValues[i].innerHTML = Object.values(pricePlan[currentType])[currentPlan];
  }
});
