<script lang="ts">
  import { base } from '$app/paths';
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
            <a href="{base}/shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
            <a href="{base}/about" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
            <a href="{base}/contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
          </div>
      </div>
  </nav>

  <!-- About Section -->
  <main class="container mx-auto px-6 py-12">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- About Text -->
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-gray-800">About our shop</h1>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <!-- About Images -->
      <div class="grid grid-cols-2 gap-4">
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
          src="Assets/product.png" 
          alt="HomePod" 
          class="relative w-full max-w-md md:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-500"
        />
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
          src="Assets/product.png" 
          alt="HomePod" 
          class="relative w-full max-w-md md:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-500"
        />
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
          src="Assets/product.png" 
          alt="HomePod" 
          class="relative w-full max-w-md md:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-500"
        />
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
          src="Assets/product.png" 
          alt="HomePod" 
          class="relative w-full max-w-md md:max-w-lg xl:max-w-xl transform hover:scale-105 transition-all duration-500"
        />
        </div>
      </div>
    </div>
  </main>
</div>
