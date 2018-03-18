function getNews(){
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ba8a3586d4eb441eb8984c49d63cd7ff',
        dataType: 'json',
        success: function(data){

            $('#news').html("<p class='sectionTitle'>BBC News - Latest headlines</p>");

            var title, url, img, desc;

            for(var i=0; i < 2; i++){

                img = data.articles[i].urlToImage;
                title = data.articles[i].title;
                desc = data.articles[i].description;
                url = data.articles[i].url;
                
                $("#news").append(
                    "<div class='row'>" 
                    +"<a href='"+url+"' target='_blank'>"
                    + "<div class='col-xs-4'><img src='"+img+"' width='75px'></div><div class='col-xs-8'>" + title + "<br><span>" + desc + "</span><br><br></div></a>" 
                    + "</div>"
                );

            }
        }
    });
}