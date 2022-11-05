        // Destructuring
        function MouseMove(event) {
            /*  não faça assim
            const clientX = event.clientX;
            const clientY = event.clientY; 
            const x = event.clientX;
            const y = event.clientY;
    
           */
          //fazer assim - o nome da var dele ser igual
            const { clientX, clientY } = event;
            console.log(clientX, clientY);
          }
    
          // mais resumindo ainda - destructiring directo no argumento
          function MouseMove2({clientX, clientY}){
              // cuidado para não tirar o valor real clientX = "oi"
            console.log(clientX, clientY);
          }
    
          document.documentElement.addEventListener("mousemove", MouseMove);
    
    // e.g com Arrays
        const frutas = ["Banana", "Uva"];
          // opt 1
        const fruta1 = frutas[0];
        console.log(fruta1);
        // opt2 - better
        const [fruta11, fruta2] = frutas;
        console.log(fruta11, fruta2)