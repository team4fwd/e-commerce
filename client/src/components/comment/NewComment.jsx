import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './newComment.module.css';

const NewComment = ({ productId, onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  const commentInputRef = useRef();

  const sendCommentHandler = (e) => {
    e.preventDefault();

    const enteredComment = commentInputRef.current.value;

    if (!enteredComment || enteredComment.trim() === '') {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      comment: enteredComment,
      user_info: {
        user_id: userInfo._id,
        name: `${userInfo.firstName} ${userInfo.lastName}`,
      },
      product_id: productId,
    });
  };

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.btn}>Submit</button>
    </form>
  );
};

export default NewComment;
