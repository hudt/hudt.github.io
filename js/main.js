function resizeContainer() {
	var percent = $("#percent");
	var percentNumber = 0;
	var intervalId = setInterval(function(){
		if(percentNumber < 100) {
			percent.text(percentNumber ++);
		} else {
			percent.text(100);
			clearInterval(intervalId);
			loading.delay(300).animate({top: ['-100%', 'easeOutCubic']}, 1000, function() {});
			gameContainer.delay(300).animate({top: ['0', 'easeOutCubic']}, 1000, function() {});
		}
	},50);
	
	
}
function showPressPromptText() {
	if(pressPromptText.is(":hidden")) {
		pressPromptText.show();
	} else {
		pressPromptText.hide();
	}
	setTimeout(function(){
		if(!isScrolled) {
			showPressPromptText();
		} else {
			pressPromptText.hide();
		}
	},500);
}

function doAfterScroll() {
	isScrolled = true;
	movePageGound();
	movePageBackground();
	moveChapters();
	checkDisplay();
}


function movePageGound() {
	pageGround1.css('left', -pageYOffset);
	pageGround2.css('left', 8100-pageYOffset);
}
function movePageBackground() {
	pageBackground.css('left', -pageYOffset / 8);
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
	if(!isBjgPorjectDisplay && pageYOffset >= 7600) {
		showBjgProject();
	}
	
	if(pageYOffset >= 8360 && pageYOffset <= 9300) {
		var degrees = 90 * (8360 - pageYOffset) / (9300 - 8360)
		rotate(gameContainer, degrees);
		rotate(pageBackground, -degrees);
	} else if(pageYOffset > 9300) {
		rotate(gameContainer, -90);
		rotate(pageBackground, 90);
	} else if(pageYOffset < 8360) {
		rotate(gameContainer, 0);
		rotate(pageBackground, 0);
	}
	
	if(!isSkillDisplay && pageYOffset >= 9200) {
		showSkill();
	}
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
function showBjgProject() {
	isBjgPorjectDisplay = true;
	$("#bjg-project-1").stop().animate({bottom: [10, 'easeOutCubic']}, 300, function() {});
}
function showSkill() {
	isSkillDisplay = true;
	$(".skill-star").each(function(m){
		$(this).find("b").each(function(i){
			$(this).stop().delay(m * 300 + i * 300).animate({top:[i * 50 , 'easeOutElastic']}, 800, function() {});
		});
	});
}

var gameContainer = $("#game-container");
var loading = $("#loading");
var pressPromptText = $("#press-prompt-text");
var pageGround1 = $('#page-ground-1');
var pageGround2 = $('#page-ground-2');
var pageBackground = $('#page-background');
var chapters = $(".chapter");
var graduate = $(".graduate");
var chinasoftProject = $(".chinasoft-project");
var isCourseStarDisplay = 0, isGraduateJump = 0, isChinasoftProjectDisplay = 0,
isAsiacomPorjectDisplay = 0, isChongqingDisplay = 0, isBjgPorjectDisplay = 0, isSkillDisplay = 0,
isScrolled = 0;
window.onload = function () {
	resizeContainer();
	showPressPromptText();
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