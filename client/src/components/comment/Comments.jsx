import { useEffect, useState } from 'react';

import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './comments.module.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Comments({ productId }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const location = useLocation();
  let token = '';
  if (userInfo) token = userInfo.token;

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`https://e-commerce-fwd.herokuapp.com/comment/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [showComments, productId]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    fetch('https://e-commerce-fwd.herokuapp.com/comment/', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        setComments((prev) => prev.concat(data.comment));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? (
          <span>Hide Comments &uarr;</span>
        ) : (
          <span>Show Comments &darr;</span>
        )}
      </button>
      {showComments && userInfo && (
        <NewComment productId={productId} onAddComment={addCommentHandler} />
      )}
      {showComments && !userInfo && (
        <button>
          <Link
            to={`/login?redirect=/${location.pathname}`}
            className='route-link'
          >
            Log in to add comment
          </Link>
        </button>
      )}
      {showComments && !isFetchingComments && (
        <CommentList comments={comments} />
      )}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
