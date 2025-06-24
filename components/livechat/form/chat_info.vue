<template>
    <div>
    <div class="form-container-step-title">
        Please enter your Message
    </div>
    <div class="form-group">
        <label class="mb-1" for="subject">Subject:</label>
        <select v-model="form.subject" id="subject">
            <option value="" disabled selected class="hidden">Choose a subject</option>
            <option value="subject1">subject 1</option>
            <option value="subject2">subject 2</option>
            <option value="subject3">subject 3</option>
        </select>
        <span v-if="errors.subject" class="error-label">{{ errors.subject }}</span>
    </div>
    <div class="form-group">
        <label class="mb-1" for="subject">Message:</label>
        <textarea v-model="form.message" name="message" id="message" placeholder="Write your question"></textarea>
        <span v-if="errors.message" class="error-label">{{ errors.message }}</span>
    </div>
    <div>
        <button @click="goNext" type="button" class="submit-btn">Send</button>
    </div>
</div>
</template>
<script setup>
    const form = reactive({
        subject: '',
        message: ''
    })
    const errors = reactive({
        subject: '',
        message: ''
    })
    function validate() {
        let isValid = true
        errors.subject = ''
        errors.message = ''

        if (!form.subject) {
            errors.subject = 'Subject is required'
            isValid = false
        }

        const messageTrimmed = form.message.trim()
        if (!messageTrimmed) {
            errors.message = 'Message is required'
            isValid = false
        }
        return isValid
    }
    const emit = defineEmits(['next'])
    const goNext = () => {
        if (validate()) {
            emit('next')
        }
    }
</script>
<style>
  @import "assets/css/main.css";
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