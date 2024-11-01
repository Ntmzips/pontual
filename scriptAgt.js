var agendamentos = document.getElementById("agendamento")
var solitacoes = document.getElementById("solicitacao")
var wt = document.getElementById("whats")

agendamentos.addEventListener("click", function(){


   var texto = `<table class="table table-strip">
                  
               <tr>
                   <td >HOJE</th>
                   <td>ORTOPEDIA</th>
                   <td>15 Msg</th>
                   <td>13-10-24</th>
               </tr> 

                <tr>
                   <td >HOJE</th>
                   <td>ORTOPEDIA</th>
                   <td>15 Msg</th>
                   <td>13-10-24</th>
               </tr> 
               </table>
`
   document.getElementById("shows").innerHTML = texto
 
 
   
    
})



solitacoes.addEventListener("click", function(){
    var textos = `<table class="table table-strip">

    <tr>
        <th >HORARIO</th>
        <th>ORTOPEDISTA</th>
        <th>NÃO AGENDADO</th>
        <th>DATA</th>
    </tr> 
                   
    <tr>
        <td >HOJE</th>
        <td>ORTOPEDIA</th>
        <td>15 Msg</th>
        <td>13-10-24</th>
    </tr> 

     <tr>
        <td >HOJE</th>
        <td>ORTOPEDIA</th>
        <td>15 Msg</th>
        <td>13-10-24</th>
    </tr> 
    </table>
`
document.getElementById("shows").innerHTML = textos

})


wt.addEventListener("click", function(){
    var texto = `
         
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              MENSAGENS PARA o  WhatsAPP
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>DIGITE SUA MENSAGEM PERSONALIZADA.</strong> 
              <br>
              <textarea name="areaTexto" id="areaTexto" cols="50" rows="20"></textarea>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              MENSAGENS RECEBIDAS
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>AQUI FICARAM AS MENSAGENS RECEBIDAS.</strong> 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              PLANEJAMENTOS
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>AQUI FICARAM OS PLANEJAMENTOS</strong> 
            </div>
          </div>
        </div>

</div>
    `

    document.getElementById("shows").innerHTML = texto
})