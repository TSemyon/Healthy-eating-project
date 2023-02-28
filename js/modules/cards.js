import { getResource } from "../services/services"

function cards() {
   class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {
         this.src = src
         this.alt = alt
         this.title = title
         this.descr = descr
         this.price = price
         this.parent = document.querySelector(parentSelector)
         this.transfer = 75
         this.changeToRUB()
      }

      changeToRUB() {
         this.price *= this.transfer
      }

      render() {
         const element = document.createElement('div')
         element.classList.add('menu-card__column')
         element.innerHTML = ` 
            <div class="menu-card__item item-menu">
               <div class="item-menu__img _ibg">
                  <img src=${this.src} alt=${this.alt}>
               </div>
               <div class="item-menu__body">
                  <div class="item-menu__text text">
                     <div class="text__title">${this.title}</div>
                     <div class="text__description">${this.descr}</div>
                  </div>
                  <div class="item-menu__price price">
                     <div class="price__cost">Цена:</div>
                     <div class="price__total"><span>${this.price}</span>Рублей/День</div>
                  </div>
               </div>
            </div> 
         `
         this.parent.append(element)
      }
   }

   getResource('http://localhost:3000/menu')
      .then(data => {
         data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu-card .menu-card__cards').render()
         })
      })
}

export default cards

