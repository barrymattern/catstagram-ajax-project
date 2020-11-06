window.addEventListener('DOMContentLoaded', event => {
  let catPic = document.querySelector('.cat-pic');

  // function getCatPic() {
  //   fetch('/kitten/image')
  //     .then(cat => cat.json())
  //     .then(catObj => {
  //       catPic.src = catObj.src;
  //     });
  // }

  let getCatPic2 = async () => {
    let catRequest = await fetch('/kitten/image');
    let catReturned = await catRequest.json();
    let catObj = await catReturned;

    catPic.src = catObj.src;
  };

  getCatPic2();
});
