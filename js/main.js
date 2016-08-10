function resizeContainer() {
}

function doAfterScroll() {
	movePageGound();
	movePageBackground();
	moveChapters();
	checkDisplay();
}


function movePageGound() {
	pageGround.css('left', -pageYOffset);
}
function movePageBackground() {
	
}
function moveChapters() {
	chapters.css('left', -pageYOffset);
}
function checkDisplay() {
	if(!isCourseStarDisplay && pageYOffset >= 900) {
		showCourseStar();
	}
	if(!isGraduateJump && pageYOffset >= 1500) {
		graduateJumpStart();
	}
	if(!isChinasoftProjectDisplay && pageYOffset >= 2700) {
		showChinasoftProject();
	}
	if(!isAsiacomPorjectDisplay && pageYOffset >= 3860) {
		showAsiacomProject();
	}
	if(!isChongqingDisplay && pageYOffset >= 5760) {
		showChongqing();
	}
	/*if(pageYOffset >= 2600 && pageYOffset <= 3600) {
		var degrees = 90 * (2600 - pageYOffset) / (3600 - 2600)
		rotate($("#game-container"), degrees);
	} else if(pageYOffset < 2600){
		rotate($("#game-container"), 0);
	} else if(pageYOffset > 3600 && pageYOffset <= 5000){
		var degrees = -90 - 90 * (3600 - pageYOffset) / (5000 - 3600)
		rotate($("#game-container"), degrees);
	} else if(pageYOffset > 5000 && pageYOffset <= 6000){
		var degrees = 90 * (5000 - pageYOffset) / (6000 - 5000)
		rotate($("#game-container"), degrees);
	}*/
}
function showCourseStar() {
	isCourseStarDisplay = true;
	$(".course-star").each(function(m){
		$(this).find("b").each(function(i){
			$(this).stop().delay(m * 300 + i * 300).animate({top: [i * 50, 'easeOutElastic']}, 800, function() {});
		});
	});
}
function graduateJumpStart() {
	isGraduateJump = true;
	graduateAnimationTimer = setInterval(function(){graduateJumpUp()}, 3000);
	
}
function graduateJumpUp() {
	graduate.stop().animate({bottom: [200, 'easeOutCubic']}, 300, function() {graduateJumpDown()});
}
function graduateJumpDown() {
	graduate.stop().animate({bottom: [50, 'easeInCubic']}, 300, function() {});
}
function showChinasoftProject() {
	isChinasoftProjectDisplay = true;
	chinasoftProject.stop().animate({bottom: [50, 'easeOutSine']}, 300, function() {});
}
function showAsiacomProject() {
	isAsiacomPorjectDisplay = true;
	$("#asiacom-project-1").stop().animate({bottom: [50, 'easeOutSine']}, 300, function() {});
	$("#asiacom-project-2").stop().delay(1000).animate({bottom: [50, 'easeOutSine']}, 300, function() {});
}
function showChongqing() {
	isChongqingDisplay = true;
	$("#jfb").stop().animate({left: [0, 'easeOutCubic']}, 300, function() {});
	$("#dlt").stop().delay(300).animate({left: [132, 'easeOutCubic']}, 300, function() {});
	$("#cqk").stop().delay(600).animate({left: [700, 'easeOutCubic']}, 300, function() {});
}

var pageGround = $('#page-ground');
var chapters = $(".chapter");
var graduate = $(".graduate");
var chinasoftProject = $(".chinasoft-project");
var isCourseStarDisplay = 0, isGraduateJump = 0, isChinasoftProjectDisplay = 0,
isAsiacomPorjectDisplay = 0, isChongqingDisplay = 0;
window.onload = function () {
	resizeContainer();
}
window.onresize = function () {
	resizeContainer()
}
window.onscroll = function (e) {
    doAfterScroll();
}

function rotate(object, degrees) {
  object.css({
    '-webkit-transform': 'rotate(' + degrees + 'deg)',
    '-moz-transform': 'rotate(' + degrees + 'deg)',
    '-ms-transform': 'rotate(' + degrees + 'deg)',
    '-o-transform': 'rotate(' + degrees + 'deg)',
    'transform': 'rotate(' + degrees + 'deg)',
    'zoom': 1

  });
}