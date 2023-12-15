import Image from 'next/image'
import Produto from './components/Produto'
import Review from './components/Review'
import { Suspense } from 'react'
import ProdutoLoading from './components/ProdutoLoading'
import ReviewLoading from './components/ReviewLoading'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <>
      {/*  <Suspense fallback={<ProdutoLoading />}>
        <Produto />
        </Suspense>
        <br></br>
        <Suspense fallback={<ReviewLoading />}>
        <Review />
      </Suspense> */}

      {/* desse modo é preciso que todos os components emcapsulados carreguem para mostrar */}
      <Suspense fallback={<h1>Carregando em grupo</h1>}>
        <Produto />
        <Review />
      </Suspense>
    </>
  )
}
