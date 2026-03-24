let nome = prompt ("Digite seu nome");
let idade = Number(prompt ("Digite sua idade"));
let cadastro = prompt ("Possui cadastro? (S/N)").toUpperCase();
let autorizacao = prompt("Possui autorização especial? (S/N)").toUpperCase();
let acompanhado = prompt("Está acompanhado? (S/N)").toUpperCase();

alert("Verificando acesso...");

// validação inicial (NOT)

if (!(cadastro === "s")){
    
    alert ("acesso permitido:usuario cadastrado")
}
// Condicao com AND
else if (cadastro === "s" && idade >=18){
    alert ("Acesso liberado normalmente.")

}
// condicao com OR
else if (idade < 18|| autorizacao === "N"){ 
    alert ("acesso negado:usuario nao cadastrado.");
}
// IF ANINHADO
if (acompanhado === "S") {
alert("Entrada permitida com restrição (acompanhado por responsável).");
} else {
    alert("Acesso negado: menor desacompanhado.");
    alert("Acesso permitido: menor acompanhado")
}


// Caso final
{ 
alert("Acesso liberado.");
}