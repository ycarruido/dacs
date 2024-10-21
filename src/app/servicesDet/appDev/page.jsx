import React from 'react';
// Material Icons
import ServicesCTA from '../../../components/ui/ServicesCTA/ServicesCTA';

import FeaturesApps from '../../../components/ui/FeaturesApps/FeaturesApps';

function AppDev() {
  return (
    <div className="container mx-auto px-8 py-12">

      {/* Título principal */}
      <div className="text-left mb-12">
      <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">Desarrollo de Aplicaciones</p>
        <p className="mt-4 text-gray-600">
          Enfocados en construir aplicaciones y sitios web modernos, creamos soluciones que permiten a tu negocio destacarse. Utilizamos tecnologías avanzadas para ofrecer productos funcionales, optimizados y escalables.
        </p>
      </div>

      {/* Imagen principal */}
      <div className="mb-12 bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 py-2">
        <img 
          src="/img/webDev2.webp" 
          alt="Desarrollo Web" 
          className="w-full h-auto rounded-2xl shadow-lg hidden sm-md:hidden lg:block" // Solo se muestra en pantallas grandes
        />
        <img 
          src="/img/webDev3.webp" 
          alt="Desarrollo Web" 
          className="w-full h-auto rounded-2xl shadow-lg hidden sm-md:hidden lg:block" // Solo se muestra en pantallas grandes
        />
        <img 
          src="/img/webDev4.webp" 
          alt="Desarrollo Web" 
          className="w-full h-auto rounded-2xl shadow-lg hidden md:block lg:block" // Mostrar en pantallas medianas y grandes
        />
        <img 
          src="/img/webDev5.webp" 
          alt="Desarrollo Web" 
          className="w-full h-auto rounded-2xl shadow-lg block" // Mostrar en todas las pantallas
        />
      </div>



      {/* Descripción detallada */}
      <div className="mt-12 text-left">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-10">Soluciones inteligentes</p>
        <p>
          <strong>◻️ En nuestro equipo, </strong> nos dedicamos a crear soluciones hechas a la medida, que van desde el desarrollo de aplicaciones web simples de una sola página (SPA), perfectas para experiencias rápidas y dinámicas, hasta aplicaciones web progresivas (PWA), que combinan lo mejor de las aplicaciones nativas con las web.
        </p>

        <p className='py-2'>
        <strong>◻️ No importa si tu proyecto es pequeño</strong>, una startup que va en crecimiento, o una empresa que ya está bien establecida. Estamos listos para ofrecerte soluciones sólidas, escalables y pensadas para evolucionar junto con tu negocio. Nuestras aplicaciones no solo cumplen con lo que necesitas ahora, sino que están preparadas para mantenerse competitivas en un entorno que siempre está cambiando.
        </p>

        <p className='py-2'>
          <strong>◻️ Lo que realmente nos diferencia </strong> es nuestra habilidad para adaptarnos a las últimas tecnologías. Siempre estamos al tanto de las nuevas tendencias en desarrollo web, asegurándonos de que lo que te entreguemos no solo sea útil hoy, sino que siga siendo eficiente y relevante en el futuro. Además, nuestras soluciones tienen una arquitectura flexible, lo que las hace fáciles de mantener y mejorar a medida que tu negocio crece, ahorrándote tiempo y dinero en el largo plazo.
        </p>
        <p className='py-2'>
          <strong>◻️ También nos tomamos el tiempo de conocer a fondo las necesidades de tu negocio. </strong> Esto nos permite crear aplicaciones que realmente se alineen con tus metas, y que ofrezcan una experiencia de usuario que invite a la interacción y mantenga el interés de tus clientes. Ya sea que quieras optimizar tus procesos internos, atraer nuevos usuarios o mejorar la experiencia digital de tus clientes, tenemos el conocimiento y la experiencia para llevar tu proyecto al siguiente nivel.
        </p>
        <p className='pt-2 pb-10'>
          Te invitamos a contactarnos para una consulta personalizada. Nos encantará escuchar sobre tu proyecto, entender lo que necesitas y ofrecerte una propuesta detallada y competitiva. Déjanos ayudarte a hacer crecer tu negocio con soluciones tecnológicas modernas y efectivas.
        </p>
      </div>





      {/* Sección de Frameworks */}
      <div className="mt-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-10">Marcos de Desarrollo</p>

        <div className="space-y-8">
          {/* React */}
          <div className="flex items-start">
            <div className="w-12 h-12 mr-4">
              <svg fill="#09244B" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>react</title> <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path> </g></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">React</h3>
              <p className="text-gray-600 mt-2">
                React es uno de los frameworks más populares para construir interfaces de usuario dinámicas y eficientes. Ideal para aplicaciones de una sola página (SPA), permite crear experiencias rápidas y optimizadas.
              </p>
            </div>
          </div>

          {/* Angular */}
          <div className="flex items-start">
          <div className="w-12 h-12 mr-4">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#09244B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>angular</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2.5l8.84,3.15L19.5,17.35,12,21.5,4.5,17.35,3.16,5.65,12,2.5m0,2.1L6.47,17H8.53l1.11-2.78h4.7L15.45,17H17.5L12,4.6m1.62,7.9H10.39L12,8.63Z"></path> </g></svg>
          </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Angular</h3>
              <p className="text-gray-600 mt-2">
                Angular es un framework robusto para el desarrollo de aplicaciones web de gran escala. Utilizado principalmente en proyectos corporativos, permite la creación de soluciones estructuradas y mantenibles.
              </p>
            </div>
          </div>

          {/* Microsoft SharePoint */}
          <div className="flex items-start">
            <div className="w-14 h-14 mr-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84647 16H4.66655C4.29842 16 4 15.7016 4 15.3335V8.66653C4 8.2984 4.29842 7.99998 4.66655 7.99998H6.89935C7.18444 5.32976 9.44458 3.25 12.1905 3.25C14.9532 3.25 17.2243 5.35539 17.4866 8.04926C19.4888 8.68036 20.9405 10.551 20.9405 12.762C20.9405 15.2708 19.0705 17.3428 16.6483 17.6603C16.2407 19.4305 14.6556 20.75 12.7619 20.75C10.5593 20.75 8.7738 18.9645 8.7738 16.7619C8.7738 16.5013 8.79878 16.2466 8.84647 16ZM15.9384 7.82184C15.59 6.07024 14.0444 4.75 12.1905 4.75C10.2742 4.75 8.68729 6.16053 8.41147 7.99998H11.3335C11.7016 7.99998 12 8.2984 12 8.66653V9.86164C12.8867 8.64079 14.3188 7.84163 15.9384 7.82184ZM12 14.3924V15.3335C12 15.7016 11.7016 16 11.3335 16H10.3926C10.3155 16.2402 10.2738 16.4962 10.2738 16.7619C10.2738 18.136 11.3878 19.25 12.7619 19.25C14.0866 19.25 15.17 18.2143 15.2458 16.909C15.2486 16.8604 15.25 16.8114 15.25 16.7619C15.25 15.3878 14.136 14.2738 12.7619 14.2738C12.5318 14.2738 12.3101 14.3048 12.1003 14.3625C12.0666 14.3718 12.0331 14.3818 12 14.3924ZM16.7004 16.1311C16.398 14.2283 14.7498 12.7738 12.7619 12.7738C12.6941 12.7738 12.6266 12.7755 12.5596 12.7789L12.5595 12.762C12.5595 10.8618 14.0999 9.32147 16 9.32147C16.2144 9.32147 16.4236 9.34098 16.626 9.37814C18.2272 9.67206 19.4405 11.0761 19.4405 12.762C19.4405 14.4221 18.2647 15.8076 16.7004 16.1311ZM6.46824 11.4918C6.56753 11.6612 6.70423 11.8057 6.86787 11.9142C7.08025 12.0538 7.306 12.1718 7.54178 12.2666C7.83816 12.3913 8.06255 12.4918 8.21493 12.568C8.347 12.6303 8.46766 12.7144 8.57189 12.8167C8.65569 12.8999 8.70239 13.0133 8.70141 13.1314C8.70519 13.3011 8.6153 13.459 8.4675 13.5424C8.25651 13.6527 8.01935 13.703 7.78178 13.688C7.52508 13.684 7.2703 13.6432 7.0252 13.5668C6.77927 13.4984 6.5472 13.3876 6.33948 13.2392V14.163C6.55679 14.2573 6.78493 14.3244 7.01872 14.3626C7.2956 14.4095 7.576 14.4325 7.85682 14.4312C8.16981 14.436 8.48156 14.3907 8.78026 14.2971C9.03421 14.2185 9.25943 14.067 9.42789 13.8613C9.59689 13.6376 9.68258 13.362 9.67017 13.0819C9.67915 12.8562 9.62647 12.6323 9.51779 12.4342C9.41179 12.2596 9.26581 12.1125 9.09188 12.0053C8.86221 11.8665 8.62107 11.7476 8.37111 11.6499C8.34481 11.6369 8.31755 11.6259 8.28959 11.6171C8.03562 11.5122 7.84514 11.4281 7.71815 11.3649C7.60403 11.3116 7.50072 11.2377 7.41339 11.147C7.33945 11.07 7.29844 10.9673 7.2991 10.8605C7.29944 10.6846 7.4042 10.5256 7.56577 10.4559C7.77503 10.3539 8.00623 10.3049 8.23892 10.3135C8.45957 10.313 8.67947 10.3394 8.89378 10.3919C9.09129 10.4383 9.28027 10.5154 9.45378 10.6205V9.74433C9.05445 9.61434 8.63536 9.55566 8.21568 9.57099C7.89655 9.56756 7.57902 9.61673 7.27586 9.71651C7.00986 9.8005 6.77193 9.9557 6.58786 10.1653C6.41269 10.3746 6.32062 10.641 6.32919 10.9139C6.32409 11.1153 6.37204 11.3146 6.46824 11.4918Z" fill="#09244B"></path> </g></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Microsoft SharePoint</h3>
              <p className="text-gray-600 mt-2">
                SharePoint es una plataforma colaborativa de Microsoft que facilita la gestión de documentos y la colaboración en equipo. Es ideal para empresas que necesitan soluciones internas y flujos de trabajo bien organizados.
              </p>
            </div>
          </div>

          {/* Vue.js */}
          <div className="flex items-start">
          <div className="w-10 h-10 mr-4">
            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>vue_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Logo" transform="translate(-816.000000, -144.000000)" fill-rule="nonzero"> <g id="vue_fill" transform="translate(816.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M19.7071,3.93958 C20.1271,3.22553 21.0465,2.98718 21.7605,3.40721 C22.4325941,3.80253235 22.6832183,4.64015893 22.3602212,5.33264345 L22.2929,5.46064 L13.2929,20.7606 C13.0234,21.2188 12.5315,21.5001 12,21.5001 C11.5168182,21.5001 11.0663636,21.2676207 10.7859767,20.8810992 L10.7071,20.7606 L1.70709,5.46062 C1.28706,4.74657 1.52541,3.82722 2.23946,3.40719 C2.91150706,3.01186765 3.76542042,3.19985159 4.21373713,3.81852642 L4.2929,3.93956 L12,17.0416 L19.7071,3.93958 Z M14.8272,3.93527 C15.2472,3.22122 16.1666,2.98287 16.8806,3.40289 C17.5526941,3.79821235 17.8033183,4.63584779 17.4803212,5.32833335 L17.413,5.45633 L13.2929,12.4605 C13.0234,12.9187 12.5315,13.2 12,13.2 C11.5168182,13.2 11.0663636,12.9675207 10.7859767,12.5809992 L10.7071,12.4605 L6.589,5.45974 C6.16897,4.74569 6.40732,3.82634 7.12137,3.40631 C7.79341706,3.01098765 8.64733042,3.19886696 9.09563879,3.81764642 L9.1748,3.93868 L12,8.74151 L14.8272,3.93527 Z" id="形状" fill="#09244B"> </path> </g> </g> </g> </g></svg>
          </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Vue.js</h3>
              <p className="text-gray-600 mt-2">
                Vue.js es un framework progresivo para construir interfaces de usuario. Ofrece flexibilidad y es fácil de integrar en proyectos existentes, lo que lo hace una excelente opción para aplicaciones modulares.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="relative w-screen left-1/2 -translate-x-1/2 pt-10 pb-5">
        <ServicesCTA
          strText="Descubra soluciones de desarrollo front-end a medida para crear interfaces atractivas y funcionales que impulsen la interacción del usuario. Contáctenos hoy mismo para obtener una evaluación detallada y un presupuesto personalizado para su proyecto."
          strQ="¿Buscas una solución Front-End para tu empresa?"
          strBtn="Obtenga asesoramiento"
          bgColor="bg-black"
        />
      </div>

    
      <FeaturesApps />

    </div>
  );
}

export default AppDev;

