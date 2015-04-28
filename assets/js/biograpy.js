$(function () {
	var $showImg = $("#showImg"),
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

	function loadImage(url){
		var img = new Image();  
		img.onload=function(){

		};  
		img.onerror=function(){
			console.log('error');
		};  
		img.src = url;
		return {
			w: img.width,
			h: img.height
		};
	}

	$(".item").on("click", "img", function (e) {
		var $this = $(this),
			src = $this.attr("src");
		var $img = $("<img/>");
		var size = loadImage(src);
		$img.attr("src", src);
		
		if(size.w > 768) {
			$img.css({
				width: 768
			});
		}
		if (size.h > 768) {
			$img.css({
				height: 768
			})
		}
		$showImg.append($img);
		showMask();
		$showImg.show();
	});

	$showImg.on("click", "img", function (e) {
		var $this = $(this);
		e.stopPropagation();
		$this.hide();
		$this.html("");
		hideMask();
	});

	$(".item").on("mouseenter", ".img-mask", function	(e) {
		var $this = $(this);
		$this.hide();
	});

	$(".item").on("mouseleave", function (e) {
		var $this = $(this),
			$imgMask = $this.find(".img-mask");
		$imgMask.show();
	});
});