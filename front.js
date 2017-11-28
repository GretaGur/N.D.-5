
$('#show-file').bind("click", () => {
    let res = $.get('http://localhost:3000/read', function(data) {
        $('#file').text(data);
    });   
});

$('#append-file').bind("click", () => {
    text = $("#textarea").val();
    let res = $.post('http://localhost:3000/read',{textarea: text}, function(data) {
       if (data === "done") {
        $("#textarea").text("");
        $("#error").text("");
        let res = $.get('http://localhost:3000/read', function(data) {
            $('#file').text(data);
        });
       } else if (data === "error") {
        $("#error").text("Ups... Nepavtko atlikti veiksmo");
       }
    });   
});