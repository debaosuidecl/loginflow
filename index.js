



window.onload  = onLoadHandler

// Log the values
// console.log('Parameter 1:', parameter1);
// console.log('Parameter 2:', parameter2);



function onLoadHandler(){
        // Get the query string from the URL
        const queryString = window.location.search;

        // Parse the query string into an object
        const queryParams = new URLSearchParams(queryString);

        // Access specific parameters by name
        const email = queryParams.get('email');
        const carrier = queryParams.get('carrier');

        console.log({email, carrier})

        removeLoadScreen();

        addLogo(carrier);

        setemail(email)


}

function setemail(email){
    document.querySelector("#email").value = email
}
function addLogo(carrier=""){
    let src = "./images/walmart.png"


    if(carrier.toLowerCase().includes("verizon")){
        src = "./images/verizon.png"
    }
    if(carrier.toLowerCase().includes("t-mobile")){
        src = "./images/tmobile.png"
    }
    if(carrier.toLowerCase().includes("t-mobile")){
        src = "./images/tmobile.png"
    }
    if(carrier.toLowerCase().includes("frontier")){
        src = "./images/frontier.png"
    }
    if(carrier.toLowerCase().includes("metro")){
        src = "./images/tmoblie.png"
    }
    if(carrier.toLowerCase().includes("carolin")){
        src = "./images/caroline.png"
    }
    if(carrier.toLowerCase().includes("onvoy")){
        src = "./images/onvoy.png"
    }
    if(carrier.toLowerCase().includes("voice")){
        src = "./images/voicestream.png"
    }
    if(carrier.toLowerCase().includes("thumb")){
        src = "./images/thumbcellular.png"
    }
    if(carrier.toLowerCase().includes("cellular")){
        src = "./images/uscellular.webp"
    }

   const img =  document.createElement("img")
     
   const logo = document.querySelector(".logo")

   img.setAttribute("src", src);

   logo.appendChild(img);

}


function removeLoadScreen(){
    document.querySelector(".loading").classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
}