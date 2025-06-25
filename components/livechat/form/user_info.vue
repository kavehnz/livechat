<template>
  <div>
    <div class="form-container-step-title">
      <span v-if="!isEditing">Please enter your information</span>
      <span v-if="isEditing">You can change your info here</span>
    </div>
    <div class="form-group">
      <label class="mb-1" for="name">Name: <span class="necessary-label">*</span></label>
      <input v-model="formName" type="text" id="name" placeholder="Enter your name">
      <span v-if="errors.name" class="error-label">{{ errors.name }}</span>
    </div>
    <div class="form-group">
      <label class="mb-1" for="email">Email: <span class="necessary-label">*</span></label>
      <input v-model="formEmail" type="email" id="email" placeholder="Enter your Email">
      <span v-if="errors.email" class="error-label">{{ errors.email }}</span>
    </div>
    <div v-if="!isEditing" class="form-group">
      <label class="mb-1" for="phone">Phone: </label>
      <input v-model="formPhone"  ref="phoneInput" @input="onPhoneInput" type="tel" id="phone" placeholder="Enter your Phone">
    </div>
    <div class="form-group">
      <button v-if="!isEditing" @click="goNext" type="button" class="submit-btn">
        Send
      </button>
      <button v-if="isEditing" @click="editUserInfo" type="button" class="submit-btn">
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
const formStore = useFormStore();
const emit = defineEmits(['next', 'editInfoSubmit']);
const formName = ref('');
const formEmail = ref('');
const formPhone = ref('');
const phoneInput = ref(null);
const errors = {
  name: ref(''),
  email: ref('')
};
const onPhoneInput = (event) => {
  event.target.value = event.target.value.replace(/\D/g, '');
  formPhone.value = event.target.value;
};
const validate = () => {
  let isValid = true;
  errors.name.value = '';
  errors.email.value = '';
  if (!formName.value.trim()) {
    errors.name.value = 'Name is required';
    isValid = false;
  }
  const emailTrimmed = formEmail.value.trim();
  if (!emailTrimmed) {
    errors.email.value = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
    errors.email.value = 'Email is invalid';
    isValid = false;
  }
  return isValid;
};
const goNext = () => {
  if (validate()) {
    formStore.setName(formName.value);
    formStore.setEmail(formEmail.value);
    formStore.setPhone(formPhone.value);
    emit('next');
  }
};
const props = defineProps({
  isEditing: {
    type: Boolean,
    default: false,
  },
});
onMounted(() => {
  initPhoneInput();
  if (props.isEditing) {
    formName.value = formStore.name;
    formEmail.value = formStore.email;
    formPhone.value = formStore.phone;
  }
});
const editUserInfo = () => {
  if (validate()) {
    formStore.setName(formName.value);
    formStore.setEmail(formEmail.value);
    emit('editInfoSubmit');
  }
};
const initPhoneInput = () => {
  if (phoneInput.value) {
    intlTelInput(phoneInput.value, {
      initialCountry: 'de',
      preferredCountries: ['ir'],
      separateDialCode: true,
    });
  }
};
</script>