$(document).ready(function() {
	var coverLockIcon = $("#coverLockIcon"),
		leftCover = $("#leftCover"),
		rightCover = $("#rightCover"),
		coverOverlay = $("#coverOverlay"),
		collectionIndexWrapper = $("#collectionIndexWrapper");
	

	var tl = new TimelineMax()
	
	tl.to(coverLockIcon, 0.7, {rotation: 360, ease: Power4.ease}, 0.3)
	tl.to(leftCover, 1.7, {xPercent: -130, ease: Power4.easeOut}, 1.0)
	tl.to(rightCover, 1.7,{ xPercent: 130, ease: Power4.easeOut}, 1.0)
	coverOverlay.delay(1000).fadeOut("slow")
})