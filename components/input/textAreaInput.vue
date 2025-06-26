<template>
  <div class="form-group">
    <label :for="id">
      {{ label }}
      <span v-if="required" class="necessary-label">*</span>
    </label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
      rows="4"
    ></textarea>
    <p v-if="error" class="error-label">{{ error }}</p>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    id: string;
    label: string;
    modelValue?: string;
    placeholder?: string;
    required?: boolean;
  }
  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue', 'validateInput']);
  const inputValue = ref<string>(props.modelValue ?? '');
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
    if (props.required && !inputValue.value.trim()) {
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