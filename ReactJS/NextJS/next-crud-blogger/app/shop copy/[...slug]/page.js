// https://www.youtube.com/watch?v=g7q0RG1fhLk
// [[...slug]] entre dois [[]] == params de rota é opcional
export default function Page({ params }) {
  console.log(params.slug)
  return <>Dados dinâmico {params.slug}</>
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug}`,
    description: `${params.slug}`,
  }
}
