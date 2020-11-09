const updateLoadStatus = () => {
  const loadStatus = document.querySelector('.loader');
  if (!loadStatus.innerHTML) {
    loadStatus.innerHTML = 'Loading...';
  } else {
    loadStatus.innerHTML = '';
  }
};

const getCatPic = async () => {
    const catPic = document.querySelector('.cat-pic');
    const catPicRequest = await fetch('/kitten/image');

    if (!catPicRequest.ok) {
      alert('Something went wrong! Please try again!');
    } else {
      updateLoadStatus();
      const data = await catPicRequest.json();
      catPic.src = data.src;
      updateLoadStatus();
    }
};

window.addEventListener('DOMContentLoaded', getCatPic);

const newPicBtn = document.querySelector('#new-pic');
newPicBtn.addEventListener('click', getCatPic);
