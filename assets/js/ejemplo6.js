function mostrar(){
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value 
    numero1=parseFloat(numero1)
    numero2 = parseFloat(numero2)


    let positivos = 'Los números positivos son: ';


  if (numero1>0 )
    
   
    positivos+= numero1 + ', ';
  

   if (numero2>0) 
    
    positivos+= numero2 + ' ';
   
   
  alert(positivos);

}