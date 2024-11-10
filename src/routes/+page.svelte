<script lang="ts">
    import { base } from '$app/paths';
    let isMenuOpen = false;
    
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
    };
  </script>
  
  <div class="h-screen bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 flex flex-col overflow-hidden">
    <!-- Navigation -->
    <nav class="bg-gradient-to-r from-violet-200 to-violet-300 backdrop-blur-sm border-b border-white/20">
      <div class="container mx-auto flex justify-between items-center px-6 py-3">
        <!-- Logo -->
        <div class="flex items-center">
            <img
                src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
                alt="Shopify"
                class="h-8 w-auto"
            />
        </div>
  
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
          <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
          <a href="about" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
          <a href="contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
        class="md:hidden p-2"
        on:click={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
        </svg>
      </button>
      </div>
      
      <!-- Mobile Menu -->
      {#if isMenuOpen}
        <div class="md:hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md">
          <div class="hidden md:flex space-x-8">
            <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
            <a href="{base}/shop/" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
            <a href="{base}/about/" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
            <a href="{base}/contact/" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
          </div>
        </div>
      {/if}
    </nav>
  
    <main class="container mx-auto px-16">
      <div class="flex flex-col md:flex-row items-center justify-between h-[calc(100vh-5rem)] gap-8">
        <!-- Text Content -->
        <div class="flex-1 text-left pl-12">
          <h1 class="text-6xl font-bold mb-4 text-gray-800">HomePod</h1>
          <p class="text-xl mb-8 max-w-md text-gray-700">
            is a brand of smart speaker systems developed by Shopify Inc.
          </p>
          <div class="flex gap-4">
            <button class="bg-white/30 hover:bg-white/40 text-gray-700 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md">
            <a href ="{base}/shop">View</a>  
            </button>
            <button class="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
             <a href ="{base}/about"> Buy now</a>
            </button>
          </div>
        </div>
        
        <!-- Image -->
        <div class="flex-1 flex justify-center items-center pr-12">
          <div class="relative group">
            <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
            <img 
              src="{base}/Assets/product.png" 
              alt="HomePod" 
              class="relative w-full max-w-md md:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
  