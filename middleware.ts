import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(process.env.ADMIN_SECRET || '30mas-dev-secret-change-me')

async function authed(req: NextRequest): Promise<boolean> {
  const t = req.cookies.get('admin_token')?.value
  if (!t) return false
  try { await jwtVerify(t, SECRET); return true } catch { return false }
}

// Rutas públicas legítimas del sitio actual. Todo lo demás es basura del pasado
// spam del dominio → se responde 410 Gone (señal fuerte de "eliminar" para Google).
function esRutaLegitima(pathname: string): boolean {
  return (
    pathname === '/' ||
    pathname.startsWith('/articulo/') ||
    pathname.startsWith('/categoria/')
  )
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1) Admin y API: lógica de autenticación existente.
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/')) {
    if (pathname === '/admin/login' || pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
      return NextResponse.next()
    }
    if (await authed(req)) return NextResponse.next()
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // 2) Rutas públicas legítimas → pasan.
  if (esRutaLegitima(pathname)) return NextResponse.next()

  // 3) Cualquier otra ruta = URL basura del pasado → 410 Gone (no 404).
  return new NextResponse(null, { status: 410, headers: { 'X-Robots-Tag': 'noindex' } })
}

// Corre en todo salvo estáticos y archivos con extensión (sitemap.xml, robots.txt, imágenes…).
export const config = {
  matcher: ['/((?!_next/|images/|.*\\.).*)'],
}
