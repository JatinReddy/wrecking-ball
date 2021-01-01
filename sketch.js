 const Engine = Matter.Engine;
 const World = Matter.World;
 const Body = Matter.Body;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Mouse = Matter.Mouse;
 const MouseConstraint = Matter.MouseConstraint;


var engine;
var world;
var boxes = [];
var myMouse, mConstraint;


function setup() {
  //pixel - screen sizes
  canvas = createCanvas(800,700);

  myMouse = Mouse.create(canvas.elt)
  myMouse.pixelRatio = pixelDensity();

  var options = {
    mouse: myMouse
  }

  

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  ground = new Ground(400,650,800,30);
  for(var j = 500; j<700; j = j+50){
    //create one column of boxes
    for (var i = 200; i<650; i = i+50){
      boxes.push(new Box (j,i,50,50));

    }  
  }

  bob = new Bob(250,400,50);
  rope = new Rope(bob.body,{x:250,y:100});


}
//[box,box,box.....] - boxes , boxes.length
// boxes[0].display()
//boxes[1].display()
function draw() {
  background("grey");
  
  ground.display();
  for (var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  bob.display();
  rope.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}