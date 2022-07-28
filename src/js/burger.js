const burger = document.querySelector('.burger')
const lists = document.querySelector('.lists')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  lists.classList.toggle('active')
})

document.querySelectorAll('.list').forEach(n => n.addEventListener('click', () => {
burger.classList.remove('active')
lists.classList.remove('active')
}))