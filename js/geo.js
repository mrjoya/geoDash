var x = document.getElementById('geo');
var btn = document.getElementById('locateMe');
var msg = document.getElementById('msg');

//Get users geoLocation
function getLocation(){

    btn.style.display = "none";
    msg.style.display = "block";

    msg.innerHTML = "Locating...";

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        msg.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//Show the position of user in lat, lng
function showPosition(position){
    console.log("Lat: " + position.coords.latitude + " Lng: " + position.coords.longitude);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    geoDash(lat,lng);
}

//Convert coords to formatted address
function convertPosition(lat,lng){
    $.ajax({
        type: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyD3_ihti5IQ4CPDNfKoXucfUefSVfH2EG4',
        dataType: 'json',
        success: function(data){  
            var address = data.results[1].formatted_address;

            x.innerHTML = address + "<br><span>" + lat + " " + lng + "</span><br>";
        }

    });

}