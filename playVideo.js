const play = () => {
    const video = document.querySelector('video')
    const button = document.querySelector('.play_start')
    video.play()
    button.style.display = "none"
}