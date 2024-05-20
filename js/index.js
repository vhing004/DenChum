let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video1-player");
  player = new YT.Player("video2-player");
  player = new YT.Player("video3-player");
}

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".striking_item");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video");
      const popup = document.getElementById(videoId);
      popup.style.display = "flex";
      document.body.classList.add("no-scroll");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video");
      const popup = document.getElementById(videoId);
      const iframe = popup.querySelector("iframe");
      const iframeSrc = iframe.src;
      iframe.src = "";
      popup.style.display = "none";
      document.body.classList.remove('no-scroll');
      iframe.src = iframeSrc;
    });
  });

  popups.forEach((popup) => {
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        const iframe = popup.querySelector("iframe");
        const iframeSrc = iframe.src;
        iframe.src = "";
        popup.style.display = "none";
        document.body.classList.remove('no-scroll');
        iframe.src = iframeSrc;
      }
    });
  });
});
