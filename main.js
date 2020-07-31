//let mainContainer = document.body.getElementsByClassName("main_container");
console.log(data);
// alert('WARNING!!! PROCEED WITH CAUTION')
let mainContainer = document.querySelector("#main_container");



for (i = 0; i < data.results.length; i++) {
    let newContainer = document.createElement("div");
    newContainer.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
    newContainer.style.padding = "15px";
    newContainer.style.margin = "10px";
    newContainer.style.border = "thin solid black"
    // declare var
    let newImg = document.createElement("img");
    let newh2 = document.createElement("h2");
    let newP = document.createElement("p");
    let newP2 = document.createElement("p");
    let newP3 = document.createElement("p");
    let newP4 = document.createElement("p");
    

    // add data
    newImg.src = data.results[i].picture.large;
    newImg.style.border = "thin solid black";
    newImg.addEventListener('click', onClick);
    newContainer.appendChild(newImg);
    newh2.innerText = data.results[i].name.first;
    newP.innerText = "Current coordinates: " + JSON.stringify(data.results[i].location.coordinates);
    newP2.innerText = "Email: " + data.results[i].email;
    newP3.innerText = "Email Password: " + data.results[i].login.password;
    newP4.innerText = "Phone number: " + data.results[i].phone;
    


    // append paragraphs and headings
    newContainer.appendChild(newh2);
    newContainer.appendChild(newP);    
    newContainer.appendChild(newP2);
    newContainer.appendChild(newP3);
    newContainer.appendChild(newP4);                 
    mainContainer.appendChild(newContainer);

}

function onClick(){
    window.location.href = "credit.html";
}



