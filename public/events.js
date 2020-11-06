window.addEventListener('DOMContentLoaded', event => {
  let catPic = document.querySelector('.cat-pic');
  const newPicBtn = document.querySelector('#new-pic');
  const loader = document.querySelector('.loader');

  // function getCatPic() {
  //   fetch('/kitten/image')
  //     .then(cat => cat.json())
  //     .then(catObj => {
  //       catPic.src = catObj.src;
  //     });
  // }

  let getCatPic2 = async () => {
    let catRequest = await fetch('/kitten/image');
    loader.innerHTML = "Loading...";
    let catReturned = await catRequest.json();
    let catObj = await catReturned;
    loader.innerHTML = '';
    catPic.src = catObj.src;
  };

  newPicBtn.addEventListener('click', event => {
    getCatPic2();
  });

  getCatPic2();
});
