$(document).ready(function(){
	var collectionItems = $(".collectionItem"),
		column1 = $(".collectionColumn1"),
		column2 = $(".collectionColumn2"),
		column3 = $(".collectionColumn3");

	var tl = new TimelineMax()

	tl.set([column1, column3], {yPercent: 300})
	tl.set(column2, {yPercent: -300})
	tl.to([column1, column3], 0.8, {yPercent: 0, ease: Power2.easeInOut}, 1.4)
	tl.to(column2, 0.8, {yPercent: 0, ease: Power2.easeInOut}, 1.4)
})