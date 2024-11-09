<script lang="ts">
    // Define interfaces for our data structures
    interface FormData {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      country: string;
      region: string;
      cityMunicipality: string;
      barangay: string;
      street: string;
      quantity: number;
    }
    
    interface FormErrors {
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
    }
    
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
      quantity: 3
    });
    
    let errors = $state<FormErrors>({});
    let showOrderForm = $state(false);
    
    function validateName(name: string): boolean {
      return /^[A-Za-z\s]+$/.test(name);
    }
    
    function validateEmail(email: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('.com');
    }
    
    function validatePhone(phone: string): boolean {
      return /^\d{11}$/.test(phone);
    }
    
    function handleSubmit(): void {
      const currentErrors: FormErrors = {};
      
      if (!validateName(formData.firstName)) {
        currentErrors.firstName = 'First name should only contain letters';
      }
      
      if (!validateName(formData.lastName)) {
        currentErrors.lastName = 'Last name should only contain letters';
      }
      
      if (!validateEmail(formData.email)) {
        currentErrors.email = 'Invalid email format';
      }
      
      if (!validatePhone(formData.phoneNumber)) {
        currentErrors.phoneNumber = 'Phone number must be 11 digits';
      }
      
      errors = currentErrors;
      
      if (Object.keys(currentErrors).length === 0) {
        console.log('Form submitted:', formData);
        showOrderForm = false;
      }
    }
    </script>
    
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="p-6">
        <div class="relative aspect-video mb-4">
          <img
            src="path_to_your_homepod_image.jpg"
            alt="HomePod"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800">HomePod</h2>
          <p class="text-sm text-gray-500">by Shopify</p>
          
          <div class="mt-4">
            <span class="text-2xl font-bold text-gray-900">₱1,234.56</span>
          </div>
          
          <div class="flex justify-center items-center mt-2">
            <div class="flex items-center">
              {#each Array(5) as _, i}
                <svg
                  class="w-5 h-5 {i < 4.3 ? 'text-yellow-400' : 'text-gray-300'}"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
              <span class="ml-2 text-sm text-gray-600">4.3 (526 ratings)</span>
            </div>
          </div>
          
          <button
             onclick={() => showOrderForm = true}
             class="mt-6 w-full bg-violet-600 text-white py-2 px-4 rounded-lg
             hover:bg-violet-700 transition-colors">Buy Now</button>
        </div>
      </div>
      
      {#if showOrderForm}
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
              <h2 class="text-2xl font-bold mb-6">Order Form</h2>
              
              <form  onsubmit={(e) => {e.preventDefault();handleSubmit(); }} class="space-y-4">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                    <label class="block text-sm font-medium text-gray-700">
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
                  <label class="block text-sm font-medium text-gray-700">
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
                
                <div class="flex justify-end space-x-4">
                    <button
                    type="button"
                    onclick={() => showOrderForm = false}
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50" > Cancel</button>
    
    
                  <button
                    type="submit"
                    class="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      {/if}
    </div>