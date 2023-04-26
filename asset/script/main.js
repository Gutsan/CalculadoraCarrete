function calcular() {
    // Obtener los valores de los inputs
    var numAdultos = document.getElementById("num-adultos").value;
    var numNinos = document.getElementById("num-ninos").value;
    
  
    // Calcular la cantidad total de alimentos
    var totalCarne = numAdultos*0.35+numNinos*0.15;
    var totalVacuno=truncarCeroCinco(totalCarne*0.40);
    var totalCerdo=truncarCeroCinco(totalCarne*0.30);
    var totalPollo=truncarCeroCinco(totalCarne*0.20);
    var totalEmbutido=truncarCeroCinco(totalCarne*0.10);
    totalCarne=totalVacuno+totalCerdo+totalEmbutido+totalPollo

    // Crear la tabla con los resultados
    var tabla = '<P>'+ totalCarne+' Kg de Carne</p>';
    tabla +='<div class="distribucion">'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/vacuno.jpg" alt="Imagen carne">'
    tabla +='<h4>VACUNO</h4>'
    tabla +='<p>' +totalVacuno+' KG</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/cerdo.jpg" alt="Imagen carne">'
    tabla +='<h4>CERDO</h4>'
    tabla +='<P>' +totalCerdo+' KG</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/pollo.jpg" alt="Imagen carne">'
    tabla +='<h4>POLLO</h4>'
    tabla +='<p>' +totalPollo+' KG</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/embutidos.jpg" alt="Imagen carne">'
    tabla +='<h4>EMBUTIDOS</h4>'
    tabla +='<p>' +totalEmbutido+' KG</p>'
    tabla +='</div>'
    tabla +='</div>';
  
    // Mostrar la tabla en el div de resultado
    document.getElementById("resultado").innerHTML = tabla;
  }
  
  function truncarCeroCinco(num){
    var decimales =num % 1;
    var resultado=0;
    if (decimales>0.5){
      resultado=num-num%1+1;
      return resultado;
    } else{
      resultado=num-num%1+0.5;
      return resultado;
    }
  }
