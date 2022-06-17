import './App.css';

import HeadFormbot from "./compo/form/HeadFormbot"
import HeadFormtop from "./compo/form/HeadFormtop"

import BodyForm from "./compo/form/BodyForm"

function App() {
  return (
    <div className="App">
      <HeadFormtop/>
      <HeadFormbot/>
      <BodyForm>
      </BodyForm>
    </div>
  );
}

export default App;
