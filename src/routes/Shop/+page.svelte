<script lang="ts">
    
    let rating = $state(4.3);
    let totalRatings = $state(526);
    let price = $state(1234.56);
  </script>
  
  <div class="min-h-screen bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300">
    <!-- Navigation -->
    <nav class="p-4 bg-white/10 backdrop-blur-sm">
      <div class="container mx-auto flex justify-between items-center px-6">
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
          <a href="/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
          <a href="/" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
          <a href="/About" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
          <a href="/Contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  
    <!-- Main Content -->
    <main class="container mx-auto px-6 py-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Product Image -->
        <div class="relative group">
          <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-300 to-violet-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-500"></div>
          <div class="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8">
            <img
              src="Assets/product.png"
              alt="HomePod"
              class="w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
  
        <!-- Product Details -->
        <div class="space-y-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-800 mb-2">HomePod</h1>
            <p class="text-gray-600">by Shopify</p>
          </div>
  
          <!-- Price -->
          <div class="text-3xl font-bold text-gray-800">
            ₱{price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
          </div>
  
          <!-- Rating -->
          <div class="flex items-center space-x-2">
            <div class="flex text-yellow-400">
              {#each Array(5) as i}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill={i < rating ? 'currentColor' : 'none'}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              {/each}
            </div>
            <span class="text-gray-600">{rating} ({totalRatings} ratings)</span>
          </div>
  
          <!-- Description -->
          <div class="space-y-4">
            <h2 class="font-semibold text-gray-800">Description</h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
  
          <!-- Note -->
          <div class="bg-white/30 backdrop-blur-sm rounded-lg p-4">
            <h2 class="font-semibold text-gray-800 mb-2">Note</h2>
            <p class="text-gray-600 text-sm">
              Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
            </p>
          </div>
  
          <!-- Buy Button -->
          <button class="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300">
            <span class="font-semibold">Buy Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  </div>
  