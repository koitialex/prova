
function leitor() {
    let contador = 0;    
    let continuar = false;
    let alunos = [];
    do {

        let aluno = [];
        let materia = []
        contador++;
        let identidade = prompt("informe a identidade:");
        while (identidade.trim() == "" ||
        identidade.length < 10 || 
        identidade.length > 11 ||
        identidade.slice(0, 4) !== "2024"

        ) {
            identidade = prompt("informe a identidade novamente:");
        }
        let ano = prompt("informe o ano do seu nascimento:");
        while (ano.trim() == "" || ano < 1901 || ano > 2007 ) {
            ano = prompt("informe o ano novamente:");
        } 
        let humanas = prompt("informe a nota de Humanas:");
        while (humanas.trim() == "") {
            humanas = prompt("informe a nota de Humanas novamente:");
        }
        let natureza = prompt("informe a nota de Natureza:");
        while (natureza.trim() == "") {
            natureza = prompt("informe a nota de Natureza novamente:");
        }
        let matematica = prompt("informe a nota de Matemática:");
        while (matematica.trim() == "") {
            matematica = prompt("informe a nota de matemática novamente:");
        }
        let linguagem = prompt("informe a nota de Linguagem:");
        while (linguagem.trim() == "") {
            linguagem = prompt("informe a nota de linguagem novamente:");
        }
        let redacao = prompt("informe a nota de redação:");
        while (redacao.trim() == "") {
            redacao = prompt("informe a nota de redação novamente:");
        }

        materia ["humanas"] =parseFloat(humanas) 
        materia ["natureza"] = parseFloat(natureza)
        materia ["matemática"] = parseFloat(matematica)
        materia ["linguagem"] = parseFloat(linguagem)
        materia ["redacao"] = parseFloat(redação)
        aluno ["identidade"] = parseFloat(identidade)
        aluno ["ano"] = parseFloat(ano)

        alunos.push(materia)
        alunos.push(aluno)
        
        if (contador < 5) {
            continuar = false;
        }else if (contador > 5 && contador < 20 ){
            continuar = confirm("Deseja continuar ou parar ?");
        }else{
            contador = true;
        }
        
    } while (continuar === false);
    return alunos
}
let 
function processar(alunos) {
    mensagem = ""
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i][materia] > 550) {
            alert ("Aprovado")
        } else if (alunos[materia] < 400){
            alert ("Reprovado")
        } else if (alunos[materia] > 401 && alunos[materia] <br 549){
            alert ("Recuperação")
        }
        mensagem += `
        Registro: ${alunos[aluno]["identidade"]}</br>
        Ano de nascimento:</br>
        Humanas:</br>
        Natureza:</br>
        Matemática:</br>
        Linguagens:</br>
        Redação:</br>
        </br></br>
        `    
    }
}
leitor()


