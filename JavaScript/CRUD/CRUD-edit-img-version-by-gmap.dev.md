## [CodePen](https://codepen.io/geraldopcf/pen/mdxvLZz)

```html

<div class="container">
<main></main>
<br>
<br>
<form>  
    <fieldset>
        <legend>Register a new movie to DataBase</legend>
        <input type="text" name="name" placeholder="name"/>
        <input type="number" name="Year" placeholder="Year">
        <input type="text" name="imagem" placeholder="img link">
        <input type="submit" name="btncreate" value="Create">
    </fieldset>
</form>
<br><br>
<form>

<fieldset>
<legend>Update</legend>
<input type="text" name="UpdateN" placeholder="update">
<input type="number" name="UpdateY" placeholder="Update Year">
<input type="text" name="upImg" placeholder="img url">
<input type="submit" name="updateitem" value="Update">
</fieldset>
</form>

</div>


```


```css
 *{
        font-family: sans-serif;
    }
    button:active{
        background: red;
    }
    maxin{
        margin-bottom: 20px;
        background: rgb(255, 241, 241);
        margin: 0 50px;
        text-align: left;
    }   
    img{ 
        max-width: 50%;
        width: 100%;
        }

        .container{
            display: flex;
            flex-direction: column;
            height: 80vh;
            width: 500px;
        }

```





<details>
<summary>code JS</summary>

```js

//CRUD

//Create 2
//Read 1
//Update
//Delete 3

//dados
const filmes = [
    {name:"Amerinca Honor", year: 2008, img: "https://gpnotes.droppages.com/img/1.jpg"},
    {name:"Fire Up", year: 2009, img:"https://gpnotes.droppages.com/img/rio.jpg"}
]

const mainDiv = document.querySelector("main");
//create
const inputName = document.querySelector("input[name='name']");
const inputYear = document.querySelector("input[name='Year']");
const inputImg = document.querySelector("input[name='imagem']");
const ButtonCreate = document.querySelector("input[name='btncreate']");
//update
const UpdateN = document.querySelector("input[name='UpdateN']");
const UpdateY = document.querySelector("input[name='UpdateY']");
const upImg = document.querySelector("input[name='upImg']");
console.log(upImg.value)
const updateForm = document.querySelector("input[name='updateitem']");



const renderData = () =>{
    mainDiv.innerText = ""; //zerar any content!

   
    /* for(data of filmes){
        const h1 = document.createElement("h1");
        h1.textContent = `Name: ${data.name} | Year: ${data.year}`
        mainDiv.appendChild(h1);
    }  */
    filmes.forEach((data, index)=>{       

        //delete button
        const ConstainerBtn = document.createElement("aside");
        const delbtn = document.createElement(`button`);
        delbtn.id = index;
        delbtn.textContent = "Deletar";
        delbtn.addEventListener("click", event => {
            filmes.splice(index, 1);
            renderData()
        })
       
        ConstainerBtn.appendChild(delbtn); //below?
        //update
        const btnUp = document.createElement(`button`);
        btnUp.id = index;
        btnUp.innerText = "Atualizar";
        btnUp.addEventListener("click", event => {
            UpdateN.value = data.name;           
            UpdateY.value = data.year;
            upImg.value = data.img;
            updateForm.setAttribute("toupdate", index);
        })
        ConstainerBtn.appendChild(btnUp);

        const h1 = document.createElement("h3");
        h1.innerHTML = `Name: ${data.name} | Year: ${data.year} <br> Img: <img src="${data.img}" />`
        mainDiv.appendChild(h1);
        mainDiv.appendChild(ConstainerBtn);
    })
    }  //fun


const createData = (e) =>{
    e.preventDefault()
    const name = inputName.value;
    const year = inputYear.value;
    const img = inputImg.value;
    const newData = {name , year, img};
    filmes.push(newData);
    renderData()
}


const updateData = event =>{
    event.preventDefault()
    const index = event.target.getAttribute("toupdate");
    const name = UpdateN.value;
    const year = UpdateY.value;
    const img = upImg.value;
    filmes[index] = {name, year, img};
    renderData();
}

//Main App Controller
renderData();
ButtonCreate.addEventListener("click", createData);
updateForm.addEventListener("click", updateData);




```

</details>
