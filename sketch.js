// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
value = 0;
//Le texts:
var feynard = "A diagram showing electromagnetic interactions between subatomic particles."
var treeOfLife = ""

https://www.youtube.com/watch?v=9JK9uQNBDxQ
var paintTree = "4 Artists Paint 1 Tree"


// Example 1-1: stroke and fill
var numImagesSideX = 3;
var numImagesSideY = 2;
function diagram(rx, lx, ty, by, image, bc, textTitle, textDescription) {
    this.dimg = loadGif(image);
    // dimg = image;
    this.rightX = rx;
    this.leftX = lx;
    this.topY = ty;
    this.bottomY = by;
    this.backgroundColor = bc;
    this.textTitle = textTitle;
    this.textDescription = textDescription;
}

function videoD(rx, lx, ty, by, image, bc, textTitle, textDescription) {
    // img = loadGif(image);
    rightX = rx;
    leftX = lx;
    topY = ty;
    bottomY = by;
    backgroundColor = bc;
    textTitle = textTitle;
    textDescription = textDescription;
}


function mouseOnLocation(rx,lx,ty,by){

  console.log("Mouse Location " + mouseX + "  " + mouseY );
  console.log(rx + "  " + lx + "  " + ty +"  "+by);
  if((mouseX > rx && mouseX < lx)){
    console.log("Inside the x");
    if((mouseY > ty)&& (mouseY <by)){
      console.log("Inside the y ");
      return true;
    }
  }else{
    return false;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  fill(150);
  textFont("Helvetica");

  img  =  loadGif("./assets/index.gif");
  var xOffset = width/(numImagesSideX);
  var yOffset = height/(2*numImagesSideY)
  var startY = 0;
  var endX = width/2;



  box = createDiv("HELLLO asdfnasekjfnaskefnkajse saofdaskejfnaslkjenfalskjenflaksjenfalksjenfalskjenfalksjenfalksjehfaslkjghlaskdjhg");
  box.class("box");
  box.position(width/2 - (401/2), height/2);

  // rep = createDiv ();

//   <div style="z:999">
//   <div class="rad"></div>
//   <!-- <div class="line"></div> -->
//   <div id= 'textBox' class="box">This is a popup boxsdfasefsaefjbsefjbasejfbasekjfbasekjfhbasekjhfbaskejhfbaskjehfbaskejhfbaskjehfbaskjehfbaslejhfbaslekjfbaselkfjbaslekjfbaslkejfbaslejfbalskejbfalskejbfalskejbfalskjebfalskejbfalskefbaslkejbfalskejfbaskejfbaslkejfbaslkejfbalskejbfskjebfalskejbfaslejfbalskejfbalsefbasejfbasejfnalwejfawlejfnefn;jnawe;fjnawlejfalwejfbalwjebf</div>
// </div>



  //1

  // rx, lx, ty, by, image, bc, textTitle, textDescription
  backColor  = color(255, 255, 255)
  dPhysics = new diagram(xOffset,endX,0, height/2, "./assets/feynard.gif",backColor,"Feynard's Diagram",feynard);

  // dBio1= new diagram();
  //
  // dBio2 = new diagram();
  //
  // dBio3 = new diagram();
  //
  // dCS1 = new diagram();
  //
  // dCS2 = new diagram();
  //
  // dEE1 = new diagram();
  //
  // // dME1
  // dPaint1 = new videoD();
  //
  // dPaint2 =  new diagram();
  // dSculpture1 = new diagram();
  // loadImage("./assets/index.gif", function(img) {
  //
  // });
}

function draw() {

  background(255);
  // image(img, 0, 0);
  if(value == 0){
    image(img, 0, 0,width,height);

    c = color(19, 57, 69,150)
    fill(c);
    indexRatio = img.height/img.width;
    console.log("Final height: " +  (width*img.height)/img.width + " Ratio: " + indexRatio);
    // console.log(height + " Image " + img.height + "The division " +(height/img.height) +" The actual num:" + ((height/img.height)*(img.height+1)));
    rect(0, 0,width,height);

    fill(255)
    textSize(40);
    title  = "Welcome to the Tree of Life";
    titleWidth  =  textWidth(title);
    s = text(title, width/2 - titleWidth/2 , height/3);

    textAlign(CENTER);
    fill(197, 204, 204);
    instructions = "Hover your mouse to explore the tree representations, press i to get info about the particular representation"
    instructionsWidth = textWidth(instructions);
    textSize(20);
    instructions = text(instructions, width/2 - width/(3*2), height/2, width/3);

  }else{

    //for first Diagram:
    display = mouseOnLocation(  dPhysics.rightX ,dPhysics.leftX,dPhysics.topY,dPhysics.bottomY)
    if(display){
      console.log("On physics diagram");
      box.html (dPhysics.textDescription);
      image(dPhysics.dimg, 0, 0,width,height);
    }








  }

  // image(img, 0, height/2, img.width/2, img.height/2);

  // console.log("Image go loaded"+ img);
  // image(img, 0, 0);
}

function changeBox(){
  box.class("boxopen");
  // box.style('')
}

function normalBox(){
  box.class("box");
}
var infoUp = i;
function keyTyped() {
  if (key === 'i') {
      box.class("boxopen");

  }
  return false; // prevent any default behavior
}

var val = 0;
function keyReleased() {
  if (val === 0) {
    val = 1;
  } else{
    box.class("box");
    val = 0;
  }
  return false; // prevent any default behavior
}


function mousePressed() {
  if (value == 0) {
    value = 1;
  }
}
