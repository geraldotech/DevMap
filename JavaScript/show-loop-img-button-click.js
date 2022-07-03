//html
 <button onclick=
  "show_image('https://www.w3schools.com/jsref/klematis.jpg',
               500, 
               500, 
               'Google Logo');">Add Google Logo</button> 


//js

<script>
    function show_image(src, width, height, alt) {
      var img = document.createElement("img");
      img.src = src;
      img.width = width;
      img.height = height;
      img.alt = alt;
  
      // This next line will just add it to the <body> tag
      document.body.appendChild(img);
  }
  </script>
