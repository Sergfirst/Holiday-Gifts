  function addNewClouds()
  {
	var cloudHeight =  Math.random() * ((game.world.height*0.7) - 50) + 50;
	var cloud = clouds.create(game.world.width, cloudHeight, 'cloud');
	cloud.scale.setTo(0.8, 0.8);
    cloud.body.velocity.x = -gameSpeed; //скорость приближения снежка 
    cloud.checkWorldBounds = true;
    cloud.outOfBoundsKill = true;
  }
  
  //встреча с облаком
  function collideCloud(dude, cloud) {
	cloud.kill();
	sound_for_die.play();
	if(s_score>50) s_score-=50;
	else s_score=0;
	if(lives > 1)
		lives -= 1;
	else 
		{
			//dude.destroy();
			game.add.tween(dude).to( { alpha: 0 }, 1400, Phaser.Easing.Linear.None, true, 0, 1000, true);
			game.add.text(game.world.centerX, game.world.centerY-350, "You killed Santa(", { fontSize: '32px', fill: '#b30030' });
			game.time.events.add(1500, iDied, this);
		}
	
    lifesText.text = 'Lives: ' + lives;
  }