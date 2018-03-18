//Main function
function geoDash(lat,lng){

    var data = document.getElementById('data');
    var msg = document.getElementById('msg');

    msg.innerHTML = "Loading..";

    //Name
    getName();

    //Time
    getTime();

    //Repeat every min
    setInterval(function(){
        getTime();
    }, 30 * 1000);

    //Date
    getDate();

    //Formatted address    
    convertPosition(lat,lng);

    //Weather
    getWeather(lat,lng);

    //News
    getNews();

    //Bus
    getBus(lat,lng);

    setTimeout(function(){
        msg.style.display = "none"; 
        data.style.display = "block";  
    }, 3000);


    //Quote
    getQuote();

}

//Name
function getName(){
    var name = document.getElementById('userName');

    name.style.display = "block";
}

//Time
function getTime(){
    var today = new Date();
    var hour = today.getHours();

    if(hour < 10){
        hour = "0" + hour;
    }


    var min = today.getMinutes();

    if(min < 10){
        min = "0" + min;
    }

    $("#time").html("");

    $("#time").append(
        hour 
        + ":" 
        + min
    );
}

//Date
function getDate(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0] =  "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var day = weekday[today.getDay()];

    var months = new Array(12);

    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";

    var month = months[today.getMonth()];
    var date = today.getDate();

    $("#date").html("");

    $("#date").append(
        day + ", "
        + month + " "
        + date
    );
}