// WARNING: WORKS ONLY FOR SINGLE DATASERIE!!!
// DONT WORK WITH STEP: TRUE OPTION


(function ($) {
    var options = {
        series: { autoNullGap: 0 } 
    };
    
    function init(plot) {
        function autoNullData(plot, s, datapoints) {
            if (!s.autoNullGap)
                return;
            var ps = datapoints.pointsize;
            var newpoints = datapoints.points;
            var nullindex = new Array();
            for (i = ps; i < newpoints.length; i += ps) {
                if ((newpoints[i] - newpoints[i-ps]) > s.autoNullGap) nullindex.push(i);
            }
           var offset = 0;
           $.each(nullindex, function(index,value){
                newpoints.splice(offset+value,0,null);
                newpoints.splice(offset+value,0,null);
                offset = offset + 2;
            });
            datapoints.points = newpoints;
        }
        plot.hooks.processDatapoints.push(autoNullData);
        
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'autoNullGap',
        version: '1.0'
    });
})(jQuery);
