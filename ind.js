const usuarios =   [
    {nome:"leko", senha: 321}
]

pagina = "index.html"



document.getElementById("acessar").addEventListener("click", function(){
   let meuCampo = document.getElementById("usuario")
    let valor = meuCampo.value
    

 if(valor == usuarios[0].nome){

    window.location.href = "index.html";


 } else {
    alert("FALHA NA MATRIX")
 }



})