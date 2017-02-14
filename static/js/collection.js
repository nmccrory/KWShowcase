$(document).ready(function(){
	var collectionItems = $(".collectionItem"),
		column1 = $(".collectionColumn1"),
		column2 = $(".collectionColumn2"),
		column3 = $(".collectionColumn3"),
		albumIcons = $(".albumIcon");

	var tl = new TimelineMax()

	tl.set([column1, column3], {yPercent: 300})
	tl.set(column2, {yPercent: -300})
	tl.to([column1, column3], 0.8, {yPercent: 0, ease: Power2.easeInOut}, 1.2)
	tl.to(column2, 0.8, {yPercent: 0, ease: Power2.easeInOut}, 1.2)
	var flipDepth = -500;
	var tl2 = new TimelineMax({repeat: 0, yoyo:true, paused:false})
	tl2.staggerTo(albumIcons, 0.2, {opacity: 1, ease:Power1.easeIn, delay: 2.2}, 0.1)

	TweenLite.set(".collectionItem", {perspective:800});
	TweenLite.set(".cardFace", {transformStyle: "preserve-3d"});

	TweenLite.set(".back", {rotationY:-180});
	TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

	collectionItems.hover(
		function() {
    		TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
  	}, 
  		function() {
    		TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
    	}
    );
})

