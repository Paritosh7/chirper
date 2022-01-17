import { BsReplyFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import styled from "styled-components/macro";

/** tweet from TweetContainer */
function Tweet({ authedUser, tweet }) {
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

  return (
    <li>
      <article>
        <Para>{name}</Para>
      </article>
    </li>
  );
}

const Para = styled.p`
  font-weight: 800;
`;

export default Tweet;
