function calculateFutureValue() {
    var principal = parseFloat(document.getElementById("principal-futuro").value);
    var interestRate = parseFloat(document.getElementById("rate-futuro").value) / 100;
    var periods = parseInt(document.getElementById("periods-futuro").value);
  
    var futureValue = principal * Math.pow(1 + interestRate, periods);
  
    document.getElementById("result-futuro").innerHTML = "Valor Futuro: " + futureValue.toFixed(2);
  }
  
  function calculatePresentValue() {
    var futureValue = parseFloat(document.getElementById("futureValue-presente").value);
    var interestRate = parseFloat(document.getElementById("rate-presente").value) / 100;
    var periods = parseInt(document.getElementById("periods-presente").value);
  
    var presentValue = futureValue / Math.pow(1 + interestRate, periods);
  
    document.getElementById("result-presente").innerHTML = "Valor Presente: " + presentValue.toFixed(2);
  }
  