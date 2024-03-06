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

     var fsex = document.getElementsByTagName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     if(fsex[0].checked){
      gènero = 'Home'
     }
}