const tag = Array.from(document.querySelectorAll('div'))

const DEVMODE = false

for (let i = 0; i < tag.length; i++) {
  let getAttr = tag[i].getAttribute('include')
  let hasAttr = tag[i].hasAttribute('include')

  if (hasAttr && getAttr) {
    SmartIncludes(getAttr, tag[i])
  }
}

async function SmartIncludes(path, el) {
  try {
    const res = await fetch(path)

    if (!res.ok) {
      throw {
        message: 'Fail to fetch path: ' + path,
        statusText: res.statusText,
        status: res.status,
      }
    }
    const data = await res.text()
    el.innerHTML = data
  } catch (err) {
    console.error(err)
    console.error(err.message)
    console.error(err.statusText)
  }
}
