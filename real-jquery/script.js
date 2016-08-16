(function(){

        $('.collapse').click(function(){
            if($('main').hasClass('collapsed')){
                $('main').animate({marginLeft:'320px'}, 300).removeClass('collapsed');
                $('aside').animate({marginLeft:'0px'},300);
            } 
            else{
                $('main').animate({marginLeft:'0'}, 300).addClass('collapsed');
                $('aside').animate({marginLeft:'-320px'},300);
            }
        });


        /////////////////////////
       
        $('.tabs').on('click', 'li:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active');
            var tab = $('.active a').attr('href');

            $('.tab-content').not(tab).css({'display':'none'});
            $('.date').not(tab).css({'display':'none'});
            $(tab).fadeIn(0);
          });

    /////////// add button
    $('#add-tab').on('click', function(){
        
        var newIndex=$('input#text').val();
        var i=true;
        $('form').find('input, textarea').each(function(){
            if($(this).val() == ''){
                $(this).css({'border-color':'#d8512d'});
                i=false;
            }
        });
        
        if(newDate > new Date($('#datepicker').val())){
            alert('Wrong Date');
            return;
        }

            $('.active').removeClass('active');

            if (newIndex==0){
                $('<li class="tab active"><a href="#tab0">'+$('input#title').val()+'</a></li>').prependTo('.tabs');
                $('<div class="tab-content" id="tab0"><p>'+$('textarea#html').val()+'</p></div>').appendTo('.container');
                $('<div class="date" id="tab0">Actual due date: <span>'+todayString+'</span></div>').appendTo('.container');

                $('.tab').each( function( index, newIndex) { 
                    $('a').attr('href', 'tab'+(index+1));
                    $('.conrainer div').attr("id", "tab"+(index+1));
                });
            }

            if (newIndex > 0 && newIndex <= $('ul li').length){
                $('<li class="tab active"><a href="#tab'+newIndex+'">'+$('input#title').val()+'</a></li>').insertBefore($('.tab:nth-child('+newIndex+')'));
                $('<div class="tab-content" id="tab'+newIndex+'"><p>'+$('textarea#html').val()+'</p></div>').appendTo('.container');
                $('<div class="date" id="tab'+newIndex+'">Actual due date: <span>'+todayString+'</span></div>').appendTo('.container');

                /*$('.tab').each(function(i ) { 
                    var temp = "tab"+(i+1);
                    $(this).next("li").attr("id", temp);
                });*/

            }

            if (newIndex > $('ul li').length ){
                $('<li class="tab active"><a href="#tab'+($('ul li').length +1)+'">'+$('input#title').val()+'</a></li>').appendTo('.tabs');
                $('<div class="tab-content" id="tab'+($('ul li').length +1)+'"><p>'+$('textarea#html').val()+'</p></div>').appendTo('.container');
                $('<div class="date" id="tab'+($('ul li').length +1)+'">Actual due date: <span>'+todayString+'</span></div>').appendTo('.container');
            }

            $('.tab-content').not($('#tab'+newIndex)).css({'display':'none'});
       
            $('input, textarea').css({'border-color':'none'}); 
            $('form[name=newTab]').trigger( 'reset');
    });

    //// reset button
    $('#reset-fields').on('click', function(e){
        e.preventDefault();
        $('form[name=newTab]').trigger( 'reset');
    });
    
    ////////// datepicker

    var newDate = new Date();
    var todayString = (newDate.getMonth() +1) + "\/" + (newDate.getDate()) + "\/" + (newDate.getYear() + 1900);
    newDate = new Date(todayString);
    $('#datepicker').attr('placeholder', todayString);

    function updateDate(){
        var date = $('.current').data('date');
        if (typeof date === 'undefined') $('.date span').text("Not selected");
        $('.date span').text(date);
    }

    updateDate();

})();   




