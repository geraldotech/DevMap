const { Outlet } = ReactRouterDOM

class Posts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div style={{ padding: 20 }}>
        <h1 className="text-lg font-bold">Posts Page</h1>
        <Outlet />
      </div>
    )
  }
}
