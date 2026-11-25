'use client'
import { useState } from 'react'
import Link from 'next/link'
import { categorias } from '@/lib/categorias'

export default function MenuMovil() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className="hbtn"
        onClick={() => setOpen((v) => !v)}
        style={{ cursor: 'pointer' }}
        aria-expanded={open}
        aria-label="Abrir menú de categorías"
      >
        ☰ Menú
      </button>
      {open && (
        <div className="hpan" onClick={() => setOpen(false)}>
          {categorias.map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--hln)',
                font: '700 14px var(--bf), sans-serif',
              }}
            >
              {c.nombre}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
