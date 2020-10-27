const moreBtn = document.querySelector(
  ".second_section .video_content .moreBtn"
);
const title = document.querySelector(
  ".second_section .video_content .video_title"
);

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
