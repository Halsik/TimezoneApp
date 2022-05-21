
// Time Buttons
const europeButton = document.querySelector(".europe");
const asiaButton = document.querySelector(".asia");
const americaButton = document.querySelector(".america");
const australiaButton = document.querySelector(".australia");
const africaButton = document.querySelector(".africa");

// Timer
const clock = document.querySelector(".time");


// Acces to API 
let time = {
    
    // Fetch data
    fetchTime: function(region, area) {
        fetch(
            "http://worldtimeapi.org/api/timezone/" + region + "/" + area
            ).then ((response) => response.json())
            .then((data) => this.displayTime(data));
    },

    // Display data from API
    displayTime: function(data) {
        // Get time data from JSON
        const { datetime } = data;
        // Remove characters from start and end of the datatime data
        let str = datetime
        let firstCut = str.substr(11, str.length);
        let newStr = firstCut
        newStr = firstCut.substr(0, newStr.length-13)
        // Print data in HTML
        clock.innerHTML = newStr
    },
    
}

// Deafult time
time.fetchTime("europe", "warsaw")


// Remove class "pressed"
function resetButton() {
    europeButton.classList.remove("pressed");
    asiaButton.classList.remove("pressed");
    americaButton.classList.remove("pressed");
    australiaButton.classList.remove("pressed");
    africaButton.classList.remove("pressed");
    
}

// Button event listner and add "pressed" class
europeButton.addEventListener('click', function() {
    resetButton()
    europeButton.classList.toggle("pressed")
    region = "europe"
    area = "warsaw"
    time.fetchTime(region, area)
    // Change background image every button click
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
});

asiaButton.addEventListener('click', function() {
    resetButton()
    asiaButton.classList.toggle("pressed")
    region = "asia"
    area = "tokyo"
    time.fetchTime(region, area)
    // Change background image every button click
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
});

americaButton.addEventListener('click', function() {
    resetButton()
    americaButton.classList.toggle("pressed")
    region = "america"
    area = "new_york"
    time.fetchTime(region, area)
    // Change background image every button click
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
});

africaButton.addEventListener('click', function() {
    resetButton()
    africaButton.classList.toggle("pressed")
    region = "africa"
    area = "cairo"
    time.fetchTime(region, area)
    // Change background image every button click
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
});

australiaButton.addEventListener('click', function() {
    resetButton()
    australiaButton.classList.toggle("pressed")
    region = "australia"
    area = "sydney"
    time.fetchTime(region, area)
    // Change background image every button click
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + region + ")"
});

