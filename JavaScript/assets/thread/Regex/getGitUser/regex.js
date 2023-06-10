function getFullURL() {
  const gitURL = document.querySelector("input[placeholder='gitURL']").value;
  getUserNamefromURL(gitURL);
}

function getUserNamefromURL(url) {
  const myregex = /[/](\w+)/gi;
  const search = url.match(myregex);
  console.warn(search);
  const userName = search[1];
  const UserNameOnly = userName.charAt(1) + userName.substr(2);
  console.warn(UserNameOnly);

  //👉 exceto
  function exceto(arr, keys) {
    return arr.filter((val, ind) => {
      return typeof keys === `number` ? ind !== keys : keys.indexOf(ind) === -1;
    });
  }
  const afterExeto = exceto(search, [0, 2, 3, 4].join(" "));
  console.log(`afterExeto:`, afterExeto);
  console.log(`afterExeto:`, afterExeto[0]);
  console.log(`afterExeto:`, afterExeto[1]);
  console.log(
    `afterExeto char and sub:`,
    afterExeto[1].charAt(1) + afterExeto[1].substr(2)
  );
  console.log(`afterExeto:`, afterExeto[2]);

  document.querySelector("#userName").innerHTML = UserNameOnly;
  document.querySelector("#userDir").innerHTML = exceto(search, [0, 2, 3, 4]);
}

function par() {
  let x = "";
  for (let i = 0; i < 10; i++) {
    x += i;
  }
  return x;
}

document.getElementById("par").innerHTML = par();
