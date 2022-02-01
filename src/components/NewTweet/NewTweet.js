import { useState } from "react";

function NewTweet({ addTweet, authedUser }) {
  const [tweetText, setTweet] = useState("");
  var tweetLength = 200 - tweetText.length;

  function handleTextChange(e) {
    setTweet(e.target.value);
  }

  function handleSubmit(eve) {
    eve.preventDefault();
    addTweet(tweetText, authedUser, null);
  }

  return (
    <form onSubmit={handleSubmit}>
      NewTweet
      <textarea
        placeholder="What's up?"
        onChange={handleTextChange}
        value={tweetText}
        maxLength={200}
      />
      {tweetText.length > 100 && <span>{tweetLength}</span>}
      <button disabled={tweetText === ""} type="submit">
        Tweet
      </button>
    </form>
  );
}

export default NewTweet;
