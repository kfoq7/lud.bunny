import Image from 'next/image'
import Layout from '@/layouts/section'
import { products } from '@/data/product'
import type { GetServerSidePropsContext } from 'next'
import type { Product } from '@/types'

interface Props {
  productInfo: Product
}

export default function Product({ productInfo }: Props) {
  return (
    <Layout title={productInfo.id}>
      <main className="m-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">
          <div className="flex flex-col mb-10">
            <picture className="mb-8 w-full relative">
              <div className="aspect-[389/500] h-full w-full object-cover rounded max-w-full">
                <Image
                  src={productInfo.img}
                  alt={`Product - ${productInfo.title}`}
                  layout="fill"
                  style={{ viewTransitionName: `products-${productInfo.id}` }}
                />
              </div>
            </picture>

            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
            >
              <svg
                className="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
              </svg>
              Comprar ahora
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({
  params
}: GetServerSidePropsContext) {
  const { product } = params ?? {}
  const productInfo = products.find(p => p.id === product)

  if (!productInfo) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      productInfo
    }
  }
}
