function StartGame(){
    introVid.play();
    introVid.style.display = "block";
    setTimeout(function(){introVid.style.display = "none";},12000);
}
introVid.onclick = function(){
    playGame()
}
playBtn.onclick = function(){
    setTimeout(StartGame, 100);
    setTimeout(playGame,12000);
    auMenuSelect.play();
}
function playGame(){
    introVid.className = "hide";
    introVid.pause();
    gameMenu.className = "hide";
    gamePlay.className = "show";
    cactus.style.animationDuration = "100s";
    auSelect.play();	
    auLevel.play();
    auPigs.play();
}
player.onclick = function(){
    player.style.bottom  = "240px"
    player.style.left = "225px";
    mouseBox.style.display = "block";
    auBirdSel.play();
}
mouseBox.onmousemove = function(e){
    auSling.play();
    player.style.left = "170px";
    player.style.bottom = e.pageY/2 + "px";
	mouseBox.innerHTML = e.pageY;	
    mouseBox.onclick = function(){
        if(e.pageY < 420){
            player.className = "anim1";
            auFly.play();	
        }
        else if(e.pageY > 470){
            player.className = "anim2";
            auFly.play();
			function destroyOne(){
				enemyBox.className = "destroy1";	
				auBirdDes.play();	
				auIce.play();
				auRock.play();	
			}
			setTimeout(destroyOne,700)
        }		
        else{
            player.className = "anim3";
            auFly.play();
			function destroyTwo(){	
				enemyBox.className = "destroy2";	
				auBirdDes.play();	
				auIce.play();
				auBye.play();
				auRock.play();
				auTnt.play();
			}
			setTimeout(destroyTwo,700);
			setTimeout(function(){
                enemy.style.display = "none";
            },3300)
        }
        setTimeout(showScore,3400);			
	}
}

function showScore(){
    if(enemy.style.display == "none"){
        win.className= "show-flex";
        auStarsCollect.play();
    }else{
        lose.className= "show-flex";
    }
}
function refresh(){
    window.location.reload();
}