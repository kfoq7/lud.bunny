import ProductItem from '@/components/product-item'
import Layout from '@/layouts/section'
import { products } from '@/data/product'

export default function Home() {
  return (
    <Layout>
      <div className="m-auto max-w-screen-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-4">
          {products.map(({ id, title, img }) => (
            <ProductItem key={id} id={id} title={title} img={img} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
