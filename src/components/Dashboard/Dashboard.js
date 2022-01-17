import { TweetContainer } from "../../containers/TweetContainer";

function Dashboard({ tweetIds }) {
  return (
    <ul>
      {tweetIds.map((id) => (
        <TweetContainer key={id} tweetId={id} />
      ))}
    </ul>
  );
}

export default Dashboard;
