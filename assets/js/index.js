//funcion que muestra informacion sobre el boton de enviar correo y añadir favoritos
$(document).ready(function () {
    $("button").tooltip()
})

//funcion que arroja un alert al presionar el boton de enviar correo.
$('#enviarCorreo').click(function () {

    alert("El correo fue enviado correctamente")
})

//funcion para cambiar de color al presionar el titulo de ingredientes y preparacion.
$("h5").click(function () {
    $(this).css({
        "color": "red",
    })
})

// funcion para que se esconda la informacion de las recetas relacionadas presionando el titulo de la card.
$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})