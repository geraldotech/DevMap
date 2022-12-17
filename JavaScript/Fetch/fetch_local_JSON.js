# Fetch JSON
### JSON example:

// dados.json
{
  "login": "gmapdev",
  "id": 92253544,
  "age": 29,
  "node_id": "U_kgDOBX-taA",
  "avatar_url": "https://avatars.githubusercontent.com/u/92253544?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/geraldotech"
} 



// JS
const api = './dados.json';

async function essaurl(url){  
  
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);    
    console.log(data.login); // gmapdev

    if(response){
        show(data)
    } 
}
essaurl(api);
function show(data){ 
    document.getElementById("res").innerHTML = data.login;
}

// html
<div id="res"></div>

