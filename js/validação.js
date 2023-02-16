function validaDataNascimento(input) {
    const dataRecebida = new Data(input.value);
    let mensagem =(" ");

    if(!maiorIdade(dataRecebida)) {
        mensagem = 'você deve ser maior de idade';
        
    }
    

    input.setCustomValidity(mensagem)

}


function maiorIdade(date) {
    const dataAtual = new Date();
    const dataMais18 =  new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())  

    return dataMais18 <= dataAtual
}
