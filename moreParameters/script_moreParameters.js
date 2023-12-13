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
            document.getElementById("minCellV").innerHTML = payload + " V";
        }, 500);
    }
    else if(message.destinationName === "battery/details/maxCellV"){
        setTimeout(function () {
            document.getElementById("maxCellV").innerHTML = payload + " V";
        }, 500);
    }
    else if(message.destinationName === "battery/details/minCellT"){
        setTimeout(function () {
            document.getElementById("minCellT").innerHTML = payload + " C°";
        }, 500);
    }
    else if(message.destinationName === "battery/details/maxCellT"){
        setTimeout(function () {
            document.getElementById("maxCellT").innerHTML = payload + " C°";
        }, 500);
    }
    else if(message.destinationName === "battery/details/batteryModulesOn"){
        setTimeout(function () {
            document.getElementById("batteryModulesOn").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/batteryModulesOff"){
        setTimeout(function () {
            document.getElementById("batteryModulesOff").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/nModulesBlockCharge"){
        setTimeout(function () {
            document.getElementById("nModulesBlockCharge").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/nModulesBlockDischarge"){
        setTimeout(function () {
            document.getElementById("nModulesBlockDischarge").innerHTML = payload;
        }, 500);
    }
    else if(message.destinationName === "battery/details/InstalledC"){
        setTimeout(function () {
            document.getElementById("InstalledC").innerHTML = payload + " Ah";
        }, 500);
    }
    else if(message.destinationName === "battery/details/AvailableC"){
        setTimeout(function () {
            document.getElementById("AvailableC").innerHTML = payload + " Ah";
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowV"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("lowV").innerHTML = "Ok";
            }
            else{
                document.getElementById("lowV").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highV"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("highV").innerHTML = "Ok";
            }
            else{
                document.getElementById("highV").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highChargeC"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("highChargeC").innerHTML = "Ok";
            }
            else{
                document.getElementById("highChargeC").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highDischargeC"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("highDischargeC").innerHTML = "Ok";
            }
            else{
                document.getElementById("highDischargeC").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowT"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("lowT").innerHTML = "Ok";
            }
            else{
                document.getElementById("lowT").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highT"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("highT").innerHTML = "Ok";
            }
            else{
                document.getElementById("highT").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/lowChargeT"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("lowChargeT").innerHTML = "Ok";
            }
            else{
                document.getElementById("lowChargeT").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/highChargeT"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("highChargeT").innerHTML = "Ok";
            }
            else{
                document.getElementById("highChargeT").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/internalFailure"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("internalFailure").innerHTML = "Ok";
            }
            else{
                document.getElementById("internalFailure").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/alarms/cellImbalance"){
        setTimeout(function () {
            if(payload == "0"){
                document.getElementById("cellImbalance").innerHTML = "Ok";
            }
            else{
                document.getElementById("cellImbalance").innerHTML = "Error";
            }
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/CVL"){
        setTimeout(function () {
            document.getElementById("CVL").innerHTML = payload + " V";
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/CCL"){
        setTimeout(function () {
            document.getElementById("CCL").innerHTML = payload + " A";
        }, 500);
    }
    else if(message.destinationName === "battery/parameters/DCL"){
        setTimeout(function () {
            document.getElementById("DCL").innerHTML = payload + " A";
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