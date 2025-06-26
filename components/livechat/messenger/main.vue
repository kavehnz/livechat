<template>
    <div id="messenger">
        <LivechatMessengerPartsHeader />
        <div id="messenger-container">
            <div class="pm-container">
                <div class="pm pm-start">
                    <div class="pm-img mb-3">
                        <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                    </div>
                    <div class="pm-text">
                        <div class="pm-text-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="pm-text-item-details">
                                <span>11:45 PM</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pm pm-end">
                    <div class="pm-img">
                        <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                    </div>
                    <div class="pm-text">
                        <div class="pm-text-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="pm-text-item-details">
                                <span>11:45 PM</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="pm-text">
                        <div class="pm-text-item">
                            <p>Lorem ipsum dolor sit ametdolore magna aliqua.</p>
                            <div class="pm-text-item-details">
                                <span>11:46 PM</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LivechatMessengerPartsFooter />
        <Transition name="fade">
            <LivechatMessengerPartsModal v-if="formStore.chat_status === 'rating'"/>
        </Transition>
    </div>
</template>
<script setup>
    const formStore = useFormStore()
</script>
<style>
  @reference "assets/css/main.css";
  #messenger {
    @apply transition fixed left-10 md:left-auto bottom-10 right-10 bg-white rounded-2xl w-auto md:w-3xl shadow-sm overflow-hidden;
  }
  #messenger-container {
    @apply md:h-150 h-100 overflow-y-auto p-5;
  }
  .pm-start {
    @apply self-start;
  }
  .pm-end {
    @apply self-end;
  }
  .pm-end .pm-img {
    @apply mb-3 justify-end flex;
  }
  .pm-text {
    @apply w-auto md:w-100;
  }
  .pm-container{
    @apply flex flex-col space-y-4;
  }
  .pm-text-item{
    @apply rounded-md p-2 mb-2;
  }
  .pm-text:last-child .pm-text-item{
    @apply mb-0;
  }
  .pm-start .pm-text-item{
    @apply bg-[#ebebfa];
  }
  .pm-end .pm-text-item{
    @apply bg-[#faf6eb];
  }
  .pm-text-item-details{
    @apply flex justify-between text-xs font-light mt-1 relative top-1;
  }
  .pm-start .pm-text-item-details{
    @apply flex-row text-[#2f31ad]
  }
  .pm-end .pm-text-item-details{
    @apply flex-row-reverse text-[#ad942f]
  }
  .pm-img img {
    @apply w-12 h-12 rounded-full;
  }
</style>