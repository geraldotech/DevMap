function getFullURL() {
  const gitURL = document.querySelector("input[placeholder='gitURL']").value;
  getUserNamefromURL(gitURL);
}

function getUserNamefromURL(url) {
  const myregex = /[/](\w+)/gi;
  const search = url.match(myregex);
  console.warn(search);
  const userName = search[1];

  function exceto(arr, keys) {
    return arr.filter((val, ind) => {
      return typeof keys === `number` ? ind !== keys : keys.indexOf(ind) === -1;
    });
  }

  console.log(`exceto`, exceto(search, [0, 2, 3, 4]));

  const UserNameOnly = userName.charAt(1) + userName.substr(2);
  console.warn(UserNameOnly);

  userName.innerHTML = UserNameOnly;
  document.querySelector("#userName").innerHTML = UserNameOnly;
}
