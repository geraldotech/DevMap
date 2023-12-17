import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('--- Middleware --- ')

  /*// ⚙️ Headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-ola-do-middle', 'Ola')
  console.log(request.headers)

  // Next response with object
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('x-ola-middleware-2', 'novamente')
  console.log(response)
  return response */

  //✅ redirect and rewrite
  /*   if (request.nextUrl.pathname.startsWith('/about')) {
    console.log(`Entrou no about`)
  }

  // exemplo de redirecionar /about para home page
  return NextResponse.redirect(new URL('/', request.url)) */

  // 🍪 criando instancia para salvar cookies
  /*  
  
  // Next response
  const response = NextResponse.next()
  response.cookies.set('developerdeck101', 'Comentando os videos') 
  return response
  */
  // 🍪 Get, delete and has Cookies
  let dd101Cookie = request.cookies.get('developerdeck101')
  console.log(dd101Cookie)
  console.log(request.cookies.has('developerdeck101'))
  console.log(request.cookies.delete('developerdeck101'))
  console.log(request.cookies.has('developerdeck101'))

  // 🔐 Authentication
  let isAuthenticated = false
  if (!isAuthenticated) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Usuário não logado!',
      })
    )
  }
  return
}

// definir route para escutar

/* export const config = {
  matcher: '/about/:path*',
} */
// mais pasta ? adicionar um array ⬇️

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
