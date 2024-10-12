// components/Loading.jsx
import React from 'react';

function LoadingPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <svg className="animate-spin h-10 w-10 text-grey-950 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h1 className="text-xl font-medium text-gray-200">Cargando...</h1>
      </div>
    </div>
  );
}

export default LoadingPage;