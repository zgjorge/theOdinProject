$(document).ready(function(){
   
    $('#start1').on('click', function(){
    $('#grid_container').html("");
   var input = prompt('how many ?');
   var square_size = $('#grid_container').width()/input-2;
        
    for(var x=0; x<input; x++){
        for(var y=0; y<input; y++){
           $('#grid_container').append('<div class="grid_square"></div>');    
        }
        $('#grid_container').append('<div></div>');   
        
    }
        
        $('.grid_square').css({'width':square_size, 'height':square_size});
    
        //effect
        $('#grid_container').css('display','none');
        $( "#grid_container" ).show( "fold", 1000 );
        
            
        //mouse event    
        $('.grid_square').mouseenter(function(){
         $(this).addClass('highlight');
               
        })
    })      

});
//case disappear
//$(this).addClass('highlight').effect('puff','slow');
//shake
//$(this).addClass('highlight').effect('shake','slow');
    

  
   

