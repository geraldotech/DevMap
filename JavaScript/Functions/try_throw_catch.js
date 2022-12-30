function numero(val) {
  try {
    if (val == null) throw "vazio";
    if (val == "") throw "string vazio";
    if (val == 4) throw "four";
    if (val == "logi") throw "logitech";
    if (val) throw val;
  } catch (err) {
    console.log(err);
  }
}
numero("ge");
