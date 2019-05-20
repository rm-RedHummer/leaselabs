let images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
    path: '../public/images/man.jpg',
    class: 'translate-md'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: '../public/images/wizard.jpg',
    class: 'translate-sm'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: '../public/images/beast.jpg',
    class: ''
	}
};


let toggleNav = ()=>{
  let nav = document.getElementById("nav-sm");
  if (nav.className === "nav-sm") {
    nav.className += " responsive";
  } else {
    nav.className = "nav-sm";
  }
}

const imagesDiv = document.getElementById('images');

for(let key in images){
  //declare variables
  let outerDiv = document.createElement("div");
  let img = document.createElement("img");
  let innerDiv = document.createElement("div");
  let title = document.createElement("h3");
  let description = document.createElement("p");

  //set values
  img.className = images[key].class;
  img.src = images[key].path;
  title.innerHTML = images[key].heading.toUpperCase();
  description.innerHTML = images[key].description;

  //append elements
  innerDiv.appendChild(title);
  innerDiv.appendChild(description);
  outerDiv.appendChild(img)
  outerDiv.appendChild(innerDiv)

  //append generated elements to images div
  imagesDiv.appendChild(outerDiv);


}
// images.forEach((image)=>{
//   console.log(image);
// })
