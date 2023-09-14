const video = [
  [
    '732e1d33-01e1-405e-9e2d-19bdc9f265ac',
    {
      title: 'Video 01',
      description: 'Esse é o primeiro video',
      duration: 180,
    },
  ],
]

function list() {
  return Array.from(video).map((videoArr) => {
    const id = videoArr[0]
    const data = videoArr[1]
    return {
      id,
      ...data,
    }
  })
}

console.log(`list fun`, list())

// alternative 2
let ida = [video[0][0]]
console.log(ida)

let id = [video[0][0]]
console.warn(id)
console.warn('toString', id.toString())

let dados = video[0][1]

const videoid = [...id].toString()
console.warn(videoid)

const idToObj = { videoid }

const unique = {
  ...idToObj,
  ...dados,
}
console.log(`Uni`, [unique]) // same the Object.assign below

const uniqueDone = [Object.assign(idToObj, dados)]
console.log(uniqueDone) // same the unique

const uniqueDone2 = [Object.assign({ videoid }, dados)]
console.log(uniqueDone2) // same the unique, convert video id direct
