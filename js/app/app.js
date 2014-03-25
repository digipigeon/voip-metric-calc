var startApp = function() {
/*
	channels = ((acd + pdd + ringtime) * cps * (asr / 100)) + ((100 - asr) * pdd)
*/	
	
	//[name=live]
	$('input').change(function(){
		var selected = $('input[type=radio]:checked').val();
		console.log($(this).attr('id'));
		if (selected == $(this).attr('id')) return;
		
		var acd = parseInt($('#acd').val());
		var asr = $('#asr').val() / 100;
		var channels = parseInt($('#channels').val());
		var cps = parseInt($('#cps').val());
		var pdd = parseInt($('#pdd').val());
		var ringtime = parseInt($('#ringtime').val());

		switch(selected){
			case 'acd':
				var val = ((channels - ((1 - asr) * pdd)) / cps / asr) - pdd - ringtime;			
				break;
			case 'asr':
				var val = ((channels - pdd) / ((cps * (acd + pdd + ringtime)) - pdd)) * 100;
				break;
			case 'channels':
				var val = ((acd + pdd + ringtime) * cps * asr) + ((1 - asr) * pdd);			
				break;
			case 'cps':
				var val = (channels - ((1 - asr) * pdd)) / asr / (acd + pdd + ringtime);			
				break;
			case 'pdd':
				var val = (channels - (asr * cps * (acd + ringtime))) / ((asr * (cps-1)) + 1);
				break;
			case 'ringtime':
				var val = ((channels - ((1 - asr) * pdd)) / cps / asr) - acd - pdd;			
				break;
		}
		$('#' + selected).val(parseInt(val)).slider('refresh').prop('disabled', true).slider('disable');
//		disabled="disabled"
//		console.log($('input[type=radio]:checked').val());
	}).change();
	$('input[type=radio]').click(function(){
//		$("input[data-type=range]").removeAttr('disabled').slider('refresh');
		$('input[data-type=range]').prop('disabled', false).slider('enable');
	});	
	$('input[type=radio]#acd').click();
	
	
//	$('input[data-type=range]').on( "slidestop", function( event, ui ) {
//		alert('slidestop');
//		$('input[data-type=range]').slider('refresh');
//	});

//	$('input[name=live]').click(function(){
//		alert(this.value);	
//	});

};