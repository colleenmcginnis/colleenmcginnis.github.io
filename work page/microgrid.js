// JavaScript Document

$(document).ready(function() {
	$("#p1").click(function() {
	$("#phase1").show();
	$("#phase0").hide();
	});
   	$("#p2").click(function() {
	$("#phase1").hide();
	$("#phase0").hide();
	$("#phase2").show();
	});
	$("#p3").click(function() {
	$("#phase1").hide();
	$("#phase2").hide();
	$("#phase0").hide();
	$("#phase3").show();
	});
	$("#p4").click(function() {
	$("#phase1").hide();
	$("#phase2").hide();
	$("#phase3").hide();
	$("#phase0").hide();
	$("#phase4").show();
	});
	$("#p5").click(function() {
	$("#phase1").hide();
	$("#phase2").hide();
	$("#phase3").hide();
	$("#phase4").hide();
	$("#phase0").hide();
	$("#phase5").show();
	});
});