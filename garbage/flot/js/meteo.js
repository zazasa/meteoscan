  var meteoconfig = { 
    "daylight": {
      "column" : "DayLightV",
      "options" : {       
                  series: {
                      autoNullGap : 120000,
                      lines: { show: true, steps: false},
                      points: {show: false, radius: 0.1 }
                  },
                  xaxis: {
                      mode: "time",
                      timeformat: "%H:%M",
                  },
                  yaxis: {
                      position: "right",
                  },
      }//end options
    },//end daylight
    "ambientt": {
      "column" : "AmbientT",
      "options" : {       
                  series: {
                      autoNullGap : 120000,
                      lines: { show: true, steps: false},
                      points: {show: false, radius: 0.1 }
                  },
                  xaxis: {
                      mode: "time",
                      timeformat: "%H:%M",
                  },
      }//end options      
    },//end ambientt
    "humidity": {
      "column" : "HumidityPercent",
      "options" : {       
                  series: {
                      autoNullGap : 120000,
                      lines: { show: true, steps: false},
                      points: {show: false, radius: 0.1 }
                  },
                  xaxis: {
                      mode: "time",
                      timeformat: "%H:%M",
                  },
      }//end options      
    },//end humidity
    "wind": {
      "column" : "Wind",
      "options" : {       
                  series: {
                      autoNullGap : 120000,
                      lines: { show: true, steps: false},
                      points: {show: false, radius: 0.1 }
                  },
                  xaxis: {
                      mode: "time",
                      timeformat: "%H:%M",
                  },
      }//end options      
    },//end wind
    "sky": {
      "column" : "RelSkyT",
      "options" : {       
                  series: {
                      autoNullGap : 120000,
                      lines: { show: true, steps: false},
                      points: {show: false, radius: 0.1 }
                  },
                  xaxis: {
                      show: false,
                      mode: "time",
                      timeformat: "%H:%M",
                  },
                  yaxis: {
                      min : -50,
                      max : 20,
                  },
                  
      }//end options      
    },//end sky

  }//end meteoconfig


//SKY sky-ambient temperature, 999.9 saturated hot, -999.9 saturated cold, or -998.0 for wet


	function meteo_dataplot(fieldname,element) {
	
	    var key = meteoconfig[fieldname].column;
	    
	    $.getJSON("http://pc001.fisica.unisi.it/astro/meteo/flot/fetchdata.php?",
	    {
            time_range: "1 day",
            keys: key ,
            format: "json2"
      },
      function(data) {     
//        console.log(data);             
    		$.plot($(element), [data[key]],  meteoconfig[fieldname].options );
      });
  };


