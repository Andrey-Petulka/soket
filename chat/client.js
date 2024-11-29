!function(){
    var ws = new WebSocket('wss://websocket-echo.com');

    ws.onopen = function(){
        console.log("Соединение установлено")
    };

    ws.onmessage = function(event){
        console.log("Получены данные " + event.data);
    };

    ws.onmessage = function(event){
        console.log(event.data);
    }

    ws.onerror = function(event){
        console.log(event.data);
    }
}()