function calcular() {
    // Obtener los valores de los inputs
    var numAdultos = document.getElementById("num-adultos").value;
    var numNinos = document.getElementById("num-ninos").value;
    
  
    // Calcular la cantidad total de alimentos
    var totalCarne = numAdultos*0.35+numNinos*0.15

    // Crear la tabla con los resultados
    var tabla = "<table><thead><tr><th>Carne</th><th>Cantidad</th><th>Imagen</th></tr></thead><tbody>";
    tabla += "<tr><td>Vacuno</td><td>" + totalCarne + " Kg</td><td><img src='asset/img/carnito.jpg' alt='imagen-de-carnito'></td></tr>";
    tabla += "</tbody></table>";
  
    // Mostrar la tabla en el div de resultado
    document.getElementById("resultado").innerHTML = tabla;
  }
  