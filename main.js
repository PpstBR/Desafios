var SubmitButton = document.getElementById("submitButton")
var historicButton = document.getElementById("resultsButton")

var sumValue = 0
var sumTax = 0
var sumLiquid = 0

var click = SubmitButton.addEventListener('click', function(){
    var NameSubmit = document.getElementById("NameSubmit").value
    var valueSubmit = document.getElementById("valueSubmit").value
    var dependentsSubmit = document.getElementById("dependentsSubmit").value

    var tax 
    var liquid 

    if (valueSubmit >= 0 && valueSubmit <= 1903.98){ 
        tax = 0
    }else if (valueSubmit >= 1903.99 && valueSubmit <= 2826.65){
        tax = (0.075 * valueSubmit) - 142.80 
    }else if (valueSubmit >= 2826.66 && valueSubmit <= 3751.05){
        tax = (0.15 * valueSubmit) - 354.80
    }else if (valueSubmit >= 3751.06 && valueSubmit <= 4664.68){
        tax = (0.225 * valueSubmit) - 636.13
    }else if (valueSubmit > 4664.69){
        tax = (valueSubmit * 0.275) - 869.36
    }else{
        //valor incorreto, tente novamente
    }
    
    if (dependentsSubmit == 0){
        // codigo normal vazio, tudo ocorre normalmente
    }else if (dependentsSubmit > 0){
        tax = tax - (dependentsSubmit * 189.59)
    }else{
        var error = document.createElement("p")
        var headBox = document.getElementById("Headbox")
        error.textContent = "Valor invalido, o salario do funcionario e o numero de dependentes deve ser maior ou igual a 0"
        error.id = "error"
        headBox.appendChild(error)
    }

    liquid = valueSubmit - tax

    valueSubmit = Number(valueSubmit).toFixed(2)
    tax = Number(tax).toFixed(2)
    liquid = Number(liquid).toFixed(2)

    sumValue = Number(sumValue) + Number(valueSubmit)
    sumTax = Number(sumTax) + Number(tax)
    sumLiquid =  Number(sumLiquid) + Number(liquid)

    var text = document.createElement("p")
    var printer = document.getElementById("printer")
    text.textContent = `Pagamento do/a ${NameSubmit}, salario bruto R$${valueSubmit}, quantidade de imposto R$${tax}, valor de salario liquido R$${liquid}`
    text.id = "print"
    printer.appendChild(text)

    var NameReset = document.getElementById("NameSubmit").value = ""
    var valueReset = document.getElementById("valueSubmit").value = ""
    var dependentsReset = document.getElementById("dependentsSubmit").value = ""
  
})

var clickB = historicButton.addEventListener('click', function(){
    var results = document.createElement("p")
    var resulter = document.getElementById("results")
    results.textContent = `Soma do salario bruto R$${sumValue.toFixed(2)}, Soma do a recolher R$${sumTax.toFixed(2)}, Soma do salario liquido R$${sumLiquid.toFixed(2)}`
    resulter.appendChild(results)
})