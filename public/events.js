window.addEventListener('DOMContentLoaded', event => {
  let catPic = document.querySelector('.cat-pic');
  const newPicBtn = document.querySelector('#new-pic');
  const loader = document.querySelector('.loader');

  let getCatPic2 = async () => {
      let catRequest = await fetch('/kitten/image');
      if (!catRequest.ok) {
        alert('Something went wrong! Please try again!');
      } else {
        loader.innerHTML = "Loading...";
        let catReturned = await catRequest.json();
        loader.innerHTML = '';
        catPic.src = catReturned.src;
      }
  };

  newPicBtn.addEventListener('click', event => {
    getCatPic2();
  });

  getCatPic2();
});
