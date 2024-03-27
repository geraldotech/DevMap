const { UNSAFE_RouteContext } = ReactRouterDOM

class Post extends React.Component {
  static contextType = UNSAFE_RouteContext
  constructor(props) {
    super(props)
    this.state = {
      single: {},
    }
    this.onClickHandleParams = this.onClickHandleParams.bind(this)
  }

  componentDidMount() {
    fetch('/src/db/data.json')
      .then((res) => res.json())
      .then((data) => {
        this.handlerFilter(data.posts)
      })
  }

  componentDidUpdate() {
  }

  onMounted() {
    fetch('/src/db/data.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ single: data })
      })
  }

  handlerFilter(post) {
    let { matches } = this.context
    let routeMatch = matches[matches.length - 1]
    const params = routeMatch ? routeMatch.params : {}
    const single = post.find((post) => post.slug == params.slug)
    this.setState({ single: single })
  }

  onClickHandleParams() {
    //let { sessionId } = useParams();
    let { matches } = this.context
    let routeMatch = matches[matches.length - 1]
    const params = routeMatch ? routeMatch.params : {}
    console.log(params.slug)
    //this.setState({single: 'setado'})
    console.log(this.state.single)
  }

  render() {
    /* call filter */

    return (
      <div style={{ margin: 1 }}>
              

<div className="max-w-screen-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{this.state.single.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{this.state.single.description}</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
    {this.state.single.slug}
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onClickHandleParams}>click get Params</button>
      </div>
    )
  }
}
