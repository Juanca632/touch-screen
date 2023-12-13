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

    if(message.destinationName === "battery/details/minCellV"){
        setTimeout(function () {
            document.getElementById("minCellV").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/maxCellV"){
        setTimeout(function () {
            document.getElementById("maxCellV").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/minCellT"){
        setTimeout(function () {
            document.getElementById("minCellT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/maxCellT"){
        setTimeout(function () {
            document.getElementById("maxCellT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/batteryModules"){
        setTimeout(function () {
            document.getElementById("batteryModules").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/nModulesBlockChargeDischarge"){
        setTimeout(function () {
            document.getElementById("nModulesBlockChargeDischarge").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/InstalledAvailableC"){
        setTimeout(function () {
            document.getElementById("InstalledAvailableC").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowV"){
        setTimeout(function () {
            document.getElementById("lowV").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highV"){
        setTimeout(function () {
            document.getElementById("highV").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highChargeC"){
        setTimeout(function () {
            document.getElementById("highChargeC").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highDischargeC"){
        setTimeout(function () {
            document.getElementById("highDischargeC").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowT"){
        setTimeout(function () {
            document.getElementById("lowT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highT"){
        setTimeout(function () {
            document.getElementById("highT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowChargeT"){
        setTimeout(function () {
            document.getElementById("lowChargeT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highChargeT"){
        setTimeout(function () {
            document.getElementById("highChargeT").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/internalFailure"){
        setTimeout(function () {
            document.getElementById("internalFailure").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/cellImbalance"){
        setTimeout(function () {
            document.getElementById("cellImbalance").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/CVL"){
        setTimeout(function () {
            document.getElementById("CVL").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/CCL"){
        setTimeout(function () {
            document.getElementById("CCL").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/DCL"){
        setTimeout(function () {
            document.getElementById("DCL").innerHTML = payload;
        }, 500);
    }
}

function bodyFunction() {
    startConnect();
}

// function startDisconnect(){
//     client.disconnect();
//     document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";




// }

function index(){
    window.location.href = "../index.html";
}