import { InlineIcon } from '@iconify/react';

function Home() {
  const chatBoxes = [
    'Adrian',
    'Maya',
    'Ethan',
    'Nadia',
    'Julian',
    'Clara',
    'Rafael',
    'Sophie',
    'Dylan',
    'Amara',
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-[30%] h-screen bg-gray-800 overflow-hidden">
          <div className="flex ms-2 me-4">
            <InlineIcon
              icon="material-symbols:menu"
              className="text-2xl text-white m-3"
            />
            <form className="flex-1 mt-1 mb-1">
              <input
                type="text"
                id="search"
                name="search"
                // defaultValue={item.label}
                // onChange={(e) => handleChange(e)}
                className="border border-gray-950 bg-gray-700 rounded-full w-full h-full mb-2"
              ></input>
            </form>
          </div>
          <div className="h-screen ms-2 overflow-y-scroll">
            <div>
              {chatBoxes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-lg flex hover:bg-gray-700 mb-2 text-white h-16 max-w-88"
                  >
                    {/* <h2 className="text-center my-auto min-w-12">Prof</h2> */}
                    <InlineIcon
                      icon="iconamoon:profile-circle-fill"
                      className="text-6xl my-auto mr-2 text-gray-400 min-w-12"
                    />
                    <div className="my-auto ml-2 min-w-0">
                      <h2 className="font-medium">{item}</h2>
                      <h3 className="truncate">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ullam obcaecati iste illum perferendis non in
                        suscipit quis deleniti dolorem ducimus!
                      </h3>
                    </div>
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
