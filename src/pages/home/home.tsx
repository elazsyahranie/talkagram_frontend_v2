import { InlineIcon } from '@iconify/react';
import { useState } from 'react';
// import type { ChangeEvent } from 'react';
import './home.css';

function Home() {
  const [chat, setChat] = useState('');
  console.log(chat);

  // const handleChooseChat = (event: ChangeEvent<HTMLFormElement>) => {

  // };

  const chatsList = [
    { id: 1, name: 'Adrian', city: 'Jakarta' },
    { id: 2, name: 'Maya', city: 'Bandung' },
    { id: 3, name: 'Ethan', city: 'Surabaya' },
    { id: 4, name: 'Nadia', city: 'Yogyakarta' },
    { id: 5, name: 'Julian', city: 'Medan' },
    { id: 6, name: 'Clara', city: 'Semarang' },
    { id: 7, name: 'Rafael', city: 'Makassar' },
    { id: 8, name: 'Sophie', city: 'Denpasar' },
    { id: 9, name: 'Dylan', city: 'Malang' },
    { id: 10, name: 'Amara', city: 'Palembang' },
  ];

  return (
    <>
      <div className="flex text-white h-screen">
        <div className="w-[30%] h-screen  bg-gray-800 border-r border-gray-500 overflow-hidden">
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
                    className="h-18 rounded-lg flex items-center hover:bg-gray-700 hover:cursor-pointer mb-2 max-w-88"
                    onClick={() => setChat(item.name)}
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
        <div className="w-[80%] bg-gray-700">
          {/* <h1>Right</h1> */}
          {chat && (
            <div className="bg-gray-800 h-21">
              <div className="mx-8 h-full flex items-center">
                {/* <h1>Name here</h1> */}
                <InlineIcon
                  icon="iconamoon:profile-circle-fill"
                  className="text-6xl my-auto mr-2 text-gray-400 min-w-12"
                />
                <h2 className="text-lg font-medium">{chat}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
