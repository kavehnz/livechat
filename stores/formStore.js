import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const subject = ref('')
  const message = ref('')
  const agent = ref('')
  const CloseMainMessenger = ref(false)
  const chatStatus = ref('')
  const rate = ref('')
  
  const setName = (newName) => {
    name.value = newName
  }
  const setEmail = (newEmail) => {
    email.value = newEmail
  }
  const setPhone = (newPhone) => {
    phone.value = newPhone
  }
  const setSubject = (newSubject) => {
    subject.value = newSubject
  }
  const setMessage = (newMessage) => {
    message.value = newMessage
  }
  const setAgent = (newAgent) => {
    agent.value = newAgent
  }
  const toggleClicked = () => {
    CloseMainMessenger.value = true
  }
  const setChatStatus = (newChatStatus) => {
    chatStatus.value = newChatStatus 
  }
  const setRate = (setRate) =>{
    rate.value = setRate
  }
  return {
    name,
    email,
    phone,
    subject,
    message,
    agent,
    CloseMainMessenger,
    chatStatus,
    rate,
    setName,
    setEmail,
    setPhone,
    setSubject,
    setMessage,
    setAgent,
    toggleClicked,
    setChatStatus,
    setRate
  }
})