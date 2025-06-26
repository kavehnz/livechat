<template>
    <div class="modal">
        <div class="modal-container">
            <!-- header -->
            <div class="modal-header">
                Rate conversation
                <button  @click="skipRate" class="modal-header-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </button>
            </div>
            <!-- body -->
            <div class="p-3">
                <span class="modal-body-title">please tell us how we did.</span>
                <div class="mb-5">
                    <div class="modal-body-like">
                        <button
                            class="rate-btn like"
                            :class="{
                                'active': isLiked === true,
                                'shadow-[0_0_20px_green]': isLiked === true
                            }"
                            @click="handleFeedback('like')"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path></svg>
                        </button>
                        <button
                            class="rate-btn dlike"
                            :class="{
                                'active': isLiked === false,
                                'shadow-[0_0_20px_red]': isLiked === false
                            }"
                            @click="handleFeedback('dislike')"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path></svg>
                        </button>
                    </div>
                </div>
                <textarea name="" id="" placeholder="Write your feedback if you want." class="modal-input"></textarea>
                <div class="flex flex-row justify-center">
                    <button @click="skipRate" class="skip-btn">
                        skip
                    </button>
                    <button v-if="showSubmitBtn" @click="setRateBtn" class="set-rate-btn">
                        <svg class="me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                        Submit
                    </button>
                </div>
                
            </div>
            <!-- footer -->
        </div>
    </div>
</template>
<script setup lang="ts">
    const formStore = useFormStore()
    const isLiked = ref<boolean | null>(null);
    const showSubmitBtn = ref<boolean>(false)
    const rateValue = ref<string>('')
    const handleFeedback = (feedback: string) => {
        isLiked.value = true;
        showSubmitBtn.value = true
        rateValue.value = feedback
    };
    const setRateBtn = () =>{
        formStore.setRate(rateValue.value)
        formStore.setChatStatus('complete')
    }
    const skipRate = () =>{
        formStore.setRate('skip')
        formStore.setChatStatus('complete')
    }
</script>
<style>
  @reference "assets/css/main.css";
  .modal {
    @apply absolute flex items-center justify-center inset-0 z-10 bg-[#0000007a] p-4;
  }
  .modal-container {
    @apply bg-white rounded-xl overflow-hidden w-80;
  }
  .modal-header {
    @apply text-center relative bg-gray-200 p-5 text-base font-semibold;
  }
  .modal-header-btn {
    @apply absolute cursor-pointer hover:bg-gray-800 right-4 top-5 bg-black rounded-full text-white p-1;
  }
  .modal-body-title{
    @apply block mt-3 mb-5 text-sm text-center;
  }
  .modal-body-like{
    @apply flex flex-row items-center justify-evenly;    
  }
  .rate-btn {
    @apply rounded-full text-white p-3 cursor-pointer transition;
  }
  .rate-btn.like {
    @apply bg-green-500;
  }
  .rate-btn.dlike {
    @apply bg-red-500;
  }
  .modal-input {
    @apply focus:border-gray-200 rounded-xl text-sm w-full border border-gray-100 p-4;
  }
  .skip-btn{
    @apply cursor-pointer underline bg-white p-4 text-center;
  }
  .set-rate-btn{
    @apply cursor-pointer flex flex-row items-center justify-center w-full bg-black p-4 ms-2 rounded-md text-white hover:bg-purple-950 transition;
  }
</style>