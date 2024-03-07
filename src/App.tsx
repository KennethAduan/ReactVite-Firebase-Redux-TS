// Uncomment the following line for Using Redux Provider
// import AppProviders from "./services/provider";
function App() {
  return (
    <div className="bg-[#10172A] min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*poaGV4iICp06Q-yTlA2g_g.png"
          className="w-auto rounded-md h-36"
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold text-white">
        Vite + React + Firebase + RTK
      </h1>
      <div className="p-4 mt-4 bg-white rounded-md shadow-md card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
