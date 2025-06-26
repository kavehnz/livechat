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
<script setup lang="ts">
    const formStore = useFormStore()
    const editProfile = ref<boolean>(false)
    const isEditing = ref<boolean>(false)
    const isMessengerVisible = ref<boolean>(false)
    const openMessenger = ref<boolean>(false)
    const currentStep = ref<number>(1)
    const closeMessenger = (): void => {
        isMessengerVisible.value = false
        isEditing.value = false
        currentStep.value = 1
    }
    const toggleMessenger = (): void => {
        isMessengerVisible.value = !isMessengerVisible.value
    }
    const showEditProfile = (): void =>{
        isEditing.value = true
        currentStep.value = 0
    }
    const afterSubmitEditInfo = (): void =>{
        isEditing.value = false
        currentStep.value = 3
    }
    const startConversation = (): void =>{
        openMessenger.value = true
        isMessengerVisible.value = false
    }
    const nextStep = (): void => {
        currentStep.value++
    }
    watch(
        [() => formStore.close_mainMessenger, () => currentStep.value],
        ([newClickedValue, newStep]) => {
        editProfile.value = (newStep === 3)
            if(newClickedValue){
                openMessenger.value = false
                isMessengerVisible.value = true
                formStore.close_mainMessenger = false
            }
        }
    )
</script>
<style>
  @reference "assets/css/main.css";
  .form-container {
    @apply transition fixed bottom-10 right-10 bg-white rounded-md  left-10 md:left-auto md:w-100 w-auto shadow-sm p-4;
  }
</style>