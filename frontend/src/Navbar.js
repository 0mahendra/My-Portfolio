import React from "react";

const Navbar = ()=>{

    return (
        <>
        
         <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png" class="flex m-auto border rounded-full w-12 h-12" />


      <span class="ml-3 text-xl text-white">Mahendra Singh</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-xl text-white hover:text-2xl hover:text-gray-900 hover:text-white " href="https://www.linkedin.com/in/mahendra-singh-995063249/" > LinkedIn</a>
      <a class="mr-5 text-white hover:text-2xl hover:text-gray-900 hover:text-white " href="https://github.com/0mahendra">GitHub</a>
      <a class="mr-5 text-white hover:text-2xl hover:text-gray-900 hover:text-white" href="https://www.instagram.com/mahendra_singh2001/">Instagram</a>
    </nav>
    
  </div>
</header>
        </>
    )
}

export default Navbar;