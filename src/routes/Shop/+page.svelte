<script lang="ts">
    import { base } from '$app/paths';
    import { FormValidator, type FormData, type FormErrors } from '$lib/formValidator';
    import { updateQuantity } from '$lib/formValidator';

    let rating = $state(4.3);
    let totalRatings = $state(526); 
    let price = $state(1234.56);
    let quantity = $state(0)
  
    const close = new CustomEvent('close')
  

    let formData = $state<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        region: '',
        cityMunicipality: '',
        barangay: '',
        street: '',
        quantity: 1
    });

  let errors = $state<FormErrors>({});
  let showOrderForm = $state(false);
  
  // Helper functions for quantity
  function increaseQuantity() {
        formData.quantity = updateQuantity.increase(formData.quantity);
    }

    function decreaseQuantity() {
      formData.quantity = updateQuantity.decrease(formData.quantity);
    }
  
  function handleSubmit(): void {
      const currentErrors: FormErrors = {};
      
      errors = FormValidator.validateForm(formData);
        
        if (FormValidator.isFormValid(errors)) {
            console.log('Form submitted:', FormData);
            showOrderForm = false;
      }
  }


    // Helper function to create star array for rating
    const stars = Array(5);
  </script>
  
  <div class="min-h-screen bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 flex flex-col overflow-hidden">
    <!-- Navigation -->
    <nav class="bg-gradient-to-r from-violet-200 to-violet-300 backdrop-blur-sm border-b border-white/20">
        <div class="container mx-auto flex justify-between items-center px-6 py-3">
            <!-- Logo -->
            <div class="flex items-center">
                <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
                    alt="Shopify"
                    class="h-8 w-auto"/>
            </div>
  
            <!-- Navigation Links -->
            <div class="hidden md:flex space-x-8">
              <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
              <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
              <a href="{base}/About" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
              <a href="{base}/Contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
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
                src="{base}/Assets/product.png" 
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
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
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
          <button 
          class="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300"
          onclick={() => showOrderForm = true}>
            <span class="font-semibold">Buy Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button> 
        </div>
      </div>
    </main>

    {#if showOrderForm}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-6">Order Form</h2>
          
          <form onsubmit={(e) => { e.preventDefault(); handleSubmit();}} class="space-y-4">
            <!-- ... (paste all the form fields from your order form code) ... -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label 
                  for="firstName" 
                  class="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  bind:value={formData.firstName}
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"/>
                {#if errors.firstName}
                  <p class="text-red-500 text-sm mt-1">{errors.firstName}</p>
                {/if}
              </div>
            
              <div>
                  <label 
                    for="lastName" 
                    class="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    bind:value={formData.lastName}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"/>
                  {#if errors.lastName}
                    <p class="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  {/if}
                </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Email
              <input
                type="email"
                name="Email"
                bind:value={formData.email}   
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"/>
              </label>
              {#if errors.email}
                <p class="text-red-500 text-sm mt-1">{errors.email}</p>
              {/if}
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Phone Number
              <input
                type="tel"
                name="Phone Number"
                bind:value={formData.phoneNumber}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"/>
            </label>
              {#if errors.phoneNumber}
                <p class="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
              {/if}
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Country
              <select
                name="Country"
                bind:value={formData.country}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500">
                <option value="">Select Country</option>
                <option value="PH">Philippines</option>
              </select>
          </label>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Region
              <select
                name="Region"
                bind:value={formData.region}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500">
                <option value="">Select Region</option>
                <option value="NCR">NCR</option>
              </select>
              </label>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">City/Municipality
              <select
                name="City/Municipality"
                bind:value={formData.cityMunicipality}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500">
                <option value="">Select City</option>
                <option value="Manila">Manila</option>
              </select>
              </label>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Barangay
              <select
                name="Barangay"
                bind:value={formData.barangay}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500">
                <option value="">Select Barangay</option>
                <option value="Barangay1">Gordon Heights</option>
              </select>
              </label>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Street Address
            <input
              name="Street Address"
              type="text"
              bind:value={formData.street}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
            />
            </label>
          </div>
          
          <div class="flex items-center justify-between border-t pt-4">
              <div class="flex items-center space-x-2">
                  <button
                    type="button"
                    onclick={() => formData.quantity = Math.max(1, formData.quantity - 1)}
                    class="p-1 rounded-md border border-gray-300 hover:bg-gray-50">-</button>
                  <span>{formData.quantity}</span>
                  <button
                    type="button"
                    onclick={() => formData.quantity = formData.quantity + 1}
                    class="p-1 rounded-md border border-gray-300 hover:bg-gray-50">+</button>
                </div>
            
            <div class="text-xl font-bold">
              ₱{(formData.quantity * 1234.56).toFixed(2)}
            </div>
          </div>
            <!-- Form Buttons -->
            <div class="flex justify-end space-x-4">
              <button
              type="button"
              onclick={() => showOrderForm = false}
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancel
          </button>
    
              <button
                type="submit"
                class="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/if}
  
  </div>