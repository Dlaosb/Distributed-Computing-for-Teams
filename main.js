// Global variabls created 

$(document).ready(function() {

 	$('#start').on('click', function(e) {
 		let lengthNum = parseInt($('#length').val());
 		let hash = $('#hash').val();
 		console.log("lengthNum", lengthNum);

 		if(lengthNum > 0 && hash.length === 32) {
			const message = {
				type: 'start',
				length: lengthNum,
				hash: hash
			}

			console.log("message", message.length, lengthNum);	
			let worker = new Worker('worker.js');
			worker.postMessage(message);
			//var worker2 = new Worker('worker.js');
 		} else {
 			alert("Incorrect Input");
 		}
 	});






})

