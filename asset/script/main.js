function calcular() {
    // Obtener los valores de los inputs
    var numAdultos = document.getElementById("num-adultos").value;
    var numNinos = document.getElementById("num-ninos").value;
    
  
    // Calcular la cantidad total de alimentos
    var totalCarne = numAdultos*0.35+numNinos*0.15;
    var totalVacuno=totalCarne*0.40;
    var totalCerdo=totalCarne*0.30;
    var totalPollo=totalCarne*0.20;
    var totalEmbutido=totalCarne*0.10;

    // Crear la tabla con los resultados
    var tabla = '<P>Se deben comprar '+ totalCarne+' Kg de Carne</p>';
    tabla +='</br> <P>Distribuidos de la siguiente forma:</p>';
    tabla +='<div class="distribucion">'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/vacuno.jpg" alt="Imagen carne">'
    tabla +='<h4>VACUNO</h4>'
    tabla +='<p>Puede ser lomo liso, lomo vetado, punta de ganso o cualquiera de tu preferencia</p>'
    tabla +='<P>Total ' +totalVacuno+' Kg de Carne</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/cerdo.jpg" alt="Imagen carne">'
    tabla +='<h4>CERDO</h4>'
    tabla +='<p>Costillar, plateada o cualquiera de tu preferencia</p>'
    tabla +='<P>Total ' +totalCerdo+' Kg de Carne</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/pollo.jpg" alt="Imagen carne">'
    tabla +='<h4>POLLO</h4>'
    tabla +='<p>Recomentación:Tutos ala</p>'
    tabla +='<P>Total ' +totalPollo+' Kg de Carne</p>'
    tabla +='</div>'
    tabla +='<div class=card-carne>'
    tabla +='<img src="asset/img/embutidos.jpg" alt="Imagen carne">'
    tabla +='<h4>EMBUTIDOS</h4>'
    tabla +='<p>Longanizas, chorizos, Prietas o cualquiera de tu preferencia</p>'
    tabla +='<P>Total ' +totalEmbutido+' Kg de Carne</p>'
    tabla +='</div>'
    tabla +='</div>';
  
    // Mostrar la tabla en el div de resultado
    document.getElementById("resultado").innerHTML = tabla;
  }
  
  function truncarCeroCinco(num){
    var decimales =num % 1;
    var resultado=0
    if (decimales>0.5){
      resultado=math.floor(num)+1;
      return resultado;
    } else{
      resultado=math.floor(num)+0.5;
      return resultado;
    }
  }

  function test1(){
    var a=truncarCeroCinco(1.1);
    alert (a);
  }