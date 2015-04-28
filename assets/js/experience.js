$(function () {

	$(".projects-items").on("click", ".show-detail", function (e) {
		var $this = $(this),
			$detail = $this.next(".detail");
		$this.hide();
		$detail.show();
	});

	$(".projects-items").on("click", ".detail", function (e) {
		var $this = $(this),
			$showDetail = $this.prev(".show-detail");
		$this.hide();
		$showDetail.show();
	});
});