   // exemplo gerando tudo html a partir do JS
   const div = document.createElement("div");      
   div.setAttribute("id","container");
   div.classList.add("grid")
   document.body.appendChild(div);
   const container = document.querySelector("#container"); //select container criado      
  
     const api = "https://api.imgflip.com/get_memes";

     async function get(url){
         response = await fetch(url);
         info = await response.json();
         const pegamemes = info.data.memes.splice(0, 40);
         console.log(pegamemes);
         
        pegamemes.map((el, i) => {              
            
         const li = document.createElement("li");
         const img = document.createElement("img");
         const fig = document.createElement("figcaption")
         const figure = document.createElement("figure");
         const btn = document.createElement("button");
         
         img.setAttribute("src", el.url);
         img.setAttribute("alt", "alt");
         img.appendChild(fig);            
         img.classList.add("box"); // add a class box
         fig.textContent = el.name; 
         img.appendChild(fig);
         btn.textContent = el.url;
         figure.appendChild(img);
         figure.appendChild(fig);
         figure.appendChild(btn);               
         container.appendChild(figure);      
         btn.addEventListener("click", function(e){ //event de click que copia a url da imagem
             const copytxt = e.target.textContent;
             navigator.clipboard.writeText(copytxt).then(()=> {
                 alert("copiado!");
             });
         })                        
         });    
     }
     get(api);      
     