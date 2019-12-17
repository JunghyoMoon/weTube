import axios from "axios";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtnArray = document.querySelectorAll(".js-delete-btn");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const removeCommentBlock = comment => {
  comment.parentNode.removeChild(comment);
  decreaseNumber();
};

const deleteComment = async event => {
  event.preventDefault();
  const videoId = window.location.href.split("/videos/")[1];
  const comment = event.target.parentNode;
  const commentId = event.target.dataset.commentid;
  const response = await axios({
    url: `/api/${videoId}/delete-comment`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    removeCommentBlock(comment);
  } else {
    console.log(response);
  }
};

const init = () => {
  deleteBtnArray.forEach(currentComment => {
    currentComment.addEventListener("click", deleteComment);
  });
};

if (commentList) {
  init();
}
