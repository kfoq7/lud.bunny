import Link from 'next/link'
import Image from 'next/image'

interface Props {
  id: string
  title: string
  img: string
}

export default function ProductItem({ id, title, img }: Props) {
  return (
    <Link
      href={`/products/${id}`}
      className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
    >
      <div className="aspect-[389/500] rounded w-full h-full relative">
        <Image
          src={img}
          alt={`Product - ${title}`}
          layout="fill"
          objectFit="cover"
          style={{ viewTransitionName: `products-${id}` }}
        />
      </div>
    </Link>
  )
}
