function App() {
  return (
    <div className="App">
      <div class="p-24 flex flex-wrap items-center justify-center">
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg">
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              class="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Indoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Peace Lily</span>
              <span class="block bg-white rounded-full text-blue-800 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $36.00
              </span>
              <span class="block bg-white rounded-full text-blue-800 text-xs font-bold px-3 py-2 leading-none flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  height="10"
                  width="10"
                >
                  <defs>
                    <g id="heart">
                      <path
                        d="M0 200 v-200 h200 
    a100,100 90 0,1 0,200
    a100,100 90 0,1 -200,0
    z"
                      />
                    </g>
                  </defs>
                  <use
                    class="outline "
                    fill="red"
                    transform="rotate(225,150,121)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
