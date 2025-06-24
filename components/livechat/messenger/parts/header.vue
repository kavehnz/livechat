<template>
    <div class="messenger-header">
        <div class="messenger-header-container">
            <div class="agent-item-img me-3 relative">
                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" class="w-12 h-12 rounded-full">
                <span class="agent-status-online"></span>
            </div>
            <div class="agent-item-info">
                <b class="text-md mt-1">{{ formStore.agent }}</b>
                <span class="font-extralight text-sm">Support Agent</span>
            </div>
        </div>

        <div class="messenger-header-btn">
            <button @click="closeMainMessenger" class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </button>
            <button class="download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path></svg>
            </button>
            <button v-if="!formStore.chatStatus" @click="completeConversation" class="set-status-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
const closeMainMessenger = () => {
    formStore.toggleClicked()   
}
const completeConversation = () =>  {
    formStore.setChatStatus('rating');
}
</script>
<style>
  @import "assets/css/main.css";
  .messenger-header{
    @apply bg-gray-100 flex flex-wrap justify-between border-b border-gray-100 p-5;
  }
  .messenger-header-container { @apply flex flex-row align-middle }
  .agent-status-online{
    @apply w-3 h-3 bg-green-500 rounded-full absolute right-0 bottom-0;
  }
  .agent-item-info{
    @apply justify-between flex flex-col;
  }
  .messenger-header-btn{
    @apply flex flex-row-reverse items-center;
  }
  .messenger-header-btn .close-btn{
    @apply cursor-pointer rounded-full bg-black text-white p-0.5 hover:bg-gray-600 transition;
  }
  .messenger-header-btn .download-btn{
    @apply cursor-pointer rounded-full border bg-gray-50 text-black p-1.5 hover:bg-purple-200 hover:border-purple-950 hover:text-purple-950 transition-all me-4;
  }
  .messenger-header-btn .set-status-btn{
    @apply cursor-pointer rounded-full bg-black text-white p-0.5 hover:bg-green-600 transition me-4;
  }
</style>