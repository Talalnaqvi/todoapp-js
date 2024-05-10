const showbox= document.getElementById("show");


const button = document.getElementsByClassName("btn");

const inputfield= document.getElementById("todos");


//if data is inside fetched the data or give an emopty aray 


// global scope bcoz isse array ko bhjna local me or jb retreived krna tu loop bhi lganA
let inputValues =   JSON.parse(localStorage.getItem('c')) ?? [];

  function store(){

    inputValue = inputfield.value; 
    // and then push the new value in that array
   
    
    inputValues.push(inputValue);

    
      
    localStorage.setItem('c', JSON.stringify(inputValues));
    
alert('Data saved to local storage.');





}




function show(){
  
  

  for (const value of inputValues) {
    const showbox= document.getElementById("show");

    
     
   
    //defining the class of icon 
    const iconClass = 'fa-solid fa-trash';
    const divClass="listitems";
    
// creating a new i element and assiginig the the class to icon
    let icon = document.createElement('i');
    let  div = document.createElement("div");
    icon.className=iconClass;
    div.className=divClass;
    showbox.appendChild(div);
    div.innerHTML = value;
    
    div.appendChild(icon);

    

   
   icon.addEventListener("click",function(event){
  
    
  const divIndex = Array.from(showbox.children).indexOf(div);
    
    if (divIndex !== -1) {
        // Remove the div from the DOM
        showbox.removeChild(showbox.children[divIndex]);

        // Remove the corresponding value from the inputValues array
        inputValues.splice(divIndex, 1);

        // Update local storage
        localStorage.setItem("c", JSON.stringify(inputValues));
    }
   })

  }
}


show();
