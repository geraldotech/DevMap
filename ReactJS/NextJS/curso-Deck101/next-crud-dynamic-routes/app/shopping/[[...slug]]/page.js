export default function Page({ params }) {
  console.log(params.slug)
  return <>Dados dinâmico: {params.slug}</>
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug}`,
    description: `${params.slug}`,
  }
}
