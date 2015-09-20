
	$(".buildingReuse").on('click',function() {
	$("#materialReuseText, #recycledContentText, #urbanWoodText, #phytoremediationText, #certifiedWoodText, #conventionalWoodText").hide();
	$(".materialReuse, .recycledContent, .urbanWood, .phytoremediation, .certifiedWood, .conventionalWood").css('opacity', 0);
	$(".buildingReuse").css('opacity', 1);
	$("#buildingReuseText").fadeIn();
	});


	$(".materialReuse").on('click',function() {
	$("#buildingReuseText, #recycledContentText, #urbanWoodText, #phytoremediationText, #certifiedWoodText, #conventionalWoodText").hide();
	$(".buildingReuse, .recycledContent, .urbanWood, .phytoremediation, .certifiedWood, .conventionalWood").css('opacity', 0);
	$(".materialReuse").css('opacity', 1);
	$("#materialReuseText").fadeIn();
	});

	$(".recycledContent").on('click',function() {
	$("#buildingReuseText, #materialReuseText, #urbanWoodText, #phytoremediationText, #certifiedWoodText, #conventionalWoodText").hide();
	$(".buildingReuse, .materialReuse, .urbanWood, .phytoremediation, .certifiedWood, .conventionalWood").css('opacity', 0);
	$(".recycledContent").css('opacity', 1);
	$("#recycledContentText").fadeIn();
	});

	$(".urbanWood").on('click',function() {
	$("#buildingReuseText, #materialReuseText, #recycledContentText, #phytoremediationText, #certifiedWoodText, #conventionalWoodText").hide();
	$(".buildingReuse, .materialReuse, .recycledContent, .phytoremediation, .certifiedWood, .conventionalWood").css('opacity', 0);
	$(".urbanWood").css('opacity', 1);
	$("#urbanWoodText").fadeIn();
	});

	$(".phytoremediation").on('click',function() {
	$("#buildingReuseText, #materialReuseText, #recycledContentText, #urbanWoodText, #certifiedWoodText, #conventionalWoodText").hide();
	$(".buildingReuse, .materialReuse, .recycledContent, .urbanWood, .certifiedWood, .conventionalWood").css({'opacity':'0'});
	$(".phytoremediation").css({'opacity':'1'});
	$("#phytoremediationText").fadeIn();
	});

	$(".certifiedWood").on('click',function() {
	$("#buildingReuseText, #materialReuseText, #recycledContentText, #urbanWoodText, #phytoremediationText, #conventionalWoodText").hide();
	$(".buildingReuse, .materialReuse, .recycledContent, .urbanWood, .phytoremediation, .conventionalWood").css('opacity', 0);
	$(".certifiedWood").css('opacity', 1);
	$("#certifiedWoodText").fadeIn();
	});

	$(".conventionalWood").on('click',function() {
	$("#buildingReuseText, #materialReuseText, #recycledContentText, #urbanWoodText, #phytoremediationText, #certifiedWoodText").hide();
	$(".buildingReuse, .materialReuse, .recycledContent, .urbanWood, .phytoremediation, .certifiedWood").css('opacity', 0);
	$(".conventionalWood").css('opacity', 1);
	$("#conventionalWoodText").fadeIn();
	});
