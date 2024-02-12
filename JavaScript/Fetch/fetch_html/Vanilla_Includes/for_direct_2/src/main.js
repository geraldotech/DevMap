const tag = Array.from(document.querySelectorAll('div[include]'))

for (let i = 0; i < tag.length; i++) {
  includes(tag[i].getAttribute('include'), tag[i])
}

async function includes(path, el) {
  try {
    const req = await fetch(path)
    if (req.status == 200) {
      const res = await req.text()
      el.innerHTML = res
    }
  } catch (err) {
    console.log(err)
  }
}
