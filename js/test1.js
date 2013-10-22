$.mockjaxSettings.responseTime = 0;

// mockjax injection
$.mockjax({
	url: '/my/api',
	responseText: "Hello Word"
});

asyncTest( "Simple AJAX Test", 2, function() {

	var completeHandler = function(data, status) {
		ok(status === 'success', 'Success! Should be obvious!');
		ok(data === "Hello Word", 'Received Hello World!');
		start();
	};

	$.ajax({
		url: '/my/api',
		success: completeHandler
	});

	$.mockjaxClear();
});