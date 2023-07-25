//Constructor for favicon
const favicon = document.querySelector("link[rel='icon']");


//Fixed favicon (in my case, it is a pink hollow heart)
favicon.setAttribute("href", "https://freepngimg.com/thumb/heart/37323-9-pink-heart.png")


//Timer function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//Infinite loop for blinking favicon (in this example, it will turn the pink hollow heart into the red full one)
var demo = async function () {
    while (true) {
        favicon.setAttribute("href", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png")
        await sleep(1000)    
        favicon.setAttribute("href", "https://freepngimg.com/thumb/heart/37323-9-pink-heart.png")
        await sleep(1000)
    } 
}


//Non-successful JS blinking favicon code (more complicated, unfinished code) 
const target = document.querySelector(".counter")

const callback = (entries) => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > "0.5") {
            demo()
        }
    }
)}

const observer = new IntersectionObserver(callback);

var Observer = async function() {
    while (true) {
        try {
            await sleep (2000)
            console.log('working or not?')
            observer.observe(target)
            
        } catch(err) {

        }
    }
}

//Observer()  


//Successful JS(jQuery) blinking favicon code   
var interval = setInterval(function () {
    //Replace '.counter' className with any web element that will trigger your favicon function once the element is visible
    if ($('.counter').is(':visible')) {
        demo()
    }
})

interval
