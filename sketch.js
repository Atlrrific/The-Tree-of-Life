// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
value = 0;
//Le texts:
var feynard = "A diagram showing electromagnetic interactions between subatomic particles."+
'<a href="https://en.wikipedia.org/wiki/Feynman_diagram">Wikipedia Article</a>'
// var treeOfLife = ""
var bioTree = "A rooted phylogenetic tree, illustrating how Eukaryota and Archaea are "+
"more closely related to each other than to Bacteria (based on Cavalier-Smith's theory of" +
"bacterial evolution). Neomura is a clade composed of two life domains, Archaea and Eukaryota."
"LUCA, a variant of LUA, stands for last universal common ancestor."+
'<a href="https://en.wikipedia.org/wiki/Phylogenetic_tree">I Think</a>'

var darwinTree = "Tree of Life: the first-known sketch by Charles Darwin of an evolutionary tree describing the relationships among groups of organisms"+
"Syndics of Cambridge University Library" +'<a href="http://www.amnh.org/exhibitions/darwin/the-idea-takes-shape/i-think">I Think</a>'


var binaryTree = 'In computer science, a binary tree is a tree data structure in which each node has at most two children, '+
'which are referred to as the left child and the right child.' + '<a href= " https://en.wikipedia.org/wiki/Binary_search_tree ">Wikipedia BST</a>'
var graph = 'In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics.' +
'<a href="https://en.wikipedia.org/wiki/Graph_(abstract_data_type)">Wikipedia Article</a>'
https://www.youtube.com/watch?v=9JK9uQNBDxQ
var paintTree = "4 Artists Paint 1 Tree"

var daliTree = "These experimental explosions on the atoll of Bikini inspired Dali to paint the Three Sphinxes of Bikini. "+
'<p>The painting consisted of one head, one tree and one nuclear mushroom. The head might represents humanity, while the tree represents nature and mushroom cloud represents destruction.'
+ '<a href="https://en.wikipedia.org/wiki/Graph_(abstract_data_type)">Wikipedia Article</a>'

var disneyVid =  '<iframe width="560" height="315" src="http://www.youtube.com/embed/9JK9uQNBDxQ?" frameborder="0" allowfullscreen></iframe>'
var disneyDescription = 'Great documentary about 4 famous Disney background artists!'
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

function diagramWithImage(rx, lx, ty, by, image, bc, textTitle, textDescription) {
    this.dimg = loadImage(image);
    // dimg = image;
    this.rightX = rx;
    this.leftX = lx;
    this.topY = ty;
    this.bottomY = by;
    this.backgroundColor = bc;
    this.textTitle = textTitle;
    this.textDescription = textDescription;
}

function videoD(rx, lx, ty, by,videoHTML, bc, textTitle, textDescription) {
    //  = loadGif(image);
    this.vid  = createDiv(videoHTML);
    this.vid.hide();
    this.rightX = rx;
    this.leftX = lx;
    this.topY = ty;
    this.bottomY = by;
    this.backgroundColor = bc;
    this.textTitle = textTitle;
    this.textDescription = textDescription;
}


function mouseOnLocation(rx,lx,ty,by){

  // console.log("Mouse Location " + mouseX + "  " + mouseY );
  // console.log(rx + "  " + lx + "  " + ty +"  "+by);
  if((mouseX > rx && mouseX < lx)){
    // console.log("Inside the x");
    if((mouseY > ty)&& (mouseY <by)){
      // console.log("Inside the y ");
      return true;
    }
  }else{
    return false;
  }

}


boxPosition =1 ;
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


  // var numImagesSideX = 3;
  // var numImagesSideY = 2;
  box = createDiv();
  box.class("box");
  box.position(width/2 - (401/2), height/2);

  // rx, lx, ty, by, image, bc, textTitle, textDescription
  backColor  = color(255, 255, 255)
  dPhysics = new diagram(xOffset,endX,0, height/2, "./assets/feynard.gif",backColor,"Feynard's Diagram",feynard);

  console.log(img);

  dBio1= new diagramWithImage(0, xOffset, 0, height/2, "./assets/treelife.png",backColor,"Darwin I Think", darwinTree);

  disneyVid = new videoD(0, xOffset, height/2, height,disneyVid ,backColor,"Four Artist Paint 1 Tree ", disneyDescription);

  dBST = new diagram(xOffset,endX, height/2, height,"./assets/binarytree.gif", backColor,"Bynary Search Tree",binaryTree);
  //

  //Left Side

  graphColor  = color(253,139,53);
  dGraph = new diagram(width-xOffset,width,0,height/2,"./assets/mst.gif",graphColor, "Graph",graph);

  daliColor  = color(0);
  dDali = new diagramWithImage(width/2, width-xOffset, 0,height/2,"./assets/daliTree.jpg",daliColor,"The Three Sphinxes of Bikini",daliTree );

  dBio2 = new diagramWithImage(width/2, width-xOffset, height/2,height,"./assets/biologytree.png",backColor,"Phylogenetic Tree",bioTree );
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
    box.hide();

  }else{
    box.show();
    //for first Diagram:
    display = mouseOnLocation(  dPhysics.rightX ,dPhysics.leftX,dPhysics.topY,dPhysics.bottomY)
    if(display){
      boxPosition =1;
      background(dPhysics.backgroundColor);
      console.log("Inside physics ");
      box.html (dPhysics.textDescription);
      image(dPhysics.dimg, (width/2)-dPhysics.dimg.width/2, (height/2)- dPhysics.dimg.height/2);
    }

    // dBio1

    //for first Diagram:
    displayB = mouseOnLocation(  dBio1.rightX ,dBio1.leftX,dBio1.topY,dBio1.bottomY)
    if(displayB){
      boxPosition = 1;
      console.log("Inside Bio");
      background(dBio1.backgroundColor);
      box.html (dBio1.textDescription);
      image(dBio1.dimg, (width/2)-dBio1.dimg.width/4, (height/2)- dBio1.dimg.height/4,dBio1.dimg.width/2,dBio1.dimg.height/2);
    }

    //Disney vid:
    //for first Diagram:
    disneyDisplay = mouseOnLocation(  disneyVid.rightX ,disneyVid.leftX,disneyVid.topY,disneyVid.bottomY)
    if(disneyDisplay){
      boxPosition =1;
      console.log("Inside Bio");
      background(disneyVid.backgroundColor);
      box.html (disneyVid.textDescription);
      disneyVid.vid.show();
      disneyVid.vid.position(width/4, height/4);
      // image(dBio1.dimg, (width/2)-dBio1.dimg.width/4, (height/2)- dBio1.dimg.height/4,dBio1.dimg.width/2,dBio1.dimg.height/2);
    }else{
      disneyVid.vid.hide();
    }


    //for first Diagram:
    BSTdisplay = mouseOnLocation( dBST.rightX ,dBST.leftX,dBST.topY,dBST.bottomY)
    if(BSTdisplay){
      boxPosition =1;
      background(dBST.backgroundColor);
      box.html (dBST.textDescription);
      image(dBST.dimg, (width/2)-dBST.dimg.width/2, (height/2)- dBST.dimg.height/2);
    }

    //for first Diagram:
    graphDisplay = mouseOnLocation( dGraph.rightX ,dGraph.leftX,dGraph.topY,dGraph.bottomY)
    if(graphDisplay){
      boxPosition =0;
      background(dGraph.backgroundColor);
      box.html (dGraph.textDescription);
      image(dGraph.dimg, (width/2)-dGraph.dimg.width/2, (height/2)- dGraph.dimg.height/2);
    }

    //for first Diagram:
    daliDisplay = mouseOnLocation( dDali.rightX ,dDali.leftX,dDali.topY,dDali.bottomY)
    if(daliDisplay){
      boxPosition =0;
      background(dDali.backgroundColor);
      box.html (dDali.textDescription);
      image(dDali.dimg, (width/2)-dDali.dimg.width/2, (height/2)- dDali.dimg.height/2);
    }

    //for first Diagram:
    bio2Display = mouseOnLocation( dBio2.rightX ,dBio2.leftX,dBio2.topY,dBio2.bottomY)
    if(bio2Display){
      boxPosition = 0;
      background(dBio2.backgroundColor);
      box.html (dBio2.textDescription);
      image(dBio2.dimg, (width/2)-dBio2.dimg.width/4, (height/2)- dBio2.dimg.height/4, dBio2.dimg.width/2, dBio2.dimg.height/2);
    }

    if(boxPosition == 1){
      box.position(width - (401), height/1.5);
    }else{
      box.position(0, height/1.5);
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
