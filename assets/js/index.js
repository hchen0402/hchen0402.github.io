$(function () {
	
	var $panel = $(".panel"),
		pheight = $panel.height(),
		pwidth = $panel.width(),
		$mask = $("#mask");

	// show mask
	function showMask() {
		var $win = $(window),
			height = $win.height(),
			width = $win.width();
		$mask.css({
			width: width,
			height: height
		});
		$mask.show();
	}

	// hide mask
	function hideMask() {
		$mask.hide();
	}
	

	$("#contact").click(function (e) {
		var $win = $(window),
			height = $win.height(),
			width = $win.width();

		var left = (width - pwidth) / 2,
			top = (height - pheight) / 2;

		$panel.css({
			left: left,
			top: top
		});

		showMask();

		$panel.show();

		e.stopPropagation();

	});

	$panel.click(function (e) {
		e.stopPropagation();
	});

	$(document).click(function () {
		$panel.hide();
		hideMask();
	});

});