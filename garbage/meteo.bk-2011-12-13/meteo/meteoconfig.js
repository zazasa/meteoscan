/**
 * Dark blue theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
   colors: ["#DDDF0D", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", 
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: [0, 0, 250, 500],
         stops: [
            [0, 'rgb(48, 48, 96)'],
            [1, 'rgb(0, 0, 0)']
         ]
      },
      borderColor: '#000000',
      borderWidth: 2,
      className: 'dark-container',
      plotBackgroundColor: 'rgba(255, 255, 255, .1)',
      plotBorderColor: '#CCCCCC',
      plotBorderWidth: 1
   },
   title: {      
      style: {
         color: '#FFF',
         font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
      },
      x: 35,
      y: 20,
      floating: true,
      align: 'left',

   },
   subtitle: {
      style: { 
         color: '#666666',
         font: 'bold 9px "Trebuchet MS", Verdana, sans-serif'
      }
   },
   xAxis: {
      gridLineColor: '#333333',
      gridLineWidth: 1,
      labels: {
         style: {
            color: '#FFF',
            fontSize: '9px'
         }
      },
      lineColor: '#A0A0A0',
      tickColor: '#A0A0A0',
      title: {
         style: {
            color: '#CCC',
            fontWeight: 'bold',
            fontSize: '9px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'

         }            
      }
   },
   yAxis: {
      gridLineColor: '#333333',
      labels: {
         style: {
            color: '#FFF',
            fontSize: '9px'
         }
      },
      lineColor: '#A0A0A0',
      minorTickInterval: null,
      tickColor: '#A0A0A0',
      tickWidth: 1,
      title: {
         style: {
            color: '#CCC',
            fontWeight: 'bold',
            fontSize: '9px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
         }            
      }
   },
   legend: {
      itemStyle: {
         font: '3pt Trebuchet MS, Verdana, sans-serif',
         color: '#A0A0A0'
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      style: {
         color: '#F0F0F0'
      },
      formatter: function(){
                            var date = new Date(this.x);  
                            date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
                            return date.toLocaleTimeString() + '<br />' + '<span style="color:'+this.series.color+';">' 
                            + this.series.name + '</span>' + ': ' + '<b>' + this.y + '</b>';
                            }
   },
   toolbar: {
      itemStyle: { 
         color: 'silver'
      }
   },
   plotOptions: {
      line: {
         dataLabels: {
            color: '#CCC'
         },
         marker: {
            lineColor: '#333'
         }
      },
      spline: {
         marker: {
            lineColor: '#333'
         }
      },
      scatter: {
         marker: {
            lineColor: '#333'
         }
      },
      candlestick: {
         lineColor: 'white'
      }
   },      
   legend: {
      itemStyle: {
         color: '#FFF',
         fontWeight: 'small',
      },
      itemHoverStyle: {
         color: '#FFF',
         fontWeight: 'bold',
      },
      itemHiddenStyle: {
         color: '#A0A0A0'
      }
   },
   credits: {
        enabled: false,
      style: {
         color: '#666',
         fontSize: '9px'
      }
   },
   labels: {
      style: {
         color: '#CCC'
      }
   },
   
   navigation: {
      buttonOptions: {
         backgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#606060'],
               [0.6, '#333333']
            ]
         },
         borderColor: '#000000',
         symbolStroke: '#C0C0C0',
         hoverSymbolStroke: '#FFFFFF'
      }
   },
   
   exporting: {
      buttons: {
         exportButton: {
            symbolFill: '#55BE3B'
         },
         printButton: {
            symbolFill: '#7797BE'
         }
      }
   },
   
   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
         stroke: '#000000',
         style: {
            color: '#CCC',
            fontWeight: 'bold'
         },
         states: {
            hover: {
               fill: {
                  linearGradient: [0, 0, 0, 20],
                  stops: [
                     [0.4, '#BBB'],
                     [0.6, '#888']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: {
                  linearGradient: [0, 0, 0, 20],
                  stops: [
                     [0.1, '#000'],
                     [0.3, '#333']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'yellow'
               }
            }
         }               
      },
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },
   
   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(16, 16, 16, 0.5)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      }
   },
   
   scrollbar: {
      barBackgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      barBorderColor: '#CCC',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: {
            linearGradient: [0, 0, 0, 20],
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      buttonBorderColor: '#CCC',
      rifleColor: '#FFF',
      trackBackgroundColor: {
         linearGradient: [0, 0, 0, 10],
         stops: [
            [0, '#000'],
            [1, '#333']
         ]
      },
      trackBorderColor: '#666'
   },
   
   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   legendBackgroundColorSolid: 'rgb(35, 35, 70)',
   dataLabelsColor: '#444',
   textColor: '#C0C0C0',
   maskColor: 'rgba(255,255,255,0.3)'
};


//SKY sky-ambient temperature, 999.9 saturated hot, -999.9 saturated cold, or -998.0 for wet

var meteoConfig = { 
    daylight: {
            keys:"DayLightV",
            legend:{enabled:false,},
            title:{text:null,},
            series:[{column:"DayLightV", name: "Day Light",color:"#EFF315"}],

    },//end daylight
    humidity: {

            keys:"HumidityPercent",
            legend:{enabled:false,},
            title:{text:null,},
            series:[{column:"HumidityPercent", name: "Humidity",color:"#0F0BF0"}],

    },//end daylight
    wind: {

            keys:"Wind",
            legend:{enabled:false,},
            title:{text:null,},
            series:[{column:"Wind", name: "Wind",color:"#A9CBCF"}],

    },//end wind
    
    ambient: {
            keys:"AmbientT",
            legend:{enabled:false,},
            title:{text:null,},
            series:[{column:"AmbientT", name: "Ambient",color:"#EC1919"}],
    },//end ambient
    relsky: {
            keys:"RelSkyT",
            legend:{enabled:false,},
            title:{text:null,},
            series:[{column:"RelSkyT", name: "Sky-Amb",color:"#D77733", visible:true},
            ],
    },//end temperature
    temperature: {
//            keys:"AmbientT,SensorT,RelSkyT,DewPointT",
            keys:"AmbientT,SensorT,DewPointT",
            legend:{enabled:true,},
            title:{text:null,},
/*            yAxis:{
                min: -50,
//                tickPixelInterval: 40,
/*                plotBands: [{ // cloudy
                                from: -25,
                                to: -10,
                                color: "#C2CCCD",
                                label: {
                                   text: 'Cloudy',
//                                   style: { color: Highcharts.theme.textColor || '#606060'}
                                }
                            },
                            { // very cloudy
                                from: -10,
                                to: 5,
                                color:"#868C8D",
                                label: {
                                   text: 'Very Cloudy',
//                                   style: { color: Highcharts.theme.textColor || '#606060'}
                                }
                            },
                 ],//end PlotBands
            },
*/            
            series:[{column:"AmbientT", name: "Ambient",color:"#EC1919"},
                    {column:"SensorT", name: "Sensor",color:"#27BA3B", visible:false},
//                    {column:"RelSkyT", name: "Sky-Amb",color:"#D77733", visible:true},
                    {column:"DewPointT", name: "DewPoint",color:"#1F2BD9", visible:false},
            ],
    },//end temperature
}//end meteoOptions




var defaultOptions = {
    chart: {type: 'spline', zoomType: 'xy',},   
    plotOptions: {  
        series: { 
            step:false,
                marker: { 
                    enabled: false,
                    radius: 1,
                    states: { hover: { enabled: true, } },
                },//end marker
        },
    },//end plot options
    xAxis: {
        type: 'datetime',
//        tickPixelInterval: 70,
        maxZoom: 3600000,
    },
    yAxis: {
        title:{text: null, rotation :0, margin: 10},
//        tickPixelInterval: 30,
    },
    title:{text: "noTitle",},
    legend:{enabled:true,},
    tooltip: {
        crosshairs: [true, false]
    },
};//end defaultOptions

charts = new Array();

