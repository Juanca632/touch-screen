function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);
    host = "192.168.1.237"
    port = "9001"
    
    client = new Paho.MQTT.Client(host,Number(port),clientID);

    client.onConnectionLost = onConnectionLost;



    client.connect({
        onSuccess: onConnect
//        userName: userId,
 //       passwordId: passwordId
    });

    client.onMessageArrived = onMessageArrived;


}


function onConnect(){
    topic = "#"
    client.subscribe(topic);

}



function onConnectionLost(responseObject){
    console.log("Se perdio la conexion")
    
}

function onMessageArrived(message){
    // console.log("OnMessageArrived: "+message.payloadString);

    var payload = message.payloadString;

    if(message.destinationName === "battery/voltage"){
            document.getElementById("voltage").innerHTML = payload;
    }
    else if(message.destinationName === "battery/SOC"){
            document.getElementById("soc").innerHTML = payload;
    }
    else if(message.destinationName === "battery/SOH"){
            document.getElementById("soh").innerHTML = payload;
    }
    else if(message.destinationName === "battery/power"){
            document.getElementById("power").innerHTML = payload;
    }
    else if(message.destinationName === "battery/capacity"){
            document.getElementById("capacity").innerHTML = payload;
    }
    else if(message.destinationName === "battery/current"){
            document.getElementById("current").innerHTML = payload;
    }
    else if(message.destinationName === "battery/temperature"){
            document.getElementById("temperature").innerHTML = payload;
    }
    else if(message.destinationName === "relay"){
            document.getElementById("flexSwitchCheckDefault").innerHTML = payload;
    }

}

function bodyFunction() {
    startConnect();
}

// function startDisconnect(){
//     client.disconnect();
//     document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";




// }
let button_relay = 0

function publishMessage(){
    topic = "relay";
    // if(button_relay == 0){
    //     button_relay = 1;
    //     msg = 1;
    // }
    // else{
    //     button_relay = 0;
    //     msg = 0;
    // }
    console.log("hola");
    msg = "On";

    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;

    client.send(Message);
}


