import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Exercisepage() {
  const texts = [
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
  ];
  
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exercises</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          {texts.map((text) => (
            <div key={text.id} className="bg-pink-200 rounded-lg p-4 w-64 h-64">
              <img src={text.imageSrc} alt={text.imageAlt} className="w-full h-full object-cover rounded-md" />
              <Link
                to={{
                  pathname: `/exercises/${text.id}`,
                  state: { textValue: text.name } // Pass only text value as state
                }}
              >
                Exercise {text.id}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Exercisepage;
