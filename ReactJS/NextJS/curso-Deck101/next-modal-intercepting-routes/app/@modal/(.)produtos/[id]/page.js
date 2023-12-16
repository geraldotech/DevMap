import ProdutoFrame from '@/app/components/ProdutoFrame'
import Modal from '@/app/components/Modal'

async function getProdutoById(produtoId) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${produtoId}`
  )
  const res = await req.json()
  return res
}

// Intercepting Routes
const ModalProdutos = async ({ params }) => {
  const produto = await getProdutoById(params.id)
  return (
    <Modal>
      <ProdutoFrame {...produto} />
    </Modal>
  )
}

export default ModalProdutos
