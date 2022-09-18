<input type="checkbox" id="one">
<label for="one">One</label>
<input type="checkbox" id="two">
<label for="two">two</label>   
    
<input type="checkbox" id="three">
<label for="three">three</label>
    
    
    <button id="btn">Toggle</button>
    
let check = document.querySelectorAll("input[type='checkbox']");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    for(let current of check){
        current.checked = !current.checked;
    }
})



