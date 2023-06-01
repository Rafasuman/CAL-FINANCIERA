// Función para calcular la amortización francesa
function calcularAmortizacionFrancesa() {
    // Obtener los valores de los inputs
    const monto = parseFloat(document.getElementById("monto").value);
    const tasaAnual = parseFloat(document.getElementById("tasa").value);
    const plazoMeses = parseFloat(document.getElementById("plazo").value);
  
    // Calcular la tasa mensual
    const tasaMensual = tasaAnual / 12 / 100;
  
    // Calcular la cuota mensual
    const cuota =
      (monto * tasaMensual) /
      (1 - Math.pow(1 + tasaMensual, -plazoMeses));
  
    // Crear la tabla de amortización
    let tabla = "<tr><th>Mes</th><th>Cuota</th><th>Interés</th><th>Amortización</th><th>Saldo</th></tr>";
    let saldo = monto;
    for (let mes = 1; mes <= plazoMeses; mes++) {
      const interes = saldo * tasaMensual;
      const amortizacion = cuota - interes;
      saldo -= amortizacion;
      tabla += `<tr><td>${mes}</td><td>${cuota.toFixed(2)}</td><td>${interes.toFixed(2)}</td><td>${amortizacion.toFixed(2)}</td><td>${saldo.toFixed(2)}</td></tr>`;
    }
  
    // Mostrar la tabla de amortización en la página
    document.getElementById("tabla-amortizacion-francesa").innerHTML = tabla;
  }


  // Función para calcular la amortización alemana 
  function calcularAmortizacionAlemana() {
    var monto = parseFloat(document.getElementById("monto-alemana").value);
    var tasaInteres = parseFloat(document.getElementById("tasa-alemana").value);
    var plazo = parseInt(document.getElementById("plazo-alemana").value);
  
    var tablaAmortizacion = document.getElementById("tabla-amortizacion-alemana");
    tablaAmortizacion.innerHTML = "";
  
    var interesMensual = tasaInteres / 100 / 12;
    var cuota = monto / plazo;
  
    for (var i = 1; i <= plazo; i++) {
      var interes = monto * interesMensual;
      var amortizacion = cuota - interes;
      monto -= amortizacion;
  
      var fila = document.createElement("tr");
      var columnaNumeroCuota = document.createElement("td");
      var columnaInteres = document.createElement("td");
      var columnaAmortizacion = document.createElement("td");
      var columnaSaldo = document.createElement("td");
  
      columnaNumeroCuota.textContent = i;
      columnaInteres.textContent = interes.toFixed(2);
      columnaAmortizacion.textContent = amortizacion.toFixed(2);
      columnaSaldo.textContent = monto.toFixed(2);
  
      fila.appendChild(columnaNumeroCuota);
      fila.appendChild(columnaInteres);
      fila.appendChild(columnaAmortizacion);
      fila.appendChild(columnaSaldo);
  
      tablaAmortizacion.appendChild(fila);
    }
  }
  
  // Función para calcular la amortización estadounidense
  function calcularAmortizacionAmericana() {
    var monto = parseFloat(document.getElementById('monto-americana').value);
    var tasaInteres = parseFloat(document.getElementById('tasa-americana').value);
    var plazo = parseInt(document.getElementById('plazo-americana').value);

    var cuota = monto * (tasaInteres / 100 / 12); // Calcula el monto de la cuota mensual

    var tablaAmortizacion = document.getElementById('tabla-amortizacion-americana');
    tablaAmortizacion.innerHTML = '';

    for (var i = 1; i <= plazo; i++) {
      var interes = monto * (tasaInteres / 100 / 12);
      var amortizacion = cuota - interes;
      var saldo = monto - amortizacion;

      tablaAmortizacion.innerHTML += '<tr>' +
        '<td>' + i + '</td>' +
        '<td>$' + monto.toFixed(2) + '</td>' +
        '<td>$' + cuota.toFixed(2) + '</td>' +
        '<td>$' + amortizacion.toFixed(2) + '</td>' +
        '<td>$' + interes.toFixed(2) + '</td>' +
        '<td>$' + saldo.toFixed(2) + '</td>' +
        '</tr>';

      monto = saldo;
    }
  }