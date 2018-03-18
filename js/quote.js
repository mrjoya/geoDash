function getQuote(){
    var quote = document.getElementById('quote');
    
    $.ajax({
        type: 'GET',
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
        dataType: 'json',
        success: function(data){
            $('#quote').html("");
            
            var title = data[0].title;
            var content = data[0].content;
            
            $('#quote').append("<p><span>" + title + "</span>"+content+"</p>");
        }
    });
}