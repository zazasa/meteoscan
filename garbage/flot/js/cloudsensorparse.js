/*
METEO_FILENAME

HM_FLAG

TYPE_FLAG

T_VALUES_LIST

K_VALUES_LIST

W_VALUES_LIST

C_VALUES_LIST

DATASET_LIST

cloudsensor_log_extract.txt
*/

	function meteo_get_value(fieldname) {
		

	};


	function meteo_get_dataplot(fieldname) {

		var dataplot = new Array();
		dataset = meteo_get_dataset(fieldname);

		for (i in dataset) {
			dataplot.push( [ i , dataset[i] ] );	
//			document.write("<br />" + i);
		};
		
		return dataplot;
	};


	function meteo_get_dataset(fieldname) {
		
		col_index = DATASET_LIST.indexOf(fieldname) ;
		if (col_index == -1 ){ return -1 } //error handling
		
		var cs_dataset = new Array();
		var catchemall = new Boolean(false);
	
		col_index = col_index + TYPE_FLAG + 1 ;
		meteo_data_rows = meteo_open_file(METEO_FILENAME).split("\n");
		
		for (index in meteo_data_rows) {
			row = meteo_data_rows[index].split(/\s* /);

			switch (row[TYPE_FLAG]) {		
				case "D":
					if (catchemall && row[col_index] != fieldname) { catchemall = false };
					if (!catchemall && row[col_index] == fieldname) {catchemall = true };
				break;

				case "~D": 
					if (catchemall) { meteo_dataset.push(row[col_index]) };
				break;
			};
		};
		
		return meteo_dataset;
	};



	function meteo_open_file(filename) {
		raw_data = $.ajax({
				url:filename,
				async: false,
				dataType: "text"
            			}).responseText;
		return raw_data;
	};





	function meteo_test() {

    	meteo_raw_data = meteo_open_file(METEO_FILENAME);

    	meteo_data_rows = meteo_raw_data.split("\n");
    	row = meteo_data_rows[9].split(/\s* /);
    	document.write(meteo_data_rows[9] + "<br />");
    	$.each(
    		row,
    		function (index,value) {
    			document.write(value + "<br />");
    	});
		
	};

