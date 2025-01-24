import "./App.css";
import napoleon from "./assets/napoldon.jpg";
import code from "./assets/coding.jpg";

function App() {
  return (
    <>
      <div>Vision Board</div>
      <div>The fog is where the learning happens.</div>
      <div>
        It's not about big leaps--it's about staying in motion, even if it's a
        shuffle forward.
      </div>
      <div>
        The map might feel hazy now, but the act of walking is what brings it
        into focus.
      </div>
      <div>
        Home isn't where you're from, it's where you find light when all grows
        dark.
      </div>
      <div>It's not victory that makes a man. It's his defeats.</div>
      <div>Wise men read books about history. Strong men write them.</div>
      <img src={napoleon} className="napoleon" />
      <img src={code} className="code" />
    </>
  );
}

export default App;
