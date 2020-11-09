const getCatPic = async () => {
  try {
    const catPic = document.querySelector('.cat-pic');
    const catPicRequest = await fetch('/kitten/image');
    const data = await catPicRequest.json();

    catPic.src = data.src;
  } catch (e) {
    console.error(e);
  }
};

window.addEventListener('DOMContentLoaded', getCatPic);
