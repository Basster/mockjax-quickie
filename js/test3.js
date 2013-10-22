
asyncTest( "Test agains Full API Doc", 3, function() {

	$.mockjax({
		url: '/my/api',
		contentType: 'text/json',
		proxy: 'js/my_api.json'
	});

	$.ajax({
		url: '/my/api',
		success: function(data) {
			ok(data.status === 200, "Status 200, toll!");
			ok(data.hi === 'Ole', "Hi 'Ole'!" );
			ok(data.company === 'neusta', "Das war ein Neusta Quicky!")
		},
		complete: function(xhr) {
			start();
		}
	});

	$.mockjaxClear();
});