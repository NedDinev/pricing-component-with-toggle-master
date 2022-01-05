function switchPrice() {
  let monthlyPriceBasic = document.getElementById("monthly-price-basic");
  let monthlyPriceProfessional = document.getElementById(
    "monthly-price-professional"
  );
  let monthlyPriceMaster = document.getElementById("monthly-price-master");
  let switchButton = document.getElementById("switch");
  if (switchButton.checked == true) {
    monthlyPriceBasic.innerHTML = "199.99";
    monthlyPriceProfessional.innerHTML = "249.99";
    monthlyPriceMaster.innerHTML = "399.99";
  } else if (switchButton.checked == false) {
    monthlyPriceBasic.innerHTML = "19.99";
    monthlyPriceProfessional.innerHTML = "24.99";
    monthlyPriceMaster.innerHTML = "39.99";
  }
}
