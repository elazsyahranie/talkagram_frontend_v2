import { InlineIcon } from '@iconify/react';
import { useState } from 'react';
// import type { ChangeEvent } from 'react';
import './home.css';

function Home() {
  // const [chat, setChat] = useState('');
  // console.log(chat);

  type SelectedChat = {
    id: number;
    name: string;
    status: string;
  };

  const [selectedChat, setSelectedChat] = useState<SelectedChat>({
    id: 0,
    name: '',
    status: '',
  });
  // console.dir(selectedChat, { depth: null });

  // const handleChooseChat = (event: ChangeEvent<HTMLFormElement>) => {

  // };

  const chatsList = [
    { id: 1, name: 'Adrian', city: 'Jakarta', status: 'Online' },
    {
      id: 2,
      name: 'Maya',
      city: 'Bandung',
      status: 'Last seen today on 08:00',
    },
    { id: 3, name: 'Ethan', city: 'Surabaya', status: '' },
    {
      id: 4,
      name: 'Nadia',
      city: 'Yogyakarta',
      status: 'Last seen today on 08:00',
    },
    { id: 5, name: 'Julian', city: 'Medan', status: 'Online' },
    { id: 6, name: 'Clara', city: 'Semarang', status: 'Online' },
    { id: 7, name: 'Rafael', city: 'Makassar', status: '' },
    {
      id: 8,
      name: 'Sophie',
      city: 'Denpasar',
      status: 'Last seen today on 08:00',
    },
    { id: 9, name: 'Dylan', city: 'Malang', status: 'Online' },
    {
      id: 10,
      name: 'Amara',
      city: 'Palembang',
      status: 'Last seen today on 08:00',
    },
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
                    onClick={
                      () =>
                        setSelectedChat({
                          id: item.id,
                          name: item.name,
                          status: item.status,
                        })
                      // onClick={() => {
                      //   setChat(item.name);
                      //   () =>
                      //     setSelectedChat({
                      //       id: item.id,
                      //       name: item.name,
                      //       status: item.status,
                      //     });
                      // }}
                    }
                  >
                    {/* <h2 className="text-center my-auto min-w-12">Prof</h2> */}
                    <InlineIcon
                      icon="iconamoon:profile-circle-fill"
                      className="text-6xl my-auto mr-2 text-gray-400 min-w-12"
                    />
                    <div className="my-auto mx-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h2 className="font-medium">{item.name}</h2>
                        <h3 className="text-xs">08:00</h3>
                      </div>
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
          {selectedChat.id ? (
            <div className="bg-gray-800 h-21">
              <div className="mx-8 h-full flex items-center">
                {/* <h1>Name here</h1> */}
                <InlineIcon
                  icon="iconamoon:profile-circle-fill"
                  className="text-6xl my-auto mr-2 text-gray-400 min-w-12"
                />
                <div>
                  <h2 className="text-lg font-medium">{selectedChat.name}</h2>
                  {/* {chatsList ? chatsList.status ?} */}
                  <h3 className="text-sm">
                    {selectedChat.status && selectedChat.status}
                  </h3>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Home;
