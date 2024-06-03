
var urlBase = 'https://api.yumserver.com/16571/products';

   // GUARDAR

function CreandoProducto() {
        const titulo = document.getElementById('Producto').value;
        const precioPeso = document.getElementById('Precio-en-pesos').value;
        const precioDolar = document.getElementById('Precio-en-usd').value;
        const fecha = document.getElementById('Fecha').value;

        fetch(urlBase, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
        titulo:titulo,
        precioPeso:precioPeso,
        precioDolar:precioDolar,
        fecha: fecha,
        })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// CARGAR PRODUCTOS
function CargarProducto(){   
        fetch(urlBase)
        .then(response => response.json())
        .then( MostrarProductos)
        .catch(error => console.error('Error:'))
}


//Mostrar por pantalla productos

function MostrarProductos(data)
{
    let html = ``;
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].titulo)
        html += `
        <tr>
            <td><b>${data[i].idcod}</b></td> 
            <td><b>${data[i].titulo}</b></td>   
            <td>${data[i].precioPeso}</td>
            <td>${data[i].precioDolar}</td>
            <td>${data[i].fecha}</td>
            <td><button onclick= "borrar('${data[i].idcod}')">Borrar</button></td>
            
        </tr>  
        `; 
    }

    document.getElementById('Resultados').innerHTML = html;
}

document.getElementById('IrAPagina').addEventListener('click', function() {
    window.location.href = '/main/modificador.html'; });
