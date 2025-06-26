import { defineStore } from 'pinia'
export const useFormStore = defineStore('form', () => {
  const name = ref<string>('')
  const email = ref<string>('')
  const phone = ref<string>('')
  const subject = ref<string>('')
  const message = ref<string>('')
  const agent = ref<string>('')
  const close_mainMessenger = ref<boolean>(false)
  const chat_status = ref<string>('')
  const rate = ref<string>('')
  
  const setName = (new_name: string) => {
    name.value = new_name
  }
  const setEmail = (new_email: string) => {
    email.value = new_email
  }
  const setPhone = (new_phone: string) => {
    phone.value = new_phone
  }
  const setSubject = (new_subject: string) => {
    subject.value = new_subject
  }
  const setMessage = (new_message: string) => {
    message.value = new_message
  }
  const setAgent = (new_agent: string) => {
    agent.value = new_agent
  }
  const toggleClicked = () => {
    close_mainMessenger.value = true
  }
  const setChatStatus = (new_chat_status: string) => {
    chat_status.value = new_chat_status 
  }
  const setRate = (set_rate: string) =>{
    rate.value = set_rate
  }
  return {
    name,
    email,
    phone,
    subject,
    message,
    agent,
    close_mainMessenger,
    chat_status,
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