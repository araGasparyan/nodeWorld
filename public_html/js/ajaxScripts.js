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
       
       
    function showSuggestions(formClass, suggestionsID, inputFiledID, JsonPath, JsonParams){
        liSelected=undefined;
        $(formClass).unbind( "keydown" );
        $(suggestionsID).html("");
        
        if(JsonParams!=""){
           JsonParams = JsonParams.split(',');
           var tmp="";
        for(var i = 0; i<JsonParams.length; i+=2){
            tmp+='&'+JsonParams[i]+'='+$(JsonParams[i+1]).val();
        }
        JsonParams = tmp;
        };
        $.get(JsonPath+$(inputFiledID).val()+JsonParams, function(data) {
        data = data.split(';');
        console.log(data);
        for(var i in data) {
        $(suggestionsID).append("<li onclick='choose(this,"+'"'+inputFiledID+'","'+suggestionsID+'"'+')'+"'"+ "onmouseover='fon(this)' onmouseout='unfon(this)'>"+data[i]+"</li>" );
        }
        });
        if($(inputFiledID).val()==0){
             $(suggestionsID).html("");
        }
        $(formClass).keydown(function(e){
            if(e.which === 40){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.next();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $(formClass + ' li').eq(0).addClass('selected');
                        }
                }else{
                    liSelected = $(formClass + ' li').eq(0).addClass('selected');
                }
                $(inputFiledID).val(liSelected.text());
            }else if(e.which === 38){
                if(liSelected){
                    liSelected.removeClass('selected');
                    next = liSelected.prev();
                        if(next.length > 0){
                            liSelected = next.addClass('selected');
                        }else{
                            liSelected = $(formClass + ' li').last().addClass('selected');
                        }
                }else{
                    liSelected = $(formClass + ' li').last().addClass('selected');
                }
                $(inputFiledID).val(liSelected.text());
            }
        });
        }
       
       
         
        
       