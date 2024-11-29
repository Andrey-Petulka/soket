!function($){
    var ws = new WebSocket("wss://websocket-echo.com");
    ws.onmessage = function(event){
        var data = JSON.parse(event.data);
        $('<div class="message"><img class="image" src="'+data.img+'"><div class="text">'+data.message+'</div></div>').appendTo('#chat');
        console.log("Получены данные " + event.data)
    };
    $(document).ready(function() {
        console.log('Файл chat.js работает')
        var $img = $('#client-img'),
            $name = $('#client-name'),
            $message= $('#client-message');

        $('#send').on('click', function(){
            var img = $img.val(),
                name = $name.val(),
                message = $message.val(),
                data = {
                    name: name,
                    message: message,
                    img: img,
                };
                console.log(data)
                ws.send(JSON.stringify(data));
        });
    });
}(jQuery)