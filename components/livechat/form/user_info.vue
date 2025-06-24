<template>
<div>
    <div class="form-container-step-title">
        <span v-if="!isEditing">Please enter your information</span>
        <span v-if="isEditing">You can change your info here</span>
    </div>
    <div class="form-group">
        <label class="mb-1" for="name">Name: <span class="necessary-label">*</span></label>
        <input v-model="form.name" type="text" id="name" placeholder="Enter your name">
        <span v-if="errors.name" class="error-label">{{ errors.name }}</span>
    </div>
    <div class="form-group">
        <label class="mb-1" for="email">Email: <span class="necessary-label">*</span></label>
        <input v-model="form.email" type="email" id="email" placeholder="Enter your Email">
        <span v-if="errors.email" class="error-label">{{ errors.email }}</span>
    </div>
    <div v-if="!isEditing" class="form-group">
        <label class="mb-1" for="phone">Phone: </label>
        <input v-model="form.phone" @input="onPhoneInput" type="tel" id="phone" placeholder="Enter your Phone">
    </div>
    <div class="form-group">
        <button v-if="!isEditing" @click="goNext"  type="button" class="submit-btn">
            Send
        </button>
        <button  v-if="isEditing" @click="editUserInfo"  type="button" class="submit-btn">
            Submit
        </button>
    </div>
</div>
</template>
<script setup>
    import { useFormStore } from '@/stores/formStore'
    const formStore = useFormStore()
    const form = reactive({
        name: '',
        email: '',
        phone: ''
    })
    const errors = reactive({
        name: '',
        email: ''
    })
    // Validating
    function onPhoneInput(event) {
        event.target.value = event.target.value.replace(/\D/g, '')
        form.phone = event.target.value
    }
    function validate() {
        let isValid = true
        errors.name = ''
        errors.email = ''

        if (!form.name.trim()) {
            errors.name = 'Name is required'
            isValid = false
        }

        const emailTrimmed = form.email.trim()
        if (!emailTrimmed) {
            errors.email = 'Email is required'
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
            errors.email = 'Email is invalid'
            isValid = false
        }
        return isValid
    }
    // Go to the next step , after clicking
    const emit = defineEmits(['next' , 'editInfoSubmit'])
    const goNext = () => {
        if (validate()) {
            formStore.setName(form.name)
            formStore.setEmail(form.email)
            formStore.setPhone(form.phone)
            emit('next')
        }
    }
    // Edit user info
    const props = defineProps({
        isEditing: {
            type: Boolean,
            default: false,
        },
    })
    onMounted(() => {
        initPhoneInput();
        if (props.isEditing) {
            form.name = formStore.name
            form.email = formStore.email
            form.phone = formStore.phone
        }
    })
    function editUserInfo(){
        if (validate()) {
            formStore.setName(form.name)
            formStore.setEmail(form.email)
            emit('editInfoSubmit')
        }
    }
    // Input phone number
    import intlTelInput from 'intl-tel-input';
    import 'intl-tel-input/build/css/intlTelInput.css';
    function initPhoneInput() {
        const input = document.querySelector("#phone");
        if (input) {
            intlTelInput(input, {
            initialCountry: 'de',
            preferredCountries: ['ir'],
            separateDialCode: true,
            });
        }
    }
</script>
<style>
  @import "assets/css/main.css";
</style>