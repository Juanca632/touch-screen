function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);
    host = "192.168.1.237"
    port = "9001"
    
    client = new Paho.MQTT.Client(host,Number(port),clientID);

    // client.onConnectionLost = onConnectionLost;

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
    console.log("Hay un error de conexion")
    // document.getElementById("messages").innerHTML += "<span> ERROR: Connection is lost.</span><br>";
    // if(responseObject !=0){
    //     document.getElementById("messages").innerHTML += "<span> ERROR:"+ responseObject.errorMessage +"</span><br>";
    // }
}

function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);

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

    
    // document.getElementById("messages").innerHTML += "<span> Topic:"+message.destinationName+"| Message : "+message.payloadString + "</span><br>";
    // document.getElementById("messages").innerHTML += "<span> Subscribing to topic "+topic + "</span><br>";
    

}

// function startDisconnect(){
//     client.disconnect();
//     document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";




// }

// function publishMessage(){
// msg = document.getElementById("Message").value;
// topic = document.getElementById("topic_p").value;

// Message = new Paho.MQTT.Message(msg);
// Message.destinationName = topic;

// client.send(Message);
// document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";


// }
