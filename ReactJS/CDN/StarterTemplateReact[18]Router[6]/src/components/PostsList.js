const {Link} = ReactRouterDOM

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


class PostsList extends React.Component {
  render() {
   return (
    <div>
    <h1>Lista de todos os posts</h1>
    <ul>
    {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <Link to={slug} relative="path" key={slug} className="font-bold p-3">
          <h3>{title}</h3>
        </Link>
      ))}
    </ul>
  </div>
   )
  }
}
