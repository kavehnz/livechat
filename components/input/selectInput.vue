<template>
  <div class="form-group">
    <label :for="id">
      {{ label }}
      <span v-if="required" class="necessary-label">*</span>
    </label>
    <select
      :id="id"
      v-model="inputValue"
      :disabled="disabled"
    >
      <option value="" disabled class="hidden" v-if="placeholder">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <p v-if="error" class="error-label">{{ error }}</p>
  </div>
</template>
<script setup lang="ts">
  interface SelectOption {
    value: string | number;
    text: string;
  }
  interface Props {
    id: string;
    label: string;
    modelValue?: string | number;
    options: SelectOption[];
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  }
  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue', 'validateInput']);
  const inputValue = ref<string | number>(props.modelValue ?? '');
  const error = ref<string>('');

watch(() => props.modelValue, (val) => {
  if (val !== inputValue.value) {
    inputValue.value = val ?? '';
  }
});
watch(inputValue, (val) => {
  if (val !== props.modelValue) {
    emit('update:modelValue', val);
  }
});
const validate = (): boolean => {
  if (props.required && (inputValue.value === '' || inputValue.value == null)) {
    error.value = `${props.label} is required`;
    emit('validateInput', false);
    return false;
  }
  error.value = '';
  emit('validateInput', true);
  return true;
};
defineExpose({
  validate
});
</script>
