$(document).ready(function(){
        $('body').click(function() {
                $("#names").html("");
                 $("#regionnames").html(""); 
                 $("#govformnames").html("");
        });
        });
        
        
        

        var liSelected;
        
        function choose(arg,inputid,choiceid){
        $(inputid).val(arg.innerHTML);
        $('li').removeClass('selected');
        $(choiceid).html("");
        }
        
        function fon(arg){
        $('li').removeClass('selected');
        $(arg).addClass('selected');
        liSelected = $('li').eq($("li").index(arg));
        }
        
        function unfon(arg){
        $('li').removeClass('selected');
        liSelected = $('li').eq(-1);
        }
       
       
        function getNamesAJAX1()  {
        liSelected=undefined;
        $( ".countryInfoField").unbind( "keydown" );
        $("#names").html("");
        
        $.getJSON("countryListJSON.php?q="+$("#searchField").val(), function(data) {
        for(i = 0; i < data.length; i++) {
        $("#names").append("<li onclick='choose(this,"+'"#searchField",'+'"#names")'+"'"+ "onmouseover='fon(this)' onmouseout='unfon(this)'>"+data[i]+"</li>" );
        }
        });
         if($("#searchField").val()==0){
             $("#names").html("");
        }
    
        $('.countryInfoField').keydown(function(e){
            if(e.which === 40){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.next();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.countryInfoField li').eq(0).addClass('selected');
                        }
                }else{
                    liSelected = $('.countryInfoField li').eq(0).addClass('selected');
                }
                $("#searchField").val(liSelected.text());
            }else if(e.which === 38){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.prev();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.countryInfoField li').last().addClass('selected');
                        }
                }else{
                    liSelected = $('.countryInfoField li').last().addClass('selected');
                }
                $("#searchField").val(liSelected.text());
            }
        });
         }
         
        function getNamesAJAX()  {
        liSelected=undefined;
        $( ".regionInfoField").unbind( "keydown" );
        $("#regionnames").html("");
                                                    
        $.getJSON("regionListJSON.php?q="+$("#element_1").val()+"&c="+$("#element_6").val(), function(data) {
        for(i = 0; i < data.length; i++) {
        $("#regionnames").append("<li onclick='choose(this,"+'"#element_1",'+'"#regionnames")'+"'"+ "onmouseover='fon(this)' onmouseout='unfon(this)'>"+data[i]+"</li>" );
        }
        });
         if($("#element_1").val()==0){
             $("#regionnames").html("");
        }
    
        $('.regionInfoField').keydown(function(e){
            if(e.which === 40){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.next();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.regionInfoField li').eq(0).addClass('selected');
                        }
                }else{
                    liSelected = $('.regionInfoField li').eq(0).addClass('selected');
                }
                $("#element_1").val(liSelected.text());
            }else if(e.which === 38){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.prev();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.regionInfoField li').last().addClass('selected');
                        }
                }else{
                    liSelected = $('.regionInfoField li').last().addClass('selected');
                }
                $("#element_1").val(liSelected.text());
            }
        });
         }
    
       function getNamesAJAX2()  {
        liSelected=undefined;
        $( ".govFormInfoField").unbind( "keydown" );
        $("#govformnames").html("");
                                                    
        $.getJSON("govFormListJSON.php?q="+$("#element_4").val(), function(data) {
        for(i = 0; i < data.length; i++) {
        $("#govformnames").append("<li onclick='choose(this,"+'"#element_4",'+'"#govformnames")'+"'"+ "onmouseover='fon(this)' onmouseout='unfon(this)'>"+data[i]+"</li>" );
        }
        });
         if($("#element_4").val()==0){
             $("#govformnames").html("");
        }
    
        $('.govFormInfoField').keydown(function(e){
            if(e.which === 40){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.next();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.govFormInfoField li').eq(0).addClass('selected');
                        }
                }else{
                    liSelected = $('.govFormInfoField li').eq(0).addClass('selected');
                }
                $("#element_4").val(liSelected.text());
            }else if(e.which === 38){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.prev();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $('.govFormInfoField li').last().addClass('selected');
                        }
                }else{
                    liSelected = $('.govFormInfoField li').last().addClass('selected');
                }
                $("#element_4").val(liSelected.text());
            }
        });
         }
