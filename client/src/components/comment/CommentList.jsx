import classes from './commentList.module.css';

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments
        .sort((a, b) => {
          const bDate = new Date(b.createdAt).getTime();
          const aDate = new Date(a.createdAt).getTime();
          return bDate - aDate;
        })
        .map((comment) => (
          <li key={comment._id}>
            <p>{comment.comment}</p>
            <div className={classes.details}>
              <span>
                By <address>{comment.user_info.name}</address>
              </span>
              <time>
                {new Date(comment.createdAt).toLocaleDateString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
