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

    let payload = message.payloadString;

    if(message.destinationName === "battery/voltage"){
        setTimeout(function () {
            document.getElementById("voltage").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/SOC"){
        setTimeout(function () {
            document.getElementById("soc").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/SOH"){
        setTimeout(function () {
            document.getElementById("soh").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/power"){
        setTimeout(function () {
            document.getElementById("power").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/capacity"){
        setTimeout(function () {
            document.getElementById("capacity").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/current"){
        setTimeout(function () {
            document.getElementById("current").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/temperature"){
        setTimeout(function () {
            document.getElementById("temperature").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "relay"){
        checkbox = document.getElementById("flexSwitchCheckDefault");
        console.log(payload);

        if(payload == "1"){
            checkbox.checked = true;
        }
        else{
            checkbox.checked = false;
        }
        

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
    checkbox = document.getElementById("flexSwitchCheckDefault");
    // console.log(checkbox.checked);
    if(checkbox.checked == false){
        msg = "0";
    }
    else{
        msg = "1";
    }
    Message = new Paho.MQTT.Message(msg);
    Message.destinationName = topic;
    Message.retained = true;
    client.send(Message);
}


