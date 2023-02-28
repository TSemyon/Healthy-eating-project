import { closeModal, openModal } from "./modal"
import { postData } from "../services/services"

function form(formSelector, modalTimerId) {

   const forms = document.querySelectorAll(formSelector)

   const message = {
      loading: 'img/spinner/spinner.svg',
      success: "Спасибо скоро мы с вами свяжемся",
      failure: "Что-то пошло не так..."
   }

   forms.forEach(item => {
      bindPostData(item)
   })

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault()

         let statusMessage = document.createElement('img')
         statusMessage.src = message.loading
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `
         form.insertAdjacentElement('afterend', statusMessage)

         const formData = new FormData(form)

         const json = JSON.stringify(Object.fromEntries(formData.entries()))

         postData('http://localhost:3000/requests', json)
         .then(data => {
             console.log(data);
             showThanksModal(message.success)
             statusMessage.remove();
         }).catch(() => {
             showThanksModal(message.failure)
         }).finally(() => {
             form.reset()
         })
      })
   }

   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__body')
      
      prevModalDialog.classList.add('hide-modal')

      openModal(formSelector, modalTimerId)
      const thanksModal = document.createElement('div')
      thanksModal.classList.add('modal__body')
      thanksModal.innerHTML = `
         <div class="modal__close">
            <img data-close src="./img/close/close_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="icon close">
         </div>
         <div class="modal__content header-block">
            <h2 class="header-block__title _center">${message}</h2>
         </div>
      `

      document.querySelector('.modal__container').append(thanksModal)

      setTimeout(() => {
         thanksModal.remove()
         prevModalDialog.classList.add('show-modal')
         prevModalDialog.classList.remove('hide-modal')
         closeModal(formSelector)
      }, 2000)
   }
}

export default form