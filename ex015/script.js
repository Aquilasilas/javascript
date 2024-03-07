function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.getElementById('res')
   if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifiqui os dados e tente novamente!')
     }
     else{
        window.alert('Tudo ok')
     }

     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if(fsex[0].checked){
        gênero = 'Homem'
        if( idade >= 0 && idade < 10 ) {
         //criança
         img.setAttribute('src', 'foto-crianca-hh.png')
      } else if ( idade < 20) {
         //Jovem
         img.setAttribute('src', 'foto-jovem-hh.png')
      } else if( idade < 50) {
         //Adulto
         img.setAttribute('src', 'foto-adulto-hh.png')
      } else {
         // Idoso 
         img.setAttribute('src', 'foto-idoso-hh.png')
      }
   } else if (fsex[1].checked){
      gênero = 'Mulher'
      if( idade >= 0 && idade < 10 ) {
         //criança
         img.setAttribute('src', 'foto-crianca-mm.png')
      } else if ( idade < 20) {
         //Jovem
         img.setAttribute('src', 'foto-jovem-mm.png')
      } else if( idade < 50) {
         //Adulto
         img.setAttribute('src', 'foto-adulto-mm.png')
      } else {
         // Idoso 
         img.setAttribute('src', 'foto-idoso-mm.png')
      }
     }
    
     res.style.textAlign = 'center' // usa para centraliza o texto no js
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
     res.appendChild(img)// Usa para adisiona um elemento 
}