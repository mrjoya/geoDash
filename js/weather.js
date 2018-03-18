/* Weather */
function getWeather(lat,lng){
    
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22("+lat+"%2C"+lng+")%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    
    console.log(url);
    
    $.ajax({
        type: 'GET',
        url: "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22("+lat+"%2C"+lng+")%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
        dataType: 'json',
        success: function(data){
            var condition = data.query.results.channel.item.condition.text;
            var temp = data.query.results.channel.item.condition.temp;
            
            document.getElementById("weather").innerHTML = temp + "&deg; " + condition;
        }
        
    });
}