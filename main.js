function calculator(a,b,c){
    if (a >= 0 && a <= 1903.98){ 
        c = 0
    }else if (a >= 1903.99 && a <= 2826.65){// 0.075
        c = (a - (0.075 * a)) - 142.80 
    }else if (a >= 2826.66 && a <= 3751.05){// 0.15
        c = (a - (0.15 * a)) - 354.80
    }else if (a >= 3751.06 && a <= 4664.68){// 0.225
        c = (a - (0.225 * a)) - 636.13
    }else if (a > 4664.69){// 0.275
        c = (a - (0.275 * a)) - 869.36
    }else{
        //valor incorreto, tente novamente
    }
    
    if (b = 0){
        // codigo normal vazio, tudo ocorre normalmente
    }else if (b > 0 && c > 0){
        c = c - (b * 189.59)
    }else{
        //valor incorreto, tente novamente
    }

    return c 
}

var NameButton = document.getElementById("submitButton")

var click = NameButton.addEventListener('click', function(){
    var NameSubmit = document.getElementById("NameSubmit").value
    var valueSubmit = document.getElementById("valueSubmit").value
    valueSubmit = Number(valueSubmit)
    var dependentsSubmit = document.getElementById("dependentsSubmit").value
    dependentsSubmit = Number(dependentsSubmit)

    console.log(typeof(valueSubmit))
    console.log(typeof(dependentsSubmit))

    var tax
    var liquid
    calculator(valueSubmit, dependentsSubmit, tax)
    liquid = valueSubmit - tax

    console.log(tax)
    console.log(typeof(tax))
    console.log(liquid)
    console.log(typeof(liquid))


    var text = document.createElement("p")
    var printer = document.getElementById("printer")
    text.textContent = `Pagamento do/a ${NameSubmit}, salario bruto R$${valueSubmit}, quantidade de imposto R$${tax}, valor de salario liquido R$${liquid}`
    printer.appendChild(text)


})