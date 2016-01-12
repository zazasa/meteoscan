function meteo_loading(fieldname){
        charts[fieldname].showLoading("loading ... ");
}

function meteo_loaded(fieldname){
        charts[fieldname].hideLoading();
}


function meteo_updatePlot(fieldname,range) {
    $.each(charts[fieldname].series,
    
        function(index,data){data.setData(null)});
   
    var config = $.extend(true,{}, defaultOptions, meteoConfig[fieldname]);  //copy into new object for dont overwrite previous config chart
    $.getJSON("php/fetchdata.php?",
        {
        time_range: range,
        keys: config.keys ,
        format: "json"
        },
        function(dataset) {
            i=0;
            $.each(dataset, 
                    function(index,value){
                        charts[fieldname].series[i].setData(value.data);
                        i++;
                    });
        })

}



function meteo_dataplot(fieldname,element,range) {
    meteo_theme();
    
    var config = $.extend(true,{}, defaultOptions, meteoConfig[fieldname]);  //copy into new object for dont overwrite previous config chart
        config.chart.renderTo = element; 
    $.getJSON("php/fetchdata.php?",
        {
        time_range: range,
        keys: config.keys ,
        format: "json"
        },
        function(dataset) {
            $.each(config.series, 
                    function(index,serie){
                        serie.data = dataset[serie.column].data;
                    });
            

//        config.series[0].data= dataset[config.series[0].column].data ;
                               
//        console.log(config);
//        console.log(meteoConfig[fieldname]);
//        console.log(defaultOptions);
//return true;
      
        com = new Highcharts.Chart(config);
        charts[fieldname] = com;
//        console.log(charts);
/*
        "chart_"+element = new Highcharts.Chart(config);        
        console.log("chart_"+element);
*/        
      });//end function(dataset) && getJSON


}//end meteo_Dataplot


function meteo_theme(){
    // Apply the theme
    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
}//end meteo_theme









