function leitor() {

    listaOperario = []
    proceguir = false
    contador = 0

    do {
        let operario = []
        contador++

        let nome = prompt("Informe o Nome completo:");
        nome = nome.trim();
        
        while (isNaN(nome) === false || nome.indexOf(" ") < 3 ) {
            nome = prompt("Informe o Nome novamente:");
        }

        let hora = prompt(`Quantas horas trabalhadas do ${nome} :`);
        while (isNaN(hora) === true || hora.trim() == "" || (parseInt(hora) < 20 || parseInt(hora) > 200)) {
            hora = prompt("Informe as horas novamente:");
        }

        let valor = prompt(`Informe o valor da hora do ${nome}`);
        while (isNaN(valor) === true || valor.trim() == "" || (parseFloat(valor) < 20 || parseFloat(valor) > 500)) {
            salario = prompt("Informe o valor novamente:");
        }
        let numero = prompt(`Informe o PIS/PASEP do ${nome}`);
        while (isNaN(valor) === true || numero.trim() == "") {
            numero = prompt(`Informe o PIS/PASEP novamente`);
        }    
        operario["nome"] = nome
        operario["hora"] = parseFloat(hora)
        operario["valor"] = parseFloat(valor)
        operario["numero"] = parseFloat(numero)

        listaOperario.push (operario)
        
        if (contador < 1)
            proceguir = false;
        else if (contador >= 1 && contador < 50)
            proceguir = confirm("Deseja continuar o cadastro?");
        else
            proceguir = true;

    } while (proceguir === false);
    return listaOperario
}

function executador(listaOperario){
let tamanho = listaOperario
let mensagem = ""

for (let i = 0; i < tamanho.length; i++) {
    let mensagem = ""
    let inss = 0;
    let ir= 0;
    let salario = operario[i][valor] * operario[i][hora]  

    if (salario < 1500,99) {
        inss = operario[i][salario] * 0.075
        ir = 0   
    }else if(salario > 1501 || salario < 3000,99 ){//inss
        inss = operario[i][salario] * 0.9
    }else if(salario > 1501 || salario < 2000,99 ){ //ir
        ir = operario[i][salario] * 0.075
    }else if(salario > 2001 || salario < 3000,99 ){ //ir
        ir = operario[i][salario] * 0.15
    }else if(salario > 3001 || salario < 4000,99 ){ //ir
        ir = operario[i][salario] * 0.225
    }else if(salario > 3001 || salario < 5000,99){//inss
        inss = operario[i][salario] * 0.12
    }else if(salario > 4001){//ir
        ir = operario[i][salario] * 0.275    
    }else if(salario > 5000,99){//inss
        inss = operario[i][salario] * 0.14
    }

    let iss = salario * 0.5
    let imposto = inss + iss + ir
    let liguido = salario - imposto    


    mensagem += `
    Nome: ${listaOperario["nome"]} <br/>
    PIS/PASEP: ${listaOperario["numero"]}<br/>
    Salário Bruto: R$ ${parseFloat(salario).toFixed(2)} <br/>
    Salário Líguido:R$ ${parseFloat(liguido).toFixed(2)} <br/>
    <br/><br/>
`;
}
document.write(mensagem);
}

let mostrar = leitor()
executador(mostrar)

