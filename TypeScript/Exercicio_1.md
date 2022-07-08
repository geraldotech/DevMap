# TypeScript
[Gist](https://gist.github.com/geraldotech/d388c46b91b08e669938efc9c1f42f12) | [Oficial](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
>>Load HTML first add defer like:


1.Fazer uma `div#app` e adicionar um elemento com um Hello Word!
<details>
<summary>code</summary>

&lt;div id="app"&gt; &lt;/div &gt; 

<pre>
const app = document.getElementById('app');
const p = document.createElement("p");
p.textContent = "Hello Word PEOPLE!";
app?.appendChild(p);
</pre>

</details>
2. O que é o Type Annotation e Type Inference?
<details>
<summary>res</summary>  
- Type Annotation: é quando definimos o tipo de dados manualmente.   
- Type Inference: é quando o TS identifica e define o tipo de dados para nós.  
</details>   
