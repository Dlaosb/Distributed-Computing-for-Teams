// Global variabls created 

$(document).ready(function() {

 	$('#start').on('click', function(e) {
 		let lengthNum = parseInt($('#length').val());
 		let hash = $('#hash').val();
 		if(lengthNum > 0 && hash.length === 32) {
			const message = {
				type: 'start',
				length: lengthNum,
				hash: hash
			}

			let worker = new Worker('worker.js');
			worker.postMessage(message);
			let worker2 = new Worker('worker.js');
			worker2.postMessage(message);
			
 		} else {
 			alert("Incorrect Input");
 		}
 	});






})

