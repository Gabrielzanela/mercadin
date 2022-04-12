const selecionarprodutos = function (opcao) {
   let resultado = document.getElementById('resultado') 
}
switch (opcao) {
    case 'uva':
        console.log('opcao selecionada e: uva')
        resultado.innerHTML = "opcao selecionada é: uva"
        break;
    case 'laranja':
        console.log('Opcao selecionada e: laranja')
        resultado.innerHTML = "opcao selecionada é: laranja"
        break;
    case 'melancia':
        console.log('opcao selecionada e: melamcia')
        resultado.innerHTML = "opcao selecionada é: melancia"
        break;
        default:
        console.log('opcao selecionada e: invalida')
        resultado.innerHTML = "opcao invalida"
    break
    
    

}