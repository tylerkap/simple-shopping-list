let submitButton = document.querySelector("#btn");
let input = document.querySelector("#list-input");
let unorderdList = document.querySelector("#list");



submitButton.addEventListener('click', () => {

    //alert("Is this working?");
    
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    div.classList.add("item");
    listItem.classList.add("list-item");
    listItem.textContent = input.value;
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', () => {
        //alert("DOES THIS WORK?");
        div.remove();
    });

    div.appendChild(listItem);
    div.appendChild(deleteButton);

    unorderdList.appendChild(div);
    

    input.value = "";
    input.focus();
});
