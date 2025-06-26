<template>
    <div v-if="!formStore.chat_status" class="messenger-footer">
        <div class="messenger-footer-input">
            <input type="text" placeholder="Enter your message here ...">
        </div>
        <div class="messenger-footer-btn">
            <div class="flex flex-row">
                <button class="messenger-footer-item-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path></svg>
                </button>
                <button class="messenger-footer-item-btn"  @click="triggerFileInput">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M14.8287 7.75737L9.1718 13.4142C8.78127 13.8047 8.78127 14.4379 9.1718 14.8284C9.56232 15.219 10.1955 15.219 10.586 14.8284L16.2429 9.17158C17.4144 8.00001 17.4144 6.10052 16.2429 4.92894C15.0713 3.75737 13.1718 3.75737 12.0002 4.92894L6.34337 10.5858C4.39075 12.5384 4.39075 15.7042 6.34337 17.6569C8.29599 19.6095 11.4618 19.6095 13.4144 17.6569L19.0713 12L20.4855 13.4142L14.8287 19.0711C12.095 21.8047 7.66283 21.8047 4.92916 19.0711C2.19549 16.3374 2.19549 11.9053 4.92916 9.17158L10.586 3.51473C12.5386 1.56211 15.7045 1.56211 17.6571 3.51473C19.6097 5.46735 19.6097 8.63317 17.6571 10.5858L12.0002 16.2427C10.8287 17.4142 8.92916 17.4142 7.75759 16.2427C6.58601 15.0711 6.58601 13.1716 7.75759 12L13.4144 6.34316L14.8287 7.75737Z"></path></svg>
                </button>
                <input 
                    ref="fileInput" 
                    type="file" 
                    style="display: none;" 
                    @change="handleFileChange"
                />
            </div>
            <button class="send-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"></path></svg>
            </button>
        </div>
    </div>
    <div v-if="formStore.chat_status" class="messenger-footer-end">
        <span class="messenger-footer-end-text">This conversation is ended</span>
        <button class="messenger-footer-end-btn">
            <svg class="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5.76282 17H13.083C13.0284 17.3252 13 17.6593 13 18C13 18.3407 13.0284 18.6748 13.083 19H6.45455L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12.8027C21.3926 12.4513 20.7179 12.2034 20 12.083V5H4V18.3851L5.76282 17ZM23.9497 21.5355L22.4462 20.032C22.7981 19.4365 23 18.7418 23 18C23 15.7909 21.2091 14 19 14C16.7909 14 15 15.7909 15 18C15 20.2091 16.7909 22 19 22C19.7418 22 20.4365 21.7981 21.032 21.4462L22.5355 22.9497L23.9497 21.5355ZM21 18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18C17 16.8954 17.8954 16 19 16C20.1046 16 21 16.8954 21 18Z"></path></svg>
            New Conversation
        </button>
    </div>
</template>
<script setup lang="ts">
  const formStore = useFormStore()
  const fileInput = ref<HTMLInputElement | null>(null)
  const triggerFileInput = () => {
    fileInput.value?.click();
  };
  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
      console.log(file.name);
    }
  };
</script>
<style>
  @reference "assets/css/main.css";
  .messenger-footer{
    @apply flex flex-col md:flex-row align-middle items-center p-5 border-t border-gray-100;
  }
  .messenger-footer-input { @apply w-full mb-5 md:mb-0 }
  .messenger-footer-input input{
    @apply focus:border-gray-200 rounded-xl w-full border border-gray-100 p-5
  }
  .messenger-footer-btn{
    @apply md:w-auto w-full flex flex-row md:ms-5 justify-between;
  }
  .messenger-footer-item-btn{
    @apply cursor-pointer me-3 hover:text-[#2f31ad]
  }
  .send-btn{
    @apply cursor-pointer text-[#2f31ad];
  }
  .messenger-footer-end{
    @apply flex flex-col md:flex-row items-center md:justify-between p-5 border-t border-gray-100;
  }
  .messenger-footer-end-text{
    @apply text-base font-extralight text-gray-600 mb-4 md:mb-0;
  }
  .messenger-footer-end-btn{
    @apply cursor-pointer flex flex-row items-center justify-center bg-black p-4 rounded-md text-white hover:bg-purple-950 transition;
  }
</style>