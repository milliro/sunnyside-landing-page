const btnMobile = document.querySelector('#btn-mobile')
const nav = document.querySelector('.navegation')
const internalLinks = document.querySelectorAll('.internal-links a[href^="#"]')

const footerLinks = document.querySelectorAll('.footer-list a[href^="#"]')

const getScrollTopByHref = element => {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

const scrollToPosition = to => {
  window.scroll({
    top: to,
    behavior: "smooth"
  })
}

const removeActiveToMenu = () => {
  nav.classList.remove('active')
}

const addActiveToMenu = () => {
  nav.classList.toggle('active')
}

const scrollToIdOnClick = event => {
  event.preventDefault()
  const to = getScrollTopByHref(event.target)
  scrollToPosition(to)
  removeActiveToMenu()
}

const ifScrollWindow = () => {
  if (window.scrollY > 80) {
    removeActiveToMenu()
  }
}

internalLinks.forEach(link => {
  link.addEventListener('click', scrollToIdOnClick)
})

footerLinks.forEach(link => {
 link.addEventListener('click', scrollToIdOnClick) 
})

window.addEventListener('scroll', ifScrollWindow)
btnMobile.addEventListener('click', addActiveToMenu)