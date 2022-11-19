import Discription from "./components/discription.component";
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        <div>
          <img
            src="./src/assets/headphone.png"
            alt="headphone"
            className="mx-auto duration-200 w-60 hover:scale-105"
          />
        </div>
        <Discription />
      </div>
    </div>
  );
}

export default App;
