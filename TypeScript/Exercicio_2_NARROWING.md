# TypeScript

### Narrowing



1. Fazer um exemplo com operador in fazendo class e constructor, caso não seja informado a raça do dog.
>> O operador in é utilizado para checar se existe uma propriedade no objeto:
<details>
	<summary>code</summary>
	<pre>
class Dogs {
    itname
    breed
    constructor(itname:string, breed?:string){
        this.itname = itname;
        if(breed){
            this.breed = breed
        }
    }
}
const bob = new Dogs("Bob");
const bel = new Dogs("Mel","Pastor")
function showDogDetails(obj:Dogs){
    if('breed' in obj){
        console.log(`O cachorro é da raça ${obj.breed`})
    } else {
        console.log(`O cachorro é um srd!`)
    }
}
showDogDetails(bob)
showDogDetails(bel)
	</pre>
</details>

2. Vamos criar uma função que recebe review dos usuários, precisamos 
utilizar o narrowing para receber o dado;
<details>
	<summary>code</summary>
	<pre style="color:dodgerblue">
type Review = number | boolean;
function showuserReviews(review: Review){
    if(!review){
        console.log('não avaliou: '+ review)
        return 
    }    
    console.log("Sua nota foi: " + review)
}
showuserReviews(0)
showuserReviews(false)
showuserReviews(5)

	</pre>
</details>
