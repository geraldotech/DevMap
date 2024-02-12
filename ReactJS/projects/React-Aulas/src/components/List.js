import Item from './Item'

export default function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" lacamento={1985} />
        <Item marca="Fiat" lacamento={1964} />
        <Item marca="gol" lacamento={2008} />
        <Item />
      </ul>
    </>
  )
}
