export function Company({children}){
  return <>{children}</>
}


export function CompanyButton({toggle}){
  return <button onClick={toggle}>Company Button</button>
}


export function CompanyMenu({items = [1,2,3], on}){
  return (
    <nav>
        {on && items?.map((value) => {
          return <li key={value}>{value}</li>
        })}
    </nav>
  )
}