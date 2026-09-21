import { InlineIcon } from '@iconify/react';
import './home.css';

function Home() {
  const chatsList = [
    { name: 'Adrian', city: 'Jakarta' },
    { name: 'Maya', city: 'Bandung' },
    { name: 'Ethan', city: 'Surabaya' },
    { name: 'Nadia', city: 'Yogyakarta' },
    { name: 'Julian', city: 'Medan' },
    { name: 'Clara', city: 'Semarang' },
    { name: 'Rafael', city: 'Makassar' },
    { name: 'Sophie', city: 'Denpasar' },
    { name: 'Dylan', city: 'Malang' },
    { name: 'Amara', city: 'Palembang' },
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="w-[30%] h-screen text-white bg-gray-800 border-r border-gray-500 overflow-hidden">
          <h1 className="text-4xl ms-2 my-3 font-semibold">Talkagram</h1>
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
          <div className="h-screen ms-2 chatBoxContainer overflow-y-scroll">
            <div>
              {/* h16 */}
              {chatsList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-18 rounded-lg flex items-center hover:bg-gray-700 mb-2 max-w-88"
                  >
                    {/* <h2 className="text-center my-auto min-w-12">Prof</h2> */}
                    <InlineIcon
                      icon="iconamoon:profile-circle-fill"
                      className="text-6xl my-auto mr-2 text-gray-400 min-w-12"
                    />
                    <div className="my-auto ml-2 min-w-0">
                      <h2 className="font-medium">{item.name}</h2>
                      <h3 className="truncate">
                        Greetings! I'm {item.name} from {item.city}. Nice to
                        meet you!
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[80%] bg-gray-700">{/* <h1>Right</h1> */}</div>
      </div>
    </>
  );
}

export default Home;
