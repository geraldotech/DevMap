const layoutShopping = ({ children, products, reviews }) => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {children}
      {products} <br></br>
      {reviews}
    </div>
  )
}

export default layoutShopping
