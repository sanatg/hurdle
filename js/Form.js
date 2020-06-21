class  Form {
 constructor(){
    this.title = createElement('h1');
    this.name  = createElement('h4');
    this.greeting = createElement('h1');
    this.input = createInput("name");
    this.button = createButton("play");
 }
 hide(){
     removeElements();
  
 }
 display(){
     this.title.html("Athlete racer");
     this.title.position(displayWidth/2 + 80, 0);
     this.name.html("Champ please enter your full name");
     this.name.position(displayWidth/2 + 80,100);
     this.input.position(displayWidth/2 +80,displayHeight/2-200);
     this.button.position(displayWidth/2+80,displayHeight/2-150);
     this.greeting.visible = false;
     this.greeting.position(displayWidth/2 -80,0);
   
     this.button.mousePressed(()=>{
         this.title.hide();
         this.input.hide();
         this.button.hide();
         this.name.hide();
         this.greeting.visible = true;
         this.greeting.html("Hello "+this.input.value()+", Get Ready Champ!!!!");     })
 }
}