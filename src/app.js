const zoomMe = document.querySelector('#zoom-me')

setTimeout(() => {
  zoomMe.style.transform = 'scale(1.5)'
}, 1000)

setTimeout(() => {
  zoomMe.style.transform = ''
}, 2000)
