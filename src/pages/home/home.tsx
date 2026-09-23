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
    message: string;
  };

  const [selectedChat, setSelectedChat] = useState<SelectedChat>({
    id: 0,
    name: '',
    status: '',
    message: '',
  });
  // console.dir(selectedChat, { depth: null });

  // const handleChooseChat = (event: ChangeEvent<HTMLFormElement>) => {

  // };

  const chatsList = [
    {
      id: 1,
      name: 'Adrian Blake',
      city: 'Jakarta',
      message: 'Hey, how are you?',
      status: 'Online',
    },
    {
      id: 2,
      name: 'Maya Collins',
      city: 'Bandung',
      message: 'See you tomorrow!',
      status: 'Last seen on 08:00',
    },
    {
      id: 3,
      name: 'Ethan Parker',
      city: 'Surabaya',
      message: 'That sounds great.',
      status: '',
    },
    {
      id: 4,
      name: 'Nadia Wilson',
      city: 'Yogyakarta',
      message: "I'm on my way.",
      status: 'Last seen on 08:00',
    },
    {
      id: 5,
      name: 'Julian Carter',
      city: 'Medan',
      message: 'Have a nice day!',
      status: 'Online',
    },
    {
      id: 6,
      name: 'Clara Morgan',
      city: 'Semarang',
      message: 'What are you doing?',
      status: 'Last seen on 08:00',
    },
    {
      id: 7,
      name: 'Rafael Brooks',
      city: 'Makassar',
      message: "Let's meet later.",
      status: 'Last seen on 08:00',
    },
    {
      id: 8,
      name: 'Sophie Bennett',
      city: 'Denpasar',
      message: 'Thanks for helping!',
      status: '',
    },
    {
      id: 9,
      name: 'Dylan Foster',
      city: 'Malang',
      message: 'See you soon.',
      status: '',
    },
    {
      id: 10,
      name: 'Amara Hayes',
      city: 'Palembang',
      message: 'Good morning!',
      status: 'Online',
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
                          message: item.message,
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
                      <h3 className="truncate">{item.message}</h3>
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
