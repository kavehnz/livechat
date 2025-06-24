<template>
    <LivechatPartButtonOpen 
        v-if="!isMessengerVisible" 
        @toggle-messenger="toggleMessenger"
    />
    <Transition name="fade">
        <div  v-if="isMessengerVisible" class="form-container" >
            <LivechatPartHeader 
                @close-messenger="closeMessenger" 
                :showButton="editProfile"
                :isEditing="isEditing"
                @show-EditProfile="showEditProfile"
                @backButton="afterSubmitEditInfo"
            />
            <div class="chatbox-messenger-body">
                <form>
                    <LivechatFormUserInfo 
                        v-if="currentStep === 1 || isEditing" 
                        :isEditing="isEditing"
                        @next="nextStep"
                        @editInfoSubmit="afterSubmitEditInfo"
                    />
                    <LivechatFormChatInfo v-if="currentStep === 2" @next="nextStep"/>
                    <LivechatFormAgents 
                        @startConversation="startConversation" 
                        v-if="currentStep === 3" @next="nextStep"
                    />
                </form>
            </div>
        </div>
    </Transition>
    <Transition name="fade">
        <LivechatMessengerMain v-if="openMessenger"/>
    </Transition>
</template>
<script setup> 
    import { ref } from 'vue'
    import { useFormStore } from '@/stores/formStore'
    const formStore = useFormStore()
    const editProfile = ref(false)
    const isEditing = ref(false)
    const isMessengerVisible = ref(false)
    const openMessenger = ref(false)

    const closeMessenger = () => {
        isMessengerVisible.value = false
        isEditing.value = false
        currentStep.value = 1
    }
    const toggleMessenger = () => {
        isMessengerVisible.value = !isMessengerVisible.value
    }
    const showEditProfile = () =>{
        isEditing.value = true
        currentStep.value = 0
    }
    const afterSubmitEditInfo = () =>{
        isEditing.value = false
        currentStep.value = 3
    }
    const startConversation = () =>{
        openMessenger.value = true
        isMessengerVisible.value = false
    }
    const currentStep = ref(1)
    const nextStep = () => {
        currentStep.value++
    }
    watch([() => formStore.CloseMainMessenger, () => currentStep.value], ([newClickedValue, newStep]) => {
        editProfile.value = (newStep === 3)
        if(newClickedValue){
            openMessenger.value = false
            isMessengerVisible.value = true
            formStore.CloseMainMessenger = false
        }
    })
</script>
<style>
  @import "assets/css/main.css";
  .form-container {
    @apply transition fixed bottom-10 right-10 bg-white rounded-md  left-10 md:left-auto md:w-100 w-auto shadow-sm p-4;
  }
</style>