import PropTypes from 'prop-types'

function Item({ marca, lacamento }) {
  return (
    <>
      <li>
        {marca} - {lacamento}
      </li>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  lacamento: PropTypes.number,
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  lacamento: 0,
}

export default Item
