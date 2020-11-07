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
    const res = await fetch(`/kitten/${event.target.id}`, { method: 'PATCH' });

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

let addComment = async event => {
  event.preventDefault();
  
  try {
    const comment = document.querySelector('#user-comment');
    let res = await fetch(
      '/kitten/comments',
      {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ comments: comment.value }),
      });
      
      if (!res.ok) {
        throw res;
      } else {
        const data = await res.json();
        const commentField = document.querySelector('.comments');
        data.comments.forEach(comment => {
          commentField.innerHTML = '';
          commentField.innerHTML += comment; // Not working, fix
          comment.value = ''; // Not working, fix
        });
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

const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', addComment);