 <!-- 1. Define some markup -->
    <center><button data-clipboard-text="http:/somelink.jpg">Copiar Link Download</button></center>
    <button data-clipboard-text="2">Copy 2</button>
    <button data-clipboard-text="3">Copy 3</button>


 <!-- 2. Include library in header-->
  <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>

 <!-- 3. Instantiate clipboard by passing a list of HTML elements -->
    <script>
    var btns = document.querySelectorAll('button');
    var clipboard = new ClipboardJS(btns);

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>
