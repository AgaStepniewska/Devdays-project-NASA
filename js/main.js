
$(document).ready(function(){
	var locations = [],
		items = [],
		schedule = [],
		openDates = [],
		series = [],
		schedules = [],
		links = [],
		locationvalue = ".locationId-all";
	console.log(locationvalue);
	var seriesvalue = ".series-all",
		schedulevalue=".All-Schedules",
		fullfilter = ".locationId-all .series-all .All-Schedules";
	$.getJSON("https://ththnasa1701.thirtythreestaging.co.uk/", function(data) {
		//extract data from the html document to create ids and classes for each job, storing in the 'Items' array
		$.each(data, function(key, val){
			items.push("<li id='jobid-" + val.job_id + "' class='locationId-" + val.locationId + " locationId-all " + val.series.replace(/\s/g, '')  + " series-all " + "All-Schedules " + val.schedule + "'><a href='" + val.usaJobsApplyOnlineUrl + "'>" + val.title + "</a></li>");
			locations.push(val.location);
			schedule.push(val.schedule);
			openDates.push(val.openDate);
			series.push(val.series);
			schedules.push(val.schedule);
			links.push(val.usaJobsApplyOnlineUrl);
		});
		//console.log(openDates);
		console.log(series);
		console.log(schedules);
		//console.log(links);
		console.log(items);
		//console.log("Hello");
	// Create the list of jobs on the html document
	$( "<ul/>", {
    	"class": "my-new-list",
    	html: items.join( "" )
  	}).appendTo( "#joblist" );
	
	console.log(locations);
	console.log(schedule);
});
	// Select a location to filter jobs
	$(".locationselect").on('change', function(){
			// for (var i = 0; i < items.length; i++){
			// 	if (val.location != $("#locationselect option:selected")) {
			// 		items.
			// 	}
			// }
			locationvalue = this.value;
			
			console.log(locationvalue);
			console.log(seriesvalue);
			console.log(schedulevalue);
			
			$('li').hide();
			
			fullfilter = locationvalue + seriesvalue + schedulevalue;
			
			console.log(fullfilter);
			
			$(fullfilter).show();

			//console.log($('li." ' + value + '"'  ));
			//var classname = this.value
			//$(this.value).show();			
			//$("#joblist").filter(this.value);

	});
	// Select a job type to filter jobs
	$(".seriesselect").on('change', function(){
		seriesvalue = this.value;
		$('li').hide();
		
		fullfilter = locationvalue + seriesvalue + schedulevalue;
		
		$(fullfilter).show();
		
		console.log(seriesvalue);
		console.log(locationvalue);
		console.log(schedulevalue);

	});
	//Select a schedule type to filter jobs
	$(".scheduleselect").on('change', function(){
		schedulevalue = this.value;
		
		$('li').hide();
		
		fullfilter = locationvalue + seriesvalue + schedulevalue;
		
		$(fullfilter).show();
		
		console.log(seriesvalue);
		console.log(locationvalue);
		console.log(schedulevalue);
		console.log(fullfilter);
	});
	});

//----------------------------------------------------------------------------------------------------------------------------------------//
// var serieslist = ["General Physical Science", "Aerospace Engineering", "Aerospace Engineering", "General Engineering", "Human Resources Management", "Miscellaneous Administration And Program", "Materials Engineering", "Accounting", "Information Technology Management", "Aerospace Engineering", "Miscellaneous Administration And Program", "Contracting", "General Engineering", "Computer Engineering", "Miscellaneous Administration And Program", "Contracting", "Aerospace Engineering", "Miscellaneous Administration And Program", "General Engineering", "Psychology", "Electronics Engineering", "Aerospace Engineering", "Aerospace Engineering", "Environmental Engineering", "General Engineering", "Aerospace Engineering", "Equal Employment Opportunity", "Financial Administration And Program", "Aerospace Engineering", "General Engineering", "Engineering Technical", "Electronics Engineering", "Contracting", "Aerospace Engineering", "Miscellaneous Administration And Program", "Aerospace Engineering", "Information Technology Management", "General Engineering", "Contracting", "Miscellaneous Clerk And Assistant", "Electronics Engineering", "Aerospace Engineering", "General Engineering", "Miscellaneous Administration And Program", "Aerospace Engineering", "Aerospace Engineering", "Miscellaneous Clerk And Assistant", "Aerospace Engineering", "Electronics Engineering", "Aerospace Engineering", "General Engineering", "General Engineering", "General Engineering", "General Engineering", "Equal Employment Opportunity", "Aerospace Engineering", "General Engineering", "Aerospace Engineering", "General Engineering", "Aerospace Engineering", "Aerospace Engineering", "Environmental Engineering", "General Engineering", "Miscellaneous Administration And Program", "Aerospace Engineering", "General Engineering", "General Engineering", "Aerospace Engineering", "Miscellaneous Administration And Program", "Aerospace Engineering", "Aerospace Engineering", "Aerospace Engineering", "Engineering Technical", "Information Technology Management", "Information Technology Management", "Medical Officer", "Information Technology Management", "Aerospace Engineering", "General Physical Science", "General Engineering", "General Engineering", "General Engineering", "General Physical Science", "Engineering And Architecture Student Trainee", "Administration And Office Support Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Medical And Health Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee", "Engineering And Architecture Student Trainee"];
// for (var i = 0; i < serieslist.length; i++) {
// 	for (var j = 0; j < serieslist.length; j++) {
// 		if (serieslist[i] === serieslist[j]) {
// 			serieslist.splice(j, 1);
// 		console.log('match');
// 		}
// 	}

// }
// console.log(serieslist);
// var seriesdata = []
// for (var i = 0; i < serieslist.length; i++) {
// 	seriesdata.push("<option value='." + serieslist[i] + "'>" + serieslist[i] + "</option>");
// }
// console.log(seriesdata);