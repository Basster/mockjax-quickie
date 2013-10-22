
asyncTest("Multiple AJAX Requests with different data", 2,  function () {

	// Foo Request
	$.mockjax({
		url: '/my/api',
		contentType: 'text/json',
		data: {
			remote: "foo"
		},
		responseText: { "yes?": "no" }
	});

	// Bar Request
	$.mockjax({
		url: '/my/api',
		contentType: 'text/json',
		data: {
			remote: "bar"
		},
		responseText: { "yes?": "yes" }
	});

	// jQuery AJAX Nr. 1
	$.ajax({
		url: '/my/api',
		error: function(resp) { ok(true, "Expected error"); },
		dataType: 'json',
		data: {
			// FOO!
			remote: "foo"
		},
		success: function(resp) {
			deepEqual( resp, {"yes?": "no"}, "correct mock hander" );
		},
		complete: function(xhr) {
			start();
		}
	});
	// no qunit, not yet... soon...
	stop();
	// jQuery AJAX Nr. 1
	$.ajax({
		url: '/my/api',
		error: function(resp) {
			// es wird erwartet nix zu erwarten!
			noErrorCallbackExpected();
		},
		data: {
			// BAR!
			remote: "bar"
		},
		dataType: 'json',
		success: function(resp) {
			deepEqual( resp, {"yes?": "yes"}, "correct mock hander" );
		},
		complete: function(xhr) {
			start();
		}
	});

	$.mockjaxClear();
});