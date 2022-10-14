### PHP Docs

Manual:  
[https://www.php.net/manual/en/](https://www.php.net/manual/en/)

Awesome youtube channel about HTML/CSS/JS/PHP:  
[https://www.youtube.com/c/CodeBoxx/videos](https://www.youtube.com/c/CodeBoxx/videos)

PHP é uma linguagem de programação voltada para o desenvolvimento de aplicados para web, muito usado na stack back-end. Sites como o Wordpress.org, Facebook entre outros usam PHP. Para mim tem um significado nostalgico ao mexer com PHP, aqui vai uma lembraça de 2006 quando jogava MuGNN e no site de vez em quando aparecia alguns erros do tipo `error on line...` coisas que agente nunca esquece, naquela época nem pensava em ser developer.

- Formato.php e echo:

Crie um novo documento e salve como `index.php`, o código deve ser declarado  `<?php //code// ?>`, um exemplo com echo:
```php
<?php
echo "Hello";
?>
```

- Também temos o `print_r` que mostras as informações de variáveis, arrays;

```php
const arr = ["Geraldo","gmapdev"];
print_r(arr); // Array ( [0] => Geraldo [1] => gmapdev )

```

- switch

```php
<?php
$pws = '1';
	switch ($pws){
		case '1':
			echo 'um';
			break;

			case '2';
			echo 'dois';
			break;
		default:
		echo 'nao foram encontradas combinacoes';
	}
?>
```