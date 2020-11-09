const updateLoadStatus = () => {
  const loadStatus = document.querySelector('.loader');
  if (!loadStatus.innerHTML) {
    loadStatus.innerHTML = 'Loading...';
  } else {
    loadStatus.innerHTML = '';
  }
};

const getCatPic = async () => {
  try {
    const catPic = document.querySelector('.cat-pic');
    const catPicRequest = await fetch('/kitten/image');
    updateLoadStatus();
    const data = await catPicRequest.json();
    updateLoadStatus();

    catPic.src = data.src;
  } catch (e) {
    console.error(e);
  }
};

window.addEventListener('DOMContentLoaded', getCatPic);

const newPicBtn = document.querySelector('#new-pic');
newPicBtn.addEventListener('click', getCatPic);