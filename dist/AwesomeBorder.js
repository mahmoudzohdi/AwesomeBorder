$(document).ready(function(){

$("body").css("overflow-x" , "hidden");
    ////////////////////////
    //////// VARIABLES
    ////////////////////////
    var element = $(".AwesomeBorder"),
    thisElement,
    elementWidth,
    borderSize,
    borderHeight,
    borderColor,
    borderSpacing,
    borderParentWidth,
    borderCount,
    i,
    borderParent,
    borderSymbol,
    borderPosition;

    
   
    
    /////////////////////////////////
    //////// MAIN FUNCTION 
    /////////////////////////////////
    function AwesomeBorder(){
        
        element.each(function(index){
            thisElement = $(this);
            thisElement.css("position" , "relative")
            if(thisElement.find(".ab-parent").length > 0){
                thisElement.find(".ab-parent").remove();
            }
            if(thisElement.find('.ab-parent').length == 0){
                /////////////////////////
                /// GET ELEMENT WIDTH 
                /////////////////////////
                elementWidth = thisElement.width();

                ///////////////////////////////////////////////////////
                /// append our Div who will be parent of our symbols 
                ///////////////////////////////////////////////////////
                thisElement.append("<div class='ab-parent'></div>");

                /////////////////////////////////////////////////
                /// GET SYMBOL SIZE INTO OUR VARIABLE
                ////////////////////////////////////////////////
                borderSize = thisElement.attr("data-border-size");
                    // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                if (typeof borderSize !== typeof undefined && borderSize !== false) {
                    // DO NOTHING :D 
                }else{
                    borderSize = 30;
                }


                /////////////////////////////////////////////////
                /// GET SYMBOL Height (if oblong symbol) INTO OUR VARIABLE
                ////////////////////////////////////////////////
                borderHeight = thisElement.attr("data-border-height");
                    // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                if (typeof borderHeight !== typeof undefined && borderHeight !== false) {
                    // DO NOTHING :D 
                }else{
                    borderHeight = borderSize * 1.5;
                }
                /////////////////////////////////////////////////
                /// GET SYMBOL COLOR INTO OUR VARIABLE
                ////////////////////////////////////////////////
                borderColor = thisElement.attr("data-border-color");
                    // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                if (typeof borderColor !== typeof undefined && borderColor !== false) {
                    // DO NOTHING :D 
                }else{
                    borderColor = "#E84C4C";
                }
                /////////////////////////////////////////////////////
                ////// GET SYMBOL SPACING INTO OUR VARIABLE
                ////////////////////////////////////////////////////
                borderSpacing = thisElement.attr("data-border-spacing");
                if (typeof borderSpacing !== typeof undefined && borderSpacing !== false) {
                    // DO NOTHING :D 
                }else{
                    borderSpacing = 10;
                }

                /////////////////////////////////////////////////
                /// GET SYMBOL PARENT WIDTH 
                ////////////////////////////////////////////////
                borderParentWidth = parseInt( elementWidth * (120 / 100) );
                /////////////////////////////////////////////////
                /// GET How many symbols we will append
                ////////////////////////////////////////////////
                borderCount = parseInt(borderParentWidth/borderSize);  

                /////////////////////////////////////////////////
                /// GET SYMBOL POSTION INTO OUR VARIABLE
                ////////////////////////////////////////////////
                borderPosition = thisElement.attr("data-border-position");
                // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                if (typeof borderPosition !== typeof undefined && borderPosition !== false) {
                    // DO NOTHING :D 
                }else{
                    borderPosition = "top";
                }

                /////////////////////////////////////////////////
                /// CATCH our borderParent :D 
                ////////////////////////////////////////////////
                borderParent = thisElement.find("div.ab-parent");
                /////////////////////////////////////////////////
                /// Append our symbols to our borderParent
                ////////////////////////////////////////////////
                for(i=0 ; i < borderCount ; i++){
                    borderParent.append("<span class='ab-symbol'></span>");
                }
                  
                /////////////////////////////////////////////////
                /// CATCH our borderSymbol :D 
                ////////////////////////////////////////////////
                borderSymbol = thisElement.find("span.ab-symbol");
                

                ////////////////////////////////////////////////////////////////////////////////////////
                /// CHECK if borderPosition VALUE is TOP or BOTTOM to handel our borderParent POSITION
                ////////////////////////////////////////////////////////////////////////////////////////
                if(borderPosition == "top"){
                    borderParent.css({
                        "width" : borderParentWidth + "px",
                        "height" : "auto",
                        "top" :  -(borderSize / 2) + "px",
                    });
                    if( thisElement.hasClass("ab-oblong")){
                        borderParent.css({
                            "top" :  -(borderHeight / 2) + "px",
                        });
                    }
                }else if(borderPosition == "bottom"){
                    borderParent.css({
                        "width" : borderParentWidth + "px",
                        "height" : "auto",
                        "bottom" :  -(borderSize / 2) + "px",
                    });
                    if( thisElement.hasClass("ab-oblong")){
                        borderParent.css({
                            "bottom" :  -(borderHeight / 2) + "px",
                        });
                    }
                }
                
                ////////////////////////////////////////////////////////////////////////////////////////
                /// CHECK what symbols we will append and HANDEL it 
                ////////////////////////////////////////////////////////////////////////////////////////
                

                if( thisElement.hasClass("ab-circle")){////////////// IF CIRCLE SYMBOL 

                    borderSymbol.addClass("ab-circle-border");
                    
                    borderSymbol.css({
                        "width" : borderSize + "px",
                        "height" : borderSize + "px",
                        "background-color" : borderColor,
                    });

                }else if( thisElement.hasClass("ab-triangle")){////////////// IF TRIANGLE SYMBOL 

                    borderSymbol.addClass("ab-triangle-border");

                    

                    borderSymbol.css({
                        "border-width" : borderSize/2 + "px",
                        "border-color" : borderColor + " transparent" ,
                        "border-style" : "solid",
                    });
                    if(borderPosition == "top"){
                        borderSymbol.css("border-top" , "none");
                    }else if(borderPosition == "bottom"){
                        borderSymbol.css("border-bottom" , "none");
                    }

                }else if( thisElement.hasClass("ab-oblong")){////////////// IF OBLONG SYMBOL 

                    borderSymbol.addClass("ab-oblong-border");

                    borderSymbol.css({
                        "width" : borderSize - borderSpacing + "px",
                        "height" : borderHeight + "px",
                        "background-color" : borderColor,
                        "margin-right" : borderSpacing + "px",
                    });

                }
                    
            }
        });
        
    }
    
    AwesomeBorder();
    $(window).resize(function(){
        AwesomeBorder();
    });
});

