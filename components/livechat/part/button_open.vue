<template>
  <div class="fixed bottom-10 right-10">
    <div class="relative chatbox-btn-open">
        <div 
          class="live-chat-btn"
          @click="toggleMessenger"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path></svg>
          <span class="font-medium text-lg ml-2">Live Chat</span> 
        </div>
        <Transition name="zoomIN">
          <span class="popup" v-if="isVisible">
              Chat Live With Our Support Agent Now!
              <button class="cursor-pointer" @click="closePopup">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
              </button>
            </span>
        </Transition>
    </div>
  </div>

</template>
<script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['toggle-messenger']);
  function toggleMessenger() {
    emit('toggle-messenger');
  }
  const isVisible = ref(true);
  function closePopup() {
    isVisible.value = false;
  }
</script>
<style>
  @import "assets/css/main.css";
  .live-chat-btn {
    @apply cursor-pointer flex flex-wrap items-center bg-black text-white rounded-2xl px-3 pr-5 py-2 hover:bg-purple-950 transition;
  }
  .popup{
    @apply absolute right-35 w-55 p-3 flex rounded bottom-13 bg-black text-white;
  }
</style>