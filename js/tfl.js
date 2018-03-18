function getBus(lat, lng){
    
    var url = 'https://api.tfl.gov.uk/Stoppoint?lat='+lat+'&lon='+lng+'&stoptypes=NaptanPublicBusCoachTram';
    
    console.log(url);

    $.ajax({
        type: 'GET',
        url: 'https://api.tfl.gov.uk/Stoppoint?lat='+lat+'&lon='+lng+'&stoptypes=NaptanPublicBusCoachTram',
        dataType: 'json',
        success: function(data){

            $("#tfl").html("<p class='sectionTitle'>TFL - Bus stops near you</p>");

            $.each(data.stopPoints, function(key, value){
                
                var stopLetter = value.stopLetter;
                var lines = value.lines;
                var stopName = value.commonName;
                var towards = value.additionalProperties[1].value;
                var buses = [];
                                
                for(var i = 0; i < lines.length; i++){
                    buses.push(lines[i].name);
                }
                
                var busesAsString = buses.join(', ');
                
                $('#tfl').append("<div class='row'>"
                                 + "<div class='col-xs-12'><span id='stopName'>"+ stopName + "  <span id='stopLetter'>" + stopLetter + "</span></span> <br><span id='towards'> towards "+ towards + "</span><br><span id='buses'>" + busesAsString + "</span></div></div>");
                
                buses = [];          
                
            });
        }

    });
}