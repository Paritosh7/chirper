/** tweet from TweetContainer */
function Tweet({ authedUser, tweet }) {
  if (tweet === null) return <p>This tweet doesn't exist</p>;

  return (
    <li>
      <article></article>
    </li>
  );
}

export default Tweet;
