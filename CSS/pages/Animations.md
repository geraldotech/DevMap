# CSS

#### auto animation

<details>
<summary>show code</summary>

```cs

.banner{
    width: 200px;  
    height: 40px;
    padding: 10px;
    font-size: 2rem;
    text-align: center;    
    animation-name: meubanner;
    animation-duration: 5s;     
    
}

@keyframes meubanner{
    from{
        background: green;
        border-radius: 50px;       
        color: #f2f2f2;
    }
    to{
        background: red;
        color: black;     
    }
}
```

</details>

#### :hover
<details>
<summary>show code</summary>

```css
.box{
    font-size: 25px;
    display: table;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    transition: 4s;
}
.box:hover{
    background: red;
    border-radius: 15px;
    border:4px solid black;
    color: yellow;
    padding: 15px;
}
```
</details>