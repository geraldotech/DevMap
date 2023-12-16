import ProdutoFrame from '@/app/components/ProdutoFrame'

async function getProdutoById(produtoId) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${produtoId}`
  )
  const res = await req.json()
  return res
}

const Produto = async ({ params }) => {
  const produto = await getProdutoById(params.id)
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-500">
        <ProdutoFrame {...produto} />
      </div>
    </div>
  )
}

export default Produto
