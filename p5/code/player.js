class Player {
  constructor(playerNumber){
    this.radius= 25;
    fill(50);
    this.x;
    this.y = canvasHeight-this.radius-floorThickness;
    this.playerNumber = playerNumber
    if(this.playerNumber == 1){
      this.x = goalWidth + this.radius;
    }
    else if (this.playerNumber == 2) {
      this.x = canvasWidth - goalWidth - this.radius;
    }
    this.colour = (this.playerNumber == 1) ? 'brown':'black'
  }

  display(){
    fill(this.colour);

    ellipse(this.x,this.y,this.radius*2,this.radius*2);
  }
  jump(){
    
  }
  updatePosition(){
    clear();
    stadium();
    if(this.playerNumber == 1){
      if(keyIsDown(65)){ //a
        this.x -= 5;
      }
      if(keyIsDown(68)){ //d
        this.x += 5;
      }
      if(keyIsDown(87)){ //w
        jump()
      }
    }
    else{
      if(keyIsDown(LEFT_ARROW)){
        this.x -= 5;
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.x += 5;
      }
    }

    this.display();
  }
}
