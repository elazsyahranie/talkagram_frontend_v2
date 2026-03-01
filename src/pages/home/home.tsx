import { InlineIcon } from '@iconify/react';

function Home() {
  const chatBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-[30%] h-screen overflow-hidden">
          <div className="flex ms-2 me-4 border">
            <InlineIcon icon="material-symbols:menu" className="text-2xl m-3" />
            <form className="flex-1 mt-1 mb-1">
              <input
                type="text"
                id="search"
                name="search"
                // defaultValue={item.label}
                // onChange={(e) => handleChange(e)}
                className="border border-gray-950 rounded-full w-full h-full mb-2"
              ></input>
            </form>
          </div>
          <div className="h-screen ms-2 overflow-y-scroll">
            <div>
              {chatBoxes.map((_item, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-md hover:bg-gray-200 h-16"
                  >
                    <h2>Chat boxes here</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[80%] border">
          <h1>Right</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
