function meteo_main(){

    $('#meteo').addClass("meteo-state-startup");    

    var strOut=         '<div class="meteoPortlet"> '
    strOut= strOut +    '<div class="meteoPortlet-header">Controls</div>'
    strOut= strOut +    '<div class="meteoPortlet-content meteoToolbar ui-corner-all">'
    strOut= strOut +    'Last:'
    strOut= strOut +    '<button class="meteoButton ui-state-default ui-corner-left"   value="1">1hour</button>'
    strOut= strOut +    '<button class="meteoButton ui-state-default"                  value="6" >6hours</button>'
    strOut= strOut +    '<button class="meteoButton ui-state-default"                  value="12">12hours</button>'
    strOut= strOut +    '<button class="meteoButton ui-state-default meteoFirst"       value="24" >1day</button>'
    strOut= strOut +    '<button class="meteoButton ui-state-default"                  value="48" >2days</button>'
    strOut= strOut +    '<button class="meteoButton ui-state-default ui-corner-right"  value="168" >1week</button>'
    strOut= strOut +    '</div>'
    strOut= strOut +    '<div class="meteoPortlet-content ui-corner-all">'
    strOut= strOut +    '<p> From: <input type="text" class="datepicker" id="start_date"> to: <input type="text" class="datepicker" id="end_date">'
    strOut= strOut +    '<button class="meteoUpdate ui-corner-all">Update</button>'
    strOut= strOut +    '</p>'
    strOut= strOut +    '</div>'

    $('#meteo').append(strOut);

    

    $.each(meteoConfig,function(index,value){
        strOut=             '<div class="meteoPortlet">'
        strOut= strOut +    '<div class="meteoPortlet-header ">'+value.header+'</div>';
        strOut= strOut +    '<div class="meteoPlot meteoPortlet-content" id="'+value.id+'" style="width:'+value.width+'; height:'+value.height+';">';     
        strOut= strOut +    '</div>';
        $('#meteo').append(strOut);            
    });
     
    meteo_template();

    meteo_sortable();
    
    meteo_controls();

    meteo_dataplot();
    
    $(".meteoFirst").click();
    
    $('#meteo').removeClass("meteo-state-startup");    
    
};


function meteo_controls(){
    
    $(".datepicker").datetimepicker({
        hourGrid:4,
        minuteGrid:15,
        dateFormat: "dd/mm/yy",    
        onClose: function(date,inst) {
         if (date != inst.lastVal) {$(".meteoToolbar").find(".meteoButton.ui-state-active").removeClass("ui-state-active") } }
    });


   
   $(".meteoUpdate").button().click(function(){meteo_update()});
   
   
    $( ".meteoPortlet-header .ui-icon" ).click(function() {
    		$( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
	    	$( this ).parents( ".meteoPortlet:first" ).find( ".meteoPortlet-content" ).toggle("blind");
		});


    $(".meteoButton:not(.ui-state-disabled)")
		    .hover(
			    function(){ 
				    $(this).addClass("ui-state-hover"); 
			    },
			    function(){ 
				    $(this).removeClass("ui-state-hover"); 
			    }
		    )
		    .click(function(){
			    if( !($(this).is('.ui-state-active')) ){ 
						$(this).parents('.meteoToolbar:first')
										.find(".meteoButton.ui-state-active").removeClass("ui-state-active");
			        $(this).addClass("ui-state-active");
				};		        
						
					var date = new Date();
//					console.log(date.toString());
//					console.log(date.getTimezoneOffset());
					
                    date.setMinutes(date.getMinutes()+date.getTimezoneOffset());
					
//					console.log(date.toString());
					$("#end_date").datetimepicker('setDate',date);
//					console.log(date.toString());
					date.setHours(date.getHours() - $(this).attr("value"));
					$("#start_date").datetimepicker('setDate',date);
//					console.log(date.toString());
					
					meteo_update();
/*					
					start_date = date.getUTCFullYear() +"-"+ (date.getUTCMonth()+1) +"-"+ date.getUTCDate();
					start_date = start_date +" "+ date.getUTCHours() +":"+ date.getUTCMinutes();
					
					$("#start_date").val(start_date);					


*/	      
             
            });
};
            



function meteo_template(){

    Highcharts.setOptions(Highcharts.theme); //set highchart theme



    $(".meteoPortlet").addClass( "ui-widget ui-widget-content ui-corner-all" )
        .find( ".meteoPortlet-header" )
            .addClass( "ui-widget-header ui-corner-all" )
			.prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
            .end()
			.find( ".portlet-content" );

    

}

function meteo_sortable() {

    $(".meteoPortlet-content").addClass("undraggable");
    $(".ui-icon").addClass("undraggable");
    $("#meteo").sortable({cancel: ".undraggable"});


}



function meteo_update() {

    if( $('#meteo').hasClass('meteo-state-startup')) {return};

    var date = $("#start_date").datetimepicker('getDate');
    start_date = date.getFullYear() +"-"+ (date.getMonth()+1) +"-"+ date.getDate();
	start_date = start_date +" "+ date.getHours() +":"+ date.getMinutes();
//    console.log(start_date);

	var date = $("#end_date").datetimepicker('getDate');
    end_date = date.getFullYear() +"-"+ (date.getMonth()+1) +"-"+ date.getDate();
	end_date = end_date +" "+ date.getHours() +":"+ date.getMinutes();
//    console.log(end_date);


    $.each(meteoConfig,function(index,value){
        $.each(charts[index].series, 
            function(index,data){data.setData(null)});
        var config = $.extend(true,{}, defaultOptions, value);  //copy into new object for dont overwrite previous config chart
//        console.log(config.keys);
        $.getJSON("php/fetchdata.php?",
            {
						start_date: start_date,
						end_date:   end_date,
            keys: config.keys ,
            format: "json"
            },
            function(dataset) {
                i=0;
                $.each(dataset, 
                        function(index2,value2){
                            charts[index].series[i].setData(value2.data);
                            i++;
                        });
            })
    });
}




function meteo_dataplot(fieldname) {

    $.each(meteoConfig,function(index,value){
        //copy into new object for dont overwrite previous config chart
        var config = $.extend(true,{}, defaultOptions, value);  
            config.chart.renderTo = value.id; 
        $.getJSON("php/fetchdata.php?",
            {
            keys: config.keys ,
            format: "json"
            },
            function(dataset) {
                $.each(config.series, 
                        function(index,serie){
                            serie.data = dataset[serie.field].data;
                        });                  
            charts[index] = new Highcharts.Chart(config);
          });//end function(dataset) && getJSON
    });//end each meteoconfig
}//end meteo_Dataplot









