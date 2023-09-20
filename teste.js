var NameButton = document.getElementById("submitButton")

var click = NameButton.addEventListener('click', function(){
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
    
    console.log(tax)

    if (dependentsSubmit == 0){
        // codigo normal vazio, tudo ocorre normalmente
        console.log("a")
    }else if (dependentsSubmit > 0){
        tax = tax - (dependentsSubmit * 189.59)
        console.log("b")
    }else{
        //valor incorreto, tente novamente
        console.log("c")
    }

    console.log(tax)

    liquid = valueSubmit - tax

    var text = document.createElement("p")
    var printer = document.getElementById("printer")
    text.textContent = `Pagamento do/a ${NameSubmit}, salario bruto R$${valueSubmit}, quantidade de imposto R$${tax}, valor de salario liquido R$${liquid}`
    printer.appendChild(text)


})
