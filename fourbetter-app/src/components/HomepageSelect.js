/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Little Hungry Caterpillar',
      href: '/exercises/1',
      price: 'Level 1',
      imageSrc: 'https://cdn.kobo.com/book-images/9c5e4a71-0d13-4d12-85b1-9132cda74edd/1200/1200/False/the-very-hungry-caterpillar-and-other-stories-1.jpg',
      imageAlt: 'Little Hungry Caterpillar',
    },
    {
      id: 2,
      name: 'Narnia',
      href: '/exercises/2',
      price: 'Level 3',
      imageSrc: 'https://m.media-amazon.com/images/I/71bNkuj4EbL._AC_UF894,1000_QL80_.jpg',
      imageAlt: 'Narnia',
    },
    {
      id: 3,
      name: 'James and the Giant Peach',
      href: '/exercises/3',
      price: 'Level 2',
      imageSrc: 'https://marvel-b1-cdn.bc0a.com/f00000000212114/www.lmc.edu/_images/enews-article/james-giant-peach.jpg',
      imageAlt: 'James and the Giant Peach',
    },
    {
      id: 4,
      name: 'Stuart Little',
      href: '/exercises/4',
      price: 'Level 2',
      imageSrc: 'https://images.justwatch.com/poster/182755778/s592/stuart-little-the-animated-series',
      imageAlt: 'Stuart Little',
    },
    // More products...
  ]
  
  export default function HomepageSelect() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8 lg:py-4">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{ width: '440px', height: '440px' }}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  