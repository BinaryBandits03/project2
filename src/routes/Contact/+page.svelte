<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    let name = '';
    let email = '';
    let phone = '';
    let message = '';
  
    let nameError = '';
    let emailError = '';
    let phoneError = '';
  
    const dispatch = createEventDispatcher();
  
    const validateInputs = () => {
      let isValid = true;
  
      // Validate name
      if (!name.trim()) {
        nameError = 'Name is required';
        isValid = false;
      } else if (/\d|[!@#$%^&*(),.?":{}|<>]/.test(name)) {
        nameError = 'Name cannot contain numbers or special characters';
        isValid = false;
      } else {
        nameError = '';
      }
  
      // Validate email
      if (!email.trim()) {
        emailError = 'Email is required';
        isValid = false;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailError = 'Invalid email address';
        isValid = false;
      } else {
        emailError = '';
      }
  
      // Validate phone
      if (!phone.trim()) {
        phoneError = 'Phone number is required';
        isValid = false;
      } else if (!/^\d{10,11}$/.test(phone)) {
        phoneError = 'Phone number must be 10 or 11 digits';
        isValid = false;
      } else {
        phoneError = '';
      }
  
      return isValid;
    };
  
    const handleSubmit = () => {
      if (validateInputs()) {
        dispatch('submit', { name, email, phone, message });
      }
    };
  </script>
  
  <div class="h-screen overflow-hidden bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 flex items-center justify-center">
    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            on:input={validateInputs}
            class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Enter your name"
          />
          {#if nameError}
            <p class="text-red-500 text-sm">{nameError}</p>
          {/if}
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            on:input={validateInputs}
            class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          {#if emailError}
            <p class="text-red-500 text-sm">{emailError}</p>
          {/if}
        </div>
        <div>
          <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            bind:value={phone}
            on:input={validateInputs}
            class="w-full px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
          {#if phoneError}
            <p class="text-red-500 text-sm">{phoneError}</p>
          {/if}
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            bind:value={message}
            class="w-full px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="button"
          class="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
          on:click={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  </div>