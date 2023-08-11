import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between gap-3 text-base">
        <Link href="/" className="group">
          <h2 className="font-semibold tracking-tighter text-2xl">Lud.bunny</h2>
        </Link>

        <div className="hidden items-center gap-14 md:flex">
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>

          <div className="flex items-end gap-4">
            <button className="">Login</button>
            <Link href="/login">register</Link>
          </div>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <div className="bg-red-500 p-4"></div>
        </div>
      </div>
    </nav>
  )
}
