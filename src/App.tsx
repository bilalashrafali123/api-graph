import "./App.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="api-heading">
          <h1>
            Type of <span className="api">APIs</span> <br /> and Their{" "}
            <span className="cases">Use Cases</span>
          </h1>
        </div>
        <div className="api-box-div">
          <button className="api-box">
            <h2>API</h2>
          </button>
        </div>

        <div className="line-div">
          <div className="line"></div>
        </div>

        <div className="internal">
          <div className="line-div">
            <div className="line"></div>
          </div>
        </div>

        <div className="horizontal-line-center">
          <div className="horizontal-line"></div>
        </div>

        <h3 className="text-center">Internal API</h3>

        <div className="two-vertical-lines">
          <div></div>
          <div></div>
        </div>

        <div className="side-labels">
          <h3>Partner API</h3>
          <h3>Open API</h3>
        </div>
      </div>
    </>
  );
};

export default App;
