$(function(){

    ($('<div/>', {id: "controles"})

    // Controles de columna
    .append($('<br/>'))
    .append($("<label/>", {for: "col"}).text("Nº Col.:"))
    .append($("<input/>", {id: "col", type: "number", min: 0, step: 1, value: 0}))
    .append($("<button/>", {id: "col_add", type: "button"}).text("+"))
    .append($("<button/>", {id: "col_del", type: "button"}).text("-"))
    .append($("<button/>", {id: "col_left", type: "button"}).text("<"))
    .append($("<button/>", {id: "col_right", type: "button"}).text(">"))

    ).insertAfter($("#tabla"))

    // Añadir columna
    $("#col_add").on('click', function() {
        $('#tabla tr').each(function(index) {
            let $celda = (index == 0) ? $("<th/>").text("X") : $('<td/>').text("-");
            $celda.insertBefore($(this).children().eq($('#col').val()));
        });
    });

    // Eliminar columna
    $("#col_del").on('click', function() {
        $('#tabla tr').each(function() {
            $(this).children().eq($("#col").val()).remove();
        });
    });

    // Mover columna a la izquierda
    $("#col_left").on('click', function() {
        let pos = +$("#col").val();
        if (pos > 0) {
            $('#tabla tr').each(function() {
                $(this).children().eq(pos).after($(this).children().eq(pos-1)); 
            });
            $("#col").val(pos-1);
        }
    });

    // Mover columna a la derecha
    $("#col_right").on('click', function() {
        let pos = +$("#col").val();
        $('#tabla tr').each(function() {
            $(this).children().eq(pos).before($(this).children().eq(pos+1)); 
        });
        $("#col").val(pos+1);
    });

    // FILAS PARA CASA --> Añadir, eliminar, subir y bajar

    // Editar celda
    $('#tabla')
        // Añadir el input al hacer doble click y seleccionar el valor
        .on('dblclick', 'td,th', function(){            
            let $input = $('<input/>',  {
                type: "text",
                value: $(this).text()
            });
            $input.data("original", $(this).text());
            $(this).text("");
            $(this).append($input);
            //$input.focus();
            $input.select();
        })

        // Cuando el input pierda el foco, resturar el valor original 
        // y borrar el input
        .on("blur", "input", function() {
            $(this).parent().text($(this).data("original"));
            $(this).remove();
        })

        // Al pulsar Enter, se guardan los datos
        .on("keyup", "input", function(e) {
            if (e.keyCode == 13) {
                $(this).parent().text($(this).val());
                $(this).remove();
            }
        })


        .before($("<input/>", {type: "search", id: "filtro"}));

        $("#filtro").on("input", function() {
            let value = $(this).val().toLowerCase();
            $("#tabla tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
  



});