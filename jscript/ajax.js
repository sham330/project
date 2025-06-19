function QueryAjax(element, url, arguments, loading_message, error_message, function_onload)
{
    if(typeof arguments == 'string'){
        arguments = eval('(' + arguments + ')');
    }

    var request = new DataRequestor();

    if(error_message == null){
        error_message = 'There was an internal error, please try again later.';
    }

    if(arguments != null){
        for(var i in arguments){
            request.addArg(_GET, i, arguments[i]);
        }
    }

    if(function_onload != null){
        request.onload = function(data, obj){
            eval(function_onload);
        }
    }

    request.setObjToReplace(element);

    request.onfail = function(status){
        xInnerHtml(element, error_message);
    }
    //alert(url);
    if(!request.getURL(url)) {
        alert("there was a problem with the request, please try again");
    } else {
        //alert('just a moment... please hold');
    }
}

function ReceiveAjaxCallback(results, defaults, blocks){
	RecieveAjaxCallback(results, defaults, blocks);
}

function RecieveAjaxCallback(results, defaults, blocks)
{
    //alert("we're recieving something");
    for(var i in results){
        //alert(i);
        var form_field = xGetElementById(i);
        var idx = 1, form_selected_index = 0, default_match = false;
        form_field.options.length = 0;

        if(isset(custom[i])){
            // .. some code to determin defaults.
            default_match = custom[i]['defaults'];
        } else if(isset(defaults[i])){
            default_match = defaults[i];
        }

        form_field.options[0] = new Option('', 0);

        for(j in results[i]){
            form_field.options[idx] = new Option(results[i][j], j);

            //alert('i: ' + i + ', j: ' + j);
            if(default_match != false && j == default_match){
                form_selected_index = idx;
            }

            idx ++;
        }

        form_field.selectedIndex = form_selected_index;

        for (var i in blocks)
        {
            var div_block = xGetElementById(i);
            if(div_block){
                xInnerHtml(div_block, blocks[i]);
            }
        }
    }
}

function AjaxTimeout(element_id) {
    phone_number_ele = xGetElementById(element_id);
    if (phone_number_ele.options.length == 0 || phone_number_ele.options[0].value == '') {
        phone_number_ele.options[0] = new Option('None Available', '');
    }
}

function test()
{
    QueryAjax(null, '/VKPservices/test', null, null, null, 'test_callback(data);');
}

function test_callback(data)
{
    alert(data);
}

function isset(variable)
{
    var undefined;
    return ( variable == undefined ? false : true );
}

function process_dropdown_callback(results, defaults, source_field, inputs, blocks) {
    for (var i in results) {
        var form_field = xGetElementById('f_' + i);
        var idx = 0, form_selected_index = 0, default_match = false;
        form_field.options.length = 0;

        if (isset(custom[source_field]['defaults'][i])) {
            default_match = custom[ssource_field]['defaults'][i];
            delete custom[ssource_field]['defaults'][i];
        } else if (isset(defaults[i])) {
            default_match = defaults[i];
        }
        for (j in results[i]) {
            form_field.options[idx] = new Option(results[i][j], j);
            if (default_match != false && j == default_match) form_selected_index = idx;
            idx ++;
        }
        form_field.selectedIndex = form_selected_index;
    }

    for (var i in inputs) {
        var input_field = xGetElementById(i);
        if (input_field) {
            input_field.value = inputs[i];
        }
    }

    for (var i in blocks) {
        var div_block = xGetElementById(i);
        if (div_block) {
            xInnerHtml(div_block, blocks[i]);
        }
    }
}

