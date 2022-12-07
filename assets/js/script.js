$(document).ready(function(){
    var contents = 'content/main.html'
    
    $('.content').load(contents)
    
    $('.content').on('click', '.bt-start', function(){
        $.ajax({
            url: 'content/content.html',
            success: function(result){
                $('.content').children().fadeOut(500, function(){
                    $('.content').html(result)
                })
            }
        })
    })
})