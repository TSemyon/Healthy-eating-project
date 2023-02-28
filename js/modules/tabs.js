function tabs(tabsSelector, tabsContentSelector, tabsParrentSelector, image, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
  tabsContent = document.querySelectorAll(tabsContentSelector),
  tabsParent = document.querySelector(tabsParrentSelector),
  imageBg = document.querySelectorAll(image)

   function hideTabContent() {
      imageBg.forEach(item => {
         item.classList.add('hide')
         item.classList.remove('show', 'fade')
      })
      tabsContent.forEach(item => {
         item.classList.add('hide')
         item.classList.remove('show', 'fade')
      })
      tabs.forEach(item => {
         item.classList.remove(activeClass)
      })
   }
   function showTabContent(i = 0) {
      imageBg[i].classList.add('show', 'fade')
      imageBg[i].classList.remove('hide')
      tabsContent[i].classList.add('show', 'fade')
      tabsContent[i].classList.remove('hide')
      tabs[i].classList.add(activeClass)
   }
   hideTabContent()
   showTabContent()

   tabsParent.addEventListener('click', (event) => {
      const target = event.target

      if(target && target.classList.contains(tabsSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if(target === item) {
               hideTabContent()
               showTabContent(i)
            }
         })
      }
   })
}

export default tabs