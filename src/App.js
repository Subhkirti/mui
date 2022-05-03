
import LeftSide from "./LeftSide";
import Nav from "./Nav";
import Main from "./Main";
import RightSide from "./RightSide";
function App(){
  return (
  <>
  <Nav />
  <div className="centered-things">
  <LeftSide />
  <Main />
  <RightSide />
  </div>
  </>
  );
}

export default App;
