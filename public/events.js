let getCatPic = async () => {
  let catPic = document.querySelector('.cat-pic');
  let catRequest = await fetch('/kitten/image');
  
  if (!catRequest.ok) {
    alert('Something went wrong! Please try again!');
  } else {
    const loader = document.querySelector('.loader');
    loader.innerHTML = "Loading...";
    let catReturned = await catRequest.json();
    loader.innerHTML = '';
    catPic.src = catReturned.src;
  }
};

let vote = async event => {
  try {
    const res = await fetch(`kitten/${event.target.id}`, { method: 'PATCH' });

    if (!res.ok) {
      throw res;
    } else {
      const data = await res.json();
      const score = document.querySelector('.score');
      score.innerText = data.score;
    }
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('DOMContentLoaded', getCatPic);

const newPicBtn = document.querySelector('#new-pic');
newPicBtn.addEventListener('click', getCatPic);

const upVoteBtn = document.querySelector('#upvote');
upVoteBtn.addEventListener('click', vote);

const downVoteBtn = document.querySelector('#downvote')
downVoteBtn.addEventListener('click', vote);
