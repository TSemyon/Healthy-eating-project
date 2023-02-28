import tabs from './modules/tabs';
import timer from './modules/timer';
import calc from './modules/calculator';
import cards from './modules/cards';
import form from './modules/form'
import modal from './modules/modal'
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
   const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000)

   tabs('.menu__item', '.main-block__description', '.header__menu', '.main-block__bg', 'active')
   timer('.content-block__body', '2023-05-18')
   calc()
   cards()
   form('form', modalTimerId)
   modal('[data-modal]', '.modal', modalTimerId)

})
