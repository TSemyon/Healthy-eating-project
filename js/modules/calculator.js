import { validateInput } from "../services/services";

function calc() {

   const result = document.querySelector('.calculator__result span')
   let sex = 'female',
   height, weight, age,
   ratio = 1.375


   function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = null
         return
      }
      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
      } else {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
      }
   }
   
   calcTotal()

   function getStaticInformation(parentSelector, activeClass) {
      const elements = document.querySelectorAll(`${parentSelector} div`)

      elements.forEach(elem => {
         elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
               ratio = +e.target.getAttribute('data-ratio')
            } else {
               sex = e.target.getAttribute('id')
            }

            elements.forEach(elem => {
               elem.classList.remove(activeClass)
            });

            e.target.classList.add(activeClass)

            calcTotal()
         })
      })
   }

   getStaticInformation('#gender', 'active')
   getStaticInformation('.calculating__choose_big', 'active')
   
   let reg = /^[0-9\s]*$/

   function getDynamicInformation(selector) {
      const input = document.querySelector(selector)
    
      input.addEventListener('input', () => {
         if(!validateInput(reg, input.value)) {
            input.classList.add('error')
         } else {
            input.classList.remove('error')
            switch(input.getAttribute('id')) {
               case "height":
                  height = +input.value
                  break
               case "weight":
                  weight = +input.value
                  break
               case "age":
                  age = +input.value
                  break
            }
         }
    
         calcTotal()
      })
   }

   getDynamicInformation('#height')
   getDynamicInformation('#weight')
   getDynamicInformation('#age')
}

export default calc