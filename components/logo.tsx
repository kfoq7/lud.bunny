import Link from 'next/link'
import Image from 'next/image'
// import LogoLudBunny from './icons/logo-lud-bunny'

export default function Logo() {
  return (
    <Link href="/" scroll={false}>
      <Image
        src="/logo-lud-bunny.svg"
        alt="logo lud bunny"
        width={70}
        height={70}
      />
    </Link>
  )
}
