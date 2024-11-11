<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>
<style>
  .image-fit {
    object-fit: contain; /* Corrected property */
    width: 100%;
    height: 100%;
  }

  .active-link {
    color: #7C3AED;
    font-weight: bold;
  }

  nav {
    z-index: 50;
  }

  .mobile-menu {
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-size: 2rem; /* base font-size for h1 */
    font-weight: bold;
  }

  p {
    font-size: 1rem; /* Slightly larger font-size for paragraph */
    color: #000000; /* Keep text color neutral */
    font-weight: bold;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2.5rem; /* larger screens */
    }
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: bold;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3rem; /* for even larger screens */
    }
    p {
      font-size: 1.3rem;
      line-height: 2.25rem;
      font-weight: bold;
    }
  }
</style>


<div class="min-h-screen bg-gradient-to-b from-[#ACB1D6] via-[#E1AFD1] to-[#7469B6] flex flex-col overflow-hidden">
  <!-- Navigation -->
  <nav class="bg-gradient-to-r from-[#FFE6E6] to-[#FFE6E6] backdrop-blur-sm border-b border-white/20">
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
          <!-- Logo -->
          <div class="flex items-center">
            <img
            src="{base}/Assets/logo.png" 
            alt="Shopify"
              class="h-6 sm:h-8 w-auto pt-3px"
            />
        
          </div>
          <div class="md:hidden">
            <button 
      class="md:hidden p-2"
      on:click={toggleMenu}
      aria-label="Toggle navigation menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
      </svg>
    </button>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
            <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
            <a href="{base}/About" class="text-violet-800 hover:text-violet-800 transition-colors font-bold">About</a>
            <a href="{base}/Contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
          </div>
      </div>
      {#if isMenuOpen}
    <div class="md:hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md">
      <div class="space-y-4 px-6 py-4">
        <a href="{base}/" class="block text-gray-700 hover:text-violet-800 transition-colors"
           class:active-link={$page.url.pathname === `${base}/`}>
          Home
        </a>
        <a href="{base}/Shop" class="block text-gray-700 hover:text-violet-800 transition-colors"
           class:active-link={$page.url.pathname === `${base}/Shop`}>
          Shop
        </a>
        <a href="{base}/About" class="block text-violet-800 hover:text-violet-800 transition-colors font-bold"
           class:active-link={$page.url.pathname === `${base}/About`}>
          About
        </a>
        <a href="{base}/Contact" class="block text-gray-700 hover:text-violet-800 transition-colors"
           class:active-link={$page.url.pathname === `${base}/Contact`}>
          Contact
        </a>
      </div>
    </div>
  {/if}
  </nav>

  <!-- About Section -->
  <main class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex items-center">
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
      <!-- About Text -->
      <div class="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800">About our shop</h1>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Welcome to SoundSphere, where we elevate everyday moments with premium wireless audio solutions. With over a decade in Bluetooth technology, we design sleek, high-performance speakers and gadgets for music lovers, outdoor enthusiasts, and tech professionals. Each product is rigorously tested to ensure top-tier sound quality, durability, and customer satisfaction. At SoundSphere, we’re more than devices—we’re about creating connections and amplifying experiences through innovative wireless technology.
        </p>
      </div>

      <!-- About Images -->
      <div class="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2 max-w-lg mx-auto w-full">
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 1.jpg" 
            alt="HomePod" 
            class="relative h-32 sm:h-40 md:h-48 image-fit rounded-lg transform hover:scale-105 transition-all duration-500"/>
          </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 2.jpg" 
            alt="HomePod" 
            class="relative h-32 sm:h-40 md:h-48 image-fit rounded-lg transform hover:scale-105 transition-all duration-500"/>
          </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 3.jpg" 
            alt="HomePod" 
            class="relative h-32 sm:h-40 md:h-48 image-fit rounded-lg transform hover:scale-105 transition-all duration-500"/>
          </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 4.jpg" 
            alt="HomePod" 
            class="relative h-32 sm:h-40 md:h-48 image-fit rounded-lg transform hover:scale-105 transition-all duration-500"/>
          </div>
      </div>
    </div>
  </main>
</div>
