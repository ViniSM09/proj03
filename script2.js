//Entrada de dados
const name = prompt("Digite seu nome completo:");
const idade = prompt("Digite sua idade:");
const possuiCadastro = prompt("Você possui cadastro: (Sim ou Não?)").toUpperCase();
const possuiAutorizacao = prompt("Possui autorização especial (Sim ou Não)").toUpperCase();
const estaAcompanhado = prompt("Está acompanhado? (Sim ou Não)").toUpperCase();

//Validação inicial
if (possuiCadastro !== "Sim") {
    console.log("Acesso negado: Usuário não cadastrado.");
} else {

    //Maior de idade com cadastro
    if (idade >= 18) {
        console.log(`Acesso liberado. Bem-Vindo, ${name}!`);
    } else {

        //Validação adicional (OR)
        if (idade < 18 || possuiAutorização !== "Sim") {
            //IF Aninhado
            if (idade > 18 || possuiAutorização !== "Sim") {
            console.log("Acesso permitido com restrição: entrada somente com responsável.");
            } else {
            console.log("Acesso negado: menor desacompanhado.");
            }   

        } else {
            console.log("Acesso liberado.");
        }
    }
}

