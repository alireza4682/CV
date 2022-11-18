import Discription from "./components/discription.component";
function App() {
  return (
    <div className="flex  items-center justify-center  rounder-lg shadow-md">
      <div className="flex flex-col items-center justify-center p-10">
        <img
          src="./assets/headphone.png"
          alt="headphone"
          className="justify-start"
        />
        <Discription />
      </div>
    </div>
  );
}

export default App;
