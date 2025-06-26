<template>
    <div>
    <div class="form-container-step-title">
        Please enter your Message
    </div>
    <InputSelectInput
        ref="subjectInput"
        id="subject"
        label="Subject"
        v-model="formSubject"
        :options="[
            { value: 'subject1', text: 'Subject 1' },
            { value: 'subject2', text: 'Subject 2' },
            { value: 'subject3', text: 'Subject 3' }
        ]"
        :required="true"
        placeholder="Choose a subject"
        @validateInput="handleValidation('subject', $event)"
    />
    <InputTextAreaInput
        ref="messageInput"
        id="message"
        label="Message"
        placeholder="Write your question"
        v-model="formMessage"
        :required="true"
        @validateInput="handleValidation('message', $event)"
    />
    <div>
        <button @click="goNext" type="button" class="submit-btn">Send</button>
    </div>
</div>
</template>
<script setup lang="ts">
  const emit = defineEmits(['next'])
  const formSubject = ref<string>('')
  const formMessage = ref<string>('')
  const subjectInput = ref<{ validate: () => boolean } | null>(null);
  const messageInput = ref<{ validate: () => boolean } | null>(null);
  const validationStatus = ref({
    subject: false,
    message: false
  });
  interface ValidationStatus {
    subject: false,
    message: false
  }
  const handleValidation = (field: keyof ValidationStatus, isValid: boolean) => {
    validationStatus.value[field] = isValid;
  };
  const goNext = () => {
      const isMessageValid = messageInput.value?.validate() ?? false;
      const isSubjectValid = subjectInput.value?.validate() ?? false;
      if (!isMessageValid || !isSubjectValid) {
          return;
      }
      emit('next')
  }
</script>
<style>
  @reference "assets/css/main.css";
  .form-group{
    @apply flex flex-col mb-4;
  }
  .form-group input{
    @apply bg-gray-50 p-2 rounded-md p-3 text-sm;
  }
  .form-group textarea{
    @apply bg-gray-50 rounded-md h-30 p-4 text-sm;
  }
  .form-group select{
    @apply bg-gray-50 p-2 rounded-md focus:border-gray-100 text-sm;
  }
  .submit-btn{
    @apply cursor-pointer rounded-lg w-full text-white bg-black p-4 hover:bg-purple-950 transition;
  }
</style>