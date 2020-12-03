function App() {
  return (
    <div className="App">
      <div class="p-24 flex flex-wrap items-center justify-center">
        <div class="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg transition duration-200 hover:shadow-2xl">
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
              <span class="block bg-white rounded-full text-blue-800 text-xs font-bold leading-none flex items-center h-8 w-8 fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="currentColor"
                  class="w-6 h-6 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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
