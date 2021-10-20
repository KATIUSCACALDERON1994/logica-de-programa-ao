let peso = 10 ;
if(peso > 100) {
    console.log( "a peça possui um pesoa adequado, pode ser cadastrada!")
} else {
    console.log( "a peça não pode ser cadastrada")
}    
let listaPecas = [ "freio" , "discodefreio" , "amortecedor" , "Bateria" , "Ignição", "barradeireção" , "Suspenção" , "bolante" ]
if(listaPecas.length < 10 ) {
    console.log( "a lista ainda possui espaço para mais peças")
} else{
console.log( "a lista não possui espaço para inserir mais peças")
}
let nomePeca = "freio"
if (nomePeca.length > 3) {
    console.log (" nome da peca é invalido")
} else {
    console.log ( "nome da peça valido")
}