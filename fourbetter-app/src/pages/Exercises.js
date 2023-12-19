import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Exercisepage() {
    const texts = [{id:1, value:"test"},{id:2, value:"test2"}];
  return (
    <div>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Exercises</h1>
          </div>
        </header>
        <main>
          <p>Welcome to the exercises page.</p>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {texts.map(text =>{
                return (
                    <div key={text.id}>
                        <Link to = {{
                            pathname: `/exercises/${text.id}`,
                            state: {texts: text}
                        }}>Exercise {text.id} </Link>
                    </div>
                )

                    }
                )
            }
          </div>
        </main>
    </div>
  );
}

export default Exercisepage;
