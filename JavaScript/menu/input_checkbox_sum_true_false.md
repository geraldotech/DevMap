#### live demo => [Live Demo](https://codepen.io/geraldopcf/pen/mdxvBWg)

//html
```html


  <input type="checkbox" id="one" name="type" value="1" />
  <label for="one">ONE</label>
  <input type="checkbox" id="two" name="type" value="2" />
  <label for="two">TWO</label>
  <input type="checkbox" id="three" name="type" value="3" />
  <label for="three">Three</label>
  <input type="checkbox" id="four" name="type" value="4" />
  <label for="four">Four</label>
  <input type="checkbox" id="five" name="type" value="5" />
  <label for="five">Five</label>

  
  <br><br>
  <button id="showResult">Show checked values and sum</button>
  <br><br>
  <div id="result"></div>
  <br><br>
  <div id="result2"></div>


  <input type="checkbox" name="checkbox" id="checkbox" />
  <label for="checkbox">Check</label>


  <br><br>
  <input type="checkbox" name="opt" id="opt">
  <label for="opt">true or false</label>


```

//css
```css
    :root{
      color-scheme: dark;
    }

```



//js

```js
function getCheckedValues() {
  
  return Array.from(document.querySelectorAll('input[type="checkbox"]'))
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => +checkbox.value)
  .reduce((total, value)=> total+= value);
  
}
const resultEl = document.getElementById('result');

 document.getElementById('showResult').addEventListener('click', () => {
 resultEl.innerHTML = getCheckedValues();
}); 



//addEventListener https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
const res2 = document.getElementById('result2');
let checkboxes = document.querySelectorAll("input[type=checkbox][name=type]");

checkboxes.forEach(function(checkboxx){
    checkboxx.addEventListener("change", function(){
        enabledSet = Array.from(checkboxes)
        .filter(i => i.checked)
        .map(i => i.value)
        console.log(enabledSet);
        res2.innerHTML = enabledSet;
    })
});


 //Checkbox is not checked ... Checkbox is checked..
 //via https://thewebdev.info/2022/05/08/how-to-add-a-checkbox-check-event-listener-with-javascript/
const checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});


const inputBtn = document.querySelector("input[name=opt]")


inputBtn.addEventListener("change", (e) => {
  e.target.checked ? console.log('sim') : console.log('not');
  console.log(inputBtn.checked); // true or false
})
console.log(inputBtn); //display all values


```