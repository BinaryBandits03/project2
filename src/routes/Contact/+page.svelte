<script lang="ts">
import { base } from '$app/paths';
  import { page } from '$app/stores';

let formValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  nameError: '',
  emailError: '',
  phoneError: ''
};

let isMobileMenuOpen = false;
let isMenuOpen = false;

const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
const validateForm = () => {
  let isValid = true;

  // Validate name
  if (!formValues.name.trim()) {
    formValues.nameError = 'Name is required';
    isValid = false;
  } else if (!/^[a-zA-Z0-9_\-\.\s]+$/.test(formValues.name)) {
    formValues.nameError = 'Name contains invalid characters';
    isValid = false;
  } else {
    formValues.nameError = '';
  }

  // Validate email
  if (!formValues.email.trim()) {
    formValues.emailError = 'Email is required';
    isValid = false;
  } else if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email)) {
    formValues.emailError = 'Invalid email address';
    isValid = false;
  } else if (!/(gmail\.com|yahoo\.com)$/i.test(formValues.email)) {
    formValues.emailError = 'Only Gmail and Yahoo email addresses are accepted';
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
    console.log('Form submitted:', formValues);
    // Handle form submission logic here
  }
};

// Handle phone input to only allow numbers
const handlePhoneInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/\D/g, '').slice(0, 11);
  formValues.phone = input.value;
};
const toggleMobileMenu = () => {
  isMobileMenuOpen = !isMobileMenuOpen;
};
</script>
<!-- svelte-ignore css_unused_selector -->
<style>
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
  </style>
<div class="min-h-screen bg-gradient-to-b from-[#ACB1D6] via-[#E1AFD1] to-[#7469B6] flex flex-col overflow-hidden">
  <!-- Navigation -->
  <nav class="bg-gradient-to-r from-[#FFE6E6] to-[#FFE6E6] backdrop-blur-sm border-b border-white/20">
    <div class="container mx-auto flex justify-between items-center px-6 py-3">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="{base}/Assets/logo.png"
          alt="Shopify"
          class="h-6 sm:h-8 w-auto"
        />
      </div>

      <!-- Mobile Menu Button -->
      <button 
      class="md:hidden p-2"
      onclick={toggleMenu}
      aria-label="Toggle navigation menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
        <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
        <a href="{base}/About" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
        <a href="{base}/Contact" class="text-violet-800 hover:text-violet-800 transition-colors font-bold">Contact</a>
      </div>
    </div>
    {#if isMenuOpen}
    <div class="md:hidden absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md">
      <div class="space-y-4 px-6 py-4">
        <a href="{base}/" 
          class="block text-gray-700 hover:text-violet-800 transition-colors"
          class:active-link={$page.url.pathname === `${base}/`}>
          Home
        </a>
        <a href="{base}/Shop"
          class="block text-gray-700 hover:text-violet-800 transition-colors"
          class:active-link={$page.url.pathname === `${base}/Shop`}>
          Shop
        </a>
        <a href="{base}/About"
          class="block text-gray-700 hover:text-violet-800 transition-colors"
          class:active-link={$page.url.pathname === `${base}/About`}>
          About
        </a>
        <a href="{base}/Contact"
          class="block text-violet-800 hover:text-violet-800 transition-colors font-bold"
          class:active-link={$page.url.pathname === `${base}/Contact`}>
          Contact
        </a>
      </div>
    </div>
  {/if}

    <!-- Mobile Menu -->
    <div class="hidden md:hidden flex-col items-center space-y-2 px-6 py-3 bg-white/80" id="mobile-menu">
      <a href="{base}/" class="text-gray-700 hover:text-violet-800 transition-colors">Home</a>
      <a href="{base}/Shop" class="text-gray-700 hover:text-violet-800 transition-colors">Shop</a>
      <a href="{base}/About" class="text-gray-700 hover:text-violet-800 transition-colors">About</a>
      <a href="{base}/Contact" class="text-violet-800 hover:text-violet-800 transition-colors font-bold">Contact</a>
    </div>
  </nav>

  <!-- Main Content -->
  <div class="flex-1 container mx-auto px-4 py-6">
    <div class="flex flex-col md:flex-row gap-6 h-full justify-center items-center">
      <!-- Contact Form -->
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-md">
        <h1 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <form onsubmit={(e) => {e.preventDefault(); handleSubmit();}} class="space-y-4">
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
              bind:value={formValues.email}
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
              bind:value={formValues.phone}
              oninput={handlePhoneInput}
              class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {#if formValues.phoneError}
              <p class="text-red-500 text-sm mt-1">{formValues.phoneError}</p>
            {/if}
          </div>
          <div>
            <label for="message" class="block text-gray-700 font-medium mb-1">Reason for Contact</label>
            <textarea
              id="message"
              bind:value={formValues.message}
              class="w-full px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              rows="3"
              placeholder="Enter your reason for contact"
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
            <a href="https://www.facebook.com/people/Shopify/61568480283440/" target="_blank" class ="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>shopify@facebook.com</span>
            </a>
            <a href="https://www.instagram.com/shopifysections/#" target="_blank" class="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>shopify@instagram.com</span>
            </a>
            <a href="mailto:binarybandits404@gmail.com?subject=Your%20Subject&body=Your%20Message" target="_blank" class="flex items-center space-x-3 text-gray-700 hover:text-violet-800 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>shopify@gmail.com</span>
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
