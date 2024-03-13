const { UNSAFE_RouteContext } = ReactRouterDOM


const BlogPosts = {
  'first-blog-post': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.',
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6',
  },
}




class Post extends React.Component {
  static contextType = UNSAFE_RouteContext

  componentDidMount() {
   /*  let { id } = useParams();
    this.fetchData(id); */
    this.montou()
}


  constructor(props) {
    super(props)

    this.getRouterParams = this.getRouterParams.bind(this)
  }

  getRouterParams() {
    //let { sessionId } = useParams();
    let { matches } = this.context
    let routeMatch = matches[matches.length - 1]
    const params = routeMatch ? routeMatch.params : {}
    console.log(params.slug)
  }
montou(){
  console.log(`montado`)
  fetch('/src/db/data.json').then(res => res.json()).then((data) => {
    console.log(data.posts[0])
  })
}


  render() {
    console.warn(UNSAFE_RouteContext)
    let { matches } = this.context
    let routeMatch = matches[matches.length - 1]
    const params = routeMatch ? routeMatch.params : {}
    console.log(params.slug)

    const post = BlogPosts[params.slug];
    const {title, description} = post


    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
      <p className="font-bold">{description}</p>
        <button onClick={this.getRouterParams}>click get Params</button>
      </div>
    )
  }
}
