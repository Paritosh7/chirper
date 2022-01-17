import { useEffect } from "react";
import { DashboardContainer } from "../../containers/DashboardContainer";

/** fetchInitialData from AppContainer */
function App({ loading, fetchInitialData }) {
  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : <DashboardContainer />}
    </div>
  );
}

export default App;
