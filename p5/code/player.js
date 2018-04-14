class Player {
  constructor(playerNumber){
    this.radius= 25;
    fill(50);
    this.x;
    this.y = canvasHeight-this.radius-floorThickness;
    if(playerNumber == 1){
      this.x = goalWidth + this.radius;
    }
    else if (playerNumber == 2) {
      this.x = canvasWidth - goalWidth - this.radius;
    }
    this.sprite;
  }

  display(){
    fill('brown');
    this.sprite = ellipse(this.x,this.y,this.radius*2,this.radius*2);
  }

  updatePosition(){
    delete this.sprite
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 5;
    }
    this.display();
    if(keyIsDown(RIGHT_ARROW)){
      this.x += 5;
    }
    this.display();
  }
}
