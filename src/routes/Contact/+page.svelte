<script lang="ts">

import { base } from '$app/paths';
  
let formValues = $state({
    name: '', email: '', phone: '', message: '',
    nameError: '', emailError: '', phoneError: ''
  })


  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!formValues.name.trim()) {
        formValues.nameError = 'Name is required';
        isValid = false;
    } else if (/\d|[!@#$%^&*(),.?":{}|<>]/.test(formValues.name)) {
        formValues.nameError = 'Name cannot contain numbers or special characters';
        isValid = false;
    } else {
        formValues.nameError = '';
    }

    // Validate email
    if (!formValues.email.trim()) {
        formValues.emailError = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
        formValues.emailError = 'Invalid email address';
        isValid = false;
    } else {
        formValues.emailError = '';
    }

    // Validate phone
    if (!formValues.phone.trim()) {
        formValues.phoneError = 'Phone number is required';
        isValid = false;
    } else if (!/^\d{10,11}$/.test(formValues.phone)) {
        formValues.phoneError = 'Phone number must be 10 or 11 digits';
        isValid = false;
    } else {
        formValues.phoneError = '';
    }

    return isValid;
};

const handleSubmit = () => {
    if (validateForm()) {
        console.log('Form submitted:', { 
            name: formValues.name, 
            email: formValues.email, 
            phone: formValues.phone, 
            message: formValues.message 
        });
        // Handle form submission logic here
    }
};

  // Handle phone input to only allow numbers
  const handlePhoneInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      input.value = input.value.replace(/\D/g, '').slice(0, 11);
      formValues.phone = input.value;
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
            <a href="{base}/shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
            <a href="{base}/about" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
            <a href="{base}/contact" class="text-gray-700 hover:text-violet-800 transition-colors">Contact</a>
          </div>
      </div>
  </nav>

  <!-- Main Content -->
  <div class="flex-1 container mx-auto px-4 py-6 overflow-hidden">
      <div class="flex flex-col md:flex-row gap-6 h-full justify-center items-center">
          <!-- Contact Form -->
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-md">
              <h1 class="text-2xl font-bold mb-4 text-gray-800">Contact Us</h1>
              <form onsubmit={(e) => {e.preventDefault();handleSubmit();}} class="space-y-4">
                  <div>
                      <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
                      <input
                          type="text"
                          id="name"
                          bind:value={formValues.name}
                          class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="Enter your name"
                      />
                      {#if formValues.nameError}
                          <p class="text-red-500 text-sm mt-1">{formValues.nameError}</p>
                      {/if}
                  </div>
                  <div>
                      <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
                      <input
                          type="email"
                          id="email"
                          oninput={(e) => formValues.email = (e.target as HTMLInputElement).value}
                          value={formValues.email}
                          class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="Enter your email"
                      />
                      {#if formValues.emailError}
                          <p class="text-red-500 text-sm mt-1">{formValues.emailError}</p>
                      {/if}
                  </div>
                  <div>
                      <label for="phone" class="block text-gray-700 font-medium mb-1">Phone Number</label>
                      <input
                          type="tel"
                          id="phone"
                          oninput={(e) => formValues.phone = (e.target as HTMLInputElement).value}
                          value={formValues.phone}
                          class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                      />
                      {#if formValues.phoneError}
                          <p class="text-red-500 text-sm mt-1">{formValues.phoneError}</p>
                      {/if}
                  </div>
                  <div>
                      <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
                      <textarea
                          id="message"
                          bind:value={formValues.message}
                          class="w-full px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                          rows="3"
                          placeholder="Enter your message"
                      ></textarea>
                  </div>
                  <button
                      type="submit"
                      class="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                      Submit
                  </button>
              </form>
          </div>

          <!-- Social Media Links -->
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-md">
              <h2 class="text-2xl font-bold mb-4 text-gray-800">Connect With Us</h2>
              <div class="space-y-4">
                  <a href="https://www.facebook.com/vincent.yzer" target="_blank" class ="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/rezy_vinx/" target="_blank" class="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                  </a>
                  <a href="mailto:contact@example.com" target="_blank"  class="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span>contact@example.com</span>
                  </a>
                  <a href="tel:+1234567890" class= "flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <span>+1 (234) 567-890</span>
                  </a>
              </div>
          </div>
      </div>
  </div>
</div>