import { BsReplyFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import styled from "styled-components/macro";

/** tweet from TweetContainer */
function Tweet({ authedUser, tweet, handleLike }) {
  if (tweet === null) return <p>This tweet doesn't exist</p>;

  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    id,
    parent,
  } = tweet;

  const handleParentTweet = (eve) => {
    eve.preventDefault();
  };

  return (
    <li>
      <article>
        <img alt={`${name} profile`} src={avatar}></img>
        {parent && (
          <button onClick={handleParentTweet}>
            `replying to @${parent.author}`
          </button>
        )}
        <p>{text}</p>
        <button onClick={() => handleLike(id, authedUser, hasLiked)}>
          {hasLiked ? <BsSuitHeartFill size={32} /> : <BsSuitHeart size={32} />}
          <label>{likes}</label>
        </button>
        <button>
          <BsReplyFill />
          <label>{replies !== 0 && replies}</label>
        </button>
      </article>
    </li>
  );
}

export default Tweet;
