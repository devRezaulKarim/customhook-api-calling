/* eslint-disable react/prop-types */
import commentStyle from "./Comment.module.css";

export default function Comment({ comment }) {
  const { name, email, body } = comment;
  return (
    <div className={commentStyle.comment}>
      <div className={commentStyle.commentHeading}>
        <h4>Name: {name.slice(0, 20)}</h4>
        <h5>Email: {email}</h5>
      </div>
      <div className={commentStyle.commentBody}>
        <p>
          <strong>Comment:</strong> {body}
        </p>
      </div>
    </div>
  );
}
