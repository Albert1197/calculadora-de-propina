function calculateTip() {
    var bill = parseFloat(document.getElementById("bill").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (!isNaN(bill) && !isNaN(tipPercentage)) {
      var tipAmount = bill * (tipPercentage / 100);
      var total = bill + tipAmount;
      
      document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
  }