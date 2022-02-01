import { useEffect } from "react";
import { DashboardContainer } from "../../containers/DashboardContainer";
import NewTweet from "../NewTweet/NewTweet";

/** fetchInitialData from AppContainer */
function App({ loading, fetchInitialData }) {
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div className="App">{loading ? <p>Loading...</p> : <NewTweet />}</div>
  );
}

export default App;
