System.register([], function (_export, _context) {
  return {
    execute: function () {
      document.body.appendChild(
        Object.assign(document.createElement("p"), {
          textContent: "Mercury is the planet nearest to the sun",
        })
      );
      System.import("test");
      System.import("mercury").then((mercuryModule) => {
        mercuryModule.doAlert();
      });
      /* The doAlert function is exported and can be used like this:
       */
      _export("doAlert", doAlert);

      function doAlert() {
        console.warn("I hear it's quite warm on Mercury");
      }
    },
  };
});
