const openVideo = document.querySelectorAll('.video');
const clickOpen = document.querySelectorAll('.striking_item');
const closeVideo = document.querySelectorAll('.close')

clickOpen.forEach((tab, index) => { 
    
    const video = openVideo[index]
    const close = closeVideo[index]
    tab.onclick = function() {

        video.classList.add('active')
        close.onclick = () => {
          video.classList.remove('active')
          video.pause()

          window.onscroll = false
        }
    }
 })

