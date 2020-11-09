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

const vote = async event => {
  const voteRequest = await fetch(
    `/kitten/${event.target.id}`,
    {
      method: 'PATCH'
    }
  );

  if (!voteRequest.ok) {
    alert('Something went wrong! Please try again!');
  } else {
    const data = await voteRequest.json();
    const score = document.querySelector('.score');
    score.innerHTML = data.score;
  }
}

// Function not working – 'null' response
const addComment = async event => {
  event.preventDefault();

  const comment = document.querySelector('#user-comment');
  const updateComment = await fetch(
    '/kitten/comments',
    {
      method: 'POST',
      header: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ 
        comment: comment.value
      })
    }
  );

  if (!updateComment.ok) {
    alert('Something went wrong! Please try again!');
  } else {
    const data = await updateComment.json();
    data.comments.forEach(comment => {
      console.log(comment);
    });
  }
};

window.addEventListener('DOMContentLoaded', getCatPic);

const newPicBtn = document.querySelector('#new-pic');
newPicBtn.addEventListener('click', getCatPic);

const upVoteBtn = document.querySelector('#upvote');
upVoteBtn.addEventListener('click', vote);

const downVoteBtn = document.querySelector('#downvote');
downVoteBtn.addEventListener('click', vote);

const form = document.querySelector('.comment-form');
form.addEventListener('submit', addComment);
