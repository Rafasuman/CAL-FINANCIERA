function calcularValorPresente() {
    var cuota = parseFloat(document.getElementById('cuota-presente').value);
    var tasaInteres = parseFloat(document.getElementById('tasa-presente').value);
    var plazo = parseInt(document.getElementById('plazo-presente').value);

    var tasaPeriodica = tasaInteres / 100;
    var valorPresente = cuota * (1 - Math.pow(1 + tasaPeriodica, -plazo)) / tasaPeriodica;

    document.getElementById('resultado-presente').textContent = "Valor Presente de la Anualidad: $" + valorPresente.toFixed(2);
  }

  function calcularValorFuturo() {
    var cuota = parseFloat(document.getElementById('cuota-futuro').value);
    var tasaInteres = parseFloat(document.getElementById('tasa-futuro').value);
    var plazo = parseInt(document.getElementById('plazo-futuro').value);

    var tasaPeriodica = tasaInteres / 100;
    var valorFuturo = cuota * ((Math.pow(1 + tasaPeriodica, plazo) - 1) / tasaPeriodica);

    document.getElementById('resultado-futuro').textContent = "Valor Futuro de la Anualidad: $" + valorFuturo.toFixed(2);
  }