// pages/404.js
import Link from 'next/link';

export default function NotFount() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-950 tracking-widest">404</h1>
      <div className="bg-gray-950 px-2 text-sm rounded rotate-12 absolute">
        Página no encontrada
      </div>
      <div className="mt-5">
        <p className="text-xl font-base text-gray-600 rounded-lg m-5">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        {/* <img src="/images/error.png" alt="Error" className="w-1/2 mx-auto"/> */}
      </div>
      
      <Link href="/">
        <span className="mt-5 px-5 py-2 bg-gray-950 text-white rounded-lg hover:bg-gray-700 transition duration-300">
          Volver a la página principal
        </span>
      </Link>
    </div>
  );
}
