<script lang="ts">
  import { base } from '$app/paths';
</script>

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

          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
            <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
            <a href="{base}/About" class="text-violet-800 hover:text-violet-800 transition-colors font-bold">About</a>
            <a href="{base}/Contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
          </div>
      </div>
  </nav>

  <!-- About Section -->
  <main class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 flex items-center">
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
      <!-- About Text -->
      <div class="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-800">About our shop</h1>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Welcome to Shopify, where we transform everyday moments into extraordinary experiences through cutting-edge 
          Bluetooth technology. Our journey began with a simple vision: to create premium wireless audio solutions that seamlessly 
          integrate into your lifestyle, whether you're an outdoor enthusiast, a music lover, or a tech-savvy professional. 
          With over a decade of expertise in wireless technology, our carefully curated collection of Bluetooth speakers and 
          smart gadgets combines sleek design, exceptional sound quality, and innovative features that push the boundaries of 
          what's possible. We take pride in our rigorous testing processes and commitment to customer satisfaction, 
          ensuring that each product that bears our name meets the highest standards of performance and durability. 
          At TechWave Audio, we're not just selling devices – we're crafting connections, amplifying experiences, 
          and bringing people together through the power of wireless technology.
        </p>
      </div>

      <!-- About Images -->
      <div class="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2 max-w-lg mx-auto w-full">
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 1.jpg" 
            alt="HomePod" 
            class="relative w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg transform hover:scale-105 transition-all duration-500"/>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 2.jpg" 
            alt="HomePod" 
            class="relative w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg transform hover:scale-105 transition-all duration-500"/>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 3.jpg" 
            alt="HomePod" 
            class="relative w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg transform hover:scale-105 transition-all duration-500"/>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <img 
            src="{base}/Assets/bluetooth 4.jpg" 
            alt="HomePod" 
            class="relative w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg transform hover:scale-105 transition-all duration-500"/>
        </div>
      </div>
    </div>
  </main>
</div>
