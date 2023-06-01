// Calculadora de Valor Futuro
function calcularValorFuturo() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var periods = parseFloat(document.getElementById("periods").value);

    var valorFuturo = principal * (1 + (interestRate * periods));

    document.getElementById("valorFuturoResult").innerText = "El Valor Futuro es: " + valorFuturo;
}

// Calculadora de Valor Presente
function calcularValorPresente() {
    var futureValue = parseFloat(document.getElementById("futureValue").value);
    var interestRatePV = parseFloat(document.getElementById("interestRatePV").value);
    var periodsPV = parseFloat(document.getElementById("periodsPV").value);

    var valorPresente = futureValue / Math.pow(1 + interestRatePV, periodsPV);

    document.getElementById("valorPresenteResult").innerText = "El Valor Presente es: " + valorPresente;
}

// Calculadora de Interés Simple
function calcularInteresSimple() {
    var capital = parseFloat(document.getElementById("capital").value);
    var interestRateIS = parseFloat(document.getElementById("interestRateIS").value);
    var periodsIS = parseFloat(document.getElementById("periodsIS").value);

    var interesSimple = capital * interestRateIS * periodsIS;

    document.getElementById("interesSimpleResult").innerText = "El Interés Simple es: " + interesSimple;
}

//Calcular tiempo de negociacion
function calcularTiempo(){
    var capital = parseFloat(document.getElementById("capital").value);
    var interestRateIS = parseFloat(document.getElementById("interestRateIS").value);
    var periodsIS = parseFloat(document.getElementById("periodsIS").value);

    var tiempo = 1/ interestRateIS * ((capital/periodsIS)-1)
}


// Calculadora de Descuento Comercial
function calcularDescuentoComercial() {
    var valorNominal = parseFloat(document.getElementById("valorNominal").value);
    var tasaDescuentoDC = parseFloat(document.getElementById("tasaDescuentoDC").value);
    var periodosDC = parseFloat(document.getElementById("periodosDC").value);

    var descuentoComercial = valorNominal * tasaDescuentoDC * periodosDC;

    document.getElementById("descuentoComercialResult").innerText = "El Descuento Comercial es: " + descuentoComercial;
}

// Calculadora de Descuento Racional
function calcularDescuentoRacional() {
    var valorNominal = parseFloat(document.getElementById("valorNominal").value);
    var tasaDescuentoDR = parseFloat(document.getElementById("tasaDescuentoDR").value);
    var periodosDR = parseFloat(document.getElementById("periodosDR").value);

    var descuentoRacional = valorNominal * (1 - tasaDescuentoDR * periodosDR);

    document.getElementById("descuentoRacionalResult").innerText = "El Descuento Racional es: " + descuentoRacional;
}

// Event Listeners para los botones de cálculo
document.getElementById("btnValorFuturo").addEventListener("click", calcularValorFuturo);
document.getElementById("btnValorPresente").addEventListener("click", calcularValorPresente);
document.getElementById("btnInteresSimple").addEventListener("click", calcularInteresSimple);
document.getElementById("btnDescuentoComercial").addEventListener("click", calcularDescuentoComercial);
document.getElementById("btnDescuentoRacional").addEventListener("click", calcularDescuentoRacional);
