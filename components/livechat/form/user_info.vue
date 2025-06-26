<template>
  <div>
    <div class="form-container-step-title">
      <span v-if="!isEditing">Please enter your information</span>
      <span v-if="isEditing">You can change your info here</span>
    </div>
    <InputTextInput
      ref="nameInput"
      id="name"
      label="Name"
      placeholder = "Enter your name"
      v-model="formName"
      :required="true"
      @validateInput="handleValidation('name', $event)"
    />
    <InputTextInput
      ref="emailInput"
      id="email"
      label="Email"
      v-model="formEmail"
      placeholder="Enter your Email"
      :required="true"
      @validateInput="handleValidation('email', $event)"
    />
    <div v-if="!isEditing" class="form-group">
      <label class="mb-1" for="phone">Phone: </label>
      <VueTelInput
        v-model="formPhone"
        type="tel"
        id="phone"
        placeholder="Enter your Phone"
        @input="onPhoneInput"
        :defaultCountry="'DE'"
        :mode="'international'"
      />
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

<script setup lang="ts">
  import { VueTelInput } from 'vue-tel-input'
  const formStore = useFormStore();
  const emit = defineEmits(['next', 'editInfoSubmit']);
  const formName = ref<string>('');
  const formEmail = ref<string>('');
  const formPhone = ref<string>('');
  const phone = ref(null);
  const phoneInput = ref<HTMLInputElement | null>(null);
  const nameInput = ref<{ validate: () => boolean } | null>(null);
  const emailInput = ref<{ validate: () => boolean } | null>(null); 
  const validationStatus = ref<ValidationStatus>({
    name: false,
    email: false,
  });
  interface ValidationStatus {
    name: boolean;
    email: boolean;
  }
  const props = defineProps({
    isEditing: {
      type: Boolean,
      default: false,
    },
  });
  const handleValidation = (field: keyof ValidationStatus, isValid: boolean) => {
    validationStatus.value[field] = isValid;
  };
  const goNext = () => {
    const isNameValid = nameInput.value?.validate() ?? false;
    const isEmailValid = emailInput.value?.validate() ?? false;
    if (!isNameValid || !isEmailValid) {
      return;
    }
    formStore.setName(formName.value);
    formStore.setEmail(formEmail.value);
    formStore.setPhone(formPhone.value);
    emit('next');
  };
  const onPhoneInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    target.value = target.value.replace(/\D/g, '');
    formPhone.value = target.value;
  };
  const editUserInfo = () => {
    const isNameValid = nameInput.value?.validate() ?? false;
    const isEmailValid = emailInput.value?.validate() ?? false;
    if (!isNameValid || !isEmailValid) {
      return;
    }
    formStore.setName(formName.value);
    formStore.setEmail(formEmail.value);
    emit('editInfoSubmit');
  };
  onMounted(() => {
    if (props.isEditing) {
      formName.value = formStore.name;
      formEmail.value = formStore.email;
      formPhone.value = formStore.phone;
    }
  });
</script>