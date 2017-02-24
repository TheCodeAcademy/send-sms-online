$( document ).ready( function () {
    $(".send").click( function (e) {
        e.preventDefault();
        var name = $("#your-name").val();
        var number = $("#number").val();
        var carrier = $("#carrier").val();
        var message = $("#message").val();


        $.ajax({
            method: "POST",
            dataType: "html",
            async: false,
            url: "/send.php",
            data: { name: name,
                    number: number,
                    carrier: carrier,
                    message: message
            }
        })
            .done(function( msg ) {
                alert( msg );
                console.log(msg);
            });

    });
});
