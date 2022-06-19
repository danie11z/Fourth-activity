function message(){
    console.log('Eu estou aprendendo function.')
}
message()

function presentationOne(nome){
    console.log(`O meu nome é ${nome}.`)
}
presentationOne('Daniel')

function presentationTwo(nomeAgain, age, musicalStyle){
    console.log(`Olá! Meu nome é ${nomeAgain}, eu tenho ${age} anos e meu estilo musical favorito é ${musicalStyle}.`)
}
presentationTwo('Daniel', '19', 'R&B')

function recomendation(movie, music){
    console.log(`Um filme que eu gosto muito é ${movie}. Uma música que está na minha cabeça é ${music}, da Liniker.`)
}
recomendation('Central do Brasil', 'Psiu')

function triple(number){
    return number*3
}
console.log(triple(2))