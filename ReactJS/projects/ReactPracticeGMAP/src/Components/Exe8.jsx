export default function Exe8({ children, min }) {
  
  if (children) {
    let size = children.length


    return size >= min ? (
      <div className="container">{children}</div>
    ) : (
      <div className="container">
        <p>Content Requer pelo menos {min} caracteres</p>
        <p>
          Digitou {size}, faltam {min - size}
        </p>
      </div>
    )
  }
}
