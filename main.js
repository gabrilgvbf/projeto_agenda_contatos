const inputnome= document.querySelector('.inputnome');
const inputtelefone=document.querySelector('.inputtelefone');
const form= document.querySelector('.form');
const nomes=[]
const numeros=[]
let linhas='';

form.addEventListener('submit', function (e){

e.preventDefault();

adicionarlinha()
atualizartabela()
console.log(numeros);
})

function adicionarlinha(){

    
if((nomes.includes(inputnome.value)&&numeros.includes(inputtelefone.value))){
    alert('Numero e Nome já cadastrado!')

}else{
    nomes.push(inputnome.value);
    numeros.push(inputtelefone.value);
    let linha ='<tr>';
linha+= `<td align="center">${inputnome.value}</td>`;
linha+=`<td align="center">${inputtelefone.value}</td>`;
linha+='</tr>';
linhas+=linha;}
    

}

function atualizartabela(){
    const corpotabela=document.querySelector('tbody')
    corpotabela.innerHTML=linhas;
}