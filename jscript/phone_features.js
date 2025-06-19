
function showHelp(toggle){
	var helpName = toggle + 'HelpDiv'; var helpContent = '';

	switch(toggle){
		case 'directoryAssistance':
			helpContent = '<br />Select between Free 411 service, or operator assisted (fee).';
		break;

		case 'callerIDBlocked':
			helpContent = 'Caller ID Blocked Info';
		break;

		case 'doNotDisturb':
			helpContent = 'DND Info';
		break;

		case 'blockPrivateCalls':
			helpContent = 'Block Calls Info';
		break;

		case 'internationalCalls':
			helpContent = 'Int. Calls Info';
		break;

		case 'callForwarding':
			helpContent = 'Call Forwarding Info';
		break;

		case 'failover':
			helpContent = 'Failover Info';
		break;

		case 'failoverDest' :
			helpContent = 'Failover FWD Info';
		break;

		case 'telemarketerBlock':
			helpContent = 'Telemarketer Block Info';
		break;
	}
	
	document.getElementById(helpName).innerHTML = helpContent;

}

function clearHelp(toggle){
	var helpName = toggle + 'HelpDiv';
	document.getElementById(helpName).innerHTML = '';
}

var custom = {init : custom_init};

function custom_init(){
	custom.checkForward = function(type){
		$('#call_forward_alternate').hide();
		$('#call_forward_number_div').hide();

		switch(parseInt(type)){
			case 1:
				$('#call_forward_number_div').show();
			break;

			default:
				$('#call_forward_alternate').show();
			break;
		}
	}

	custom.setForwardBusy = function(type){
		$('#call_forward_busy_enabled').hide();

		switch(parseInt(type)){
			case 3:
				$('#call_forward_busy_enabled').show();
			break;
		}
	}

	custom.setForwardUnavailable = function(type){
		$('#call_forward_unavailable_enabled').hide();

		switch(parseInt(type)){
			case 3:
				$('#call_forward_unavailable_enabled').show();
			break;
		}
	}

	custom.checkFailover = function(type){
		switch(parseInt(type)){
			case 1:
				$('#failover_forward_number_div').show();
			break;

			default:
				$('#failover_forward_number_div').hide();
			break;
		}
	}

	custom.checkForward(0);
	custom.checkFailover(1);
	custom.setForwardBusy(2);
	custom.setForwardUnavailable(1);
}
