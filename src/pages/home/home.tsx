import { InlineIcon } from '@iconify/react';
import { useState } from 'react';
// import type { ChangeEvent } from 'react';
import './home.css';

function Home() {
  // const [chat, setChat] = useState('');
  // console.log(chat);

  const chatTypeButtons = [
    { label: 'All', id: '' },
    { label: 'Personal Chat', id: 'personal_chat' },
    { label: 'Group', id: 'group' },
  ];

  const [selectedTypeChat, setSelectedTypeChat] = useState('');

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
      message: "Hey, how are you? Haven't heard from you in a while.",
      status: 'Online',
      type: 'personal_chat',
    },
    {
      id: 2,
      name: 'WEEKEND PLANS',
      city: 'Bandung',
      message: "See you tomorrow! Don't forget to bring the documents.",
      status: 'Last seen on 08:00',
      type: 'group',
    },
    {
      id: 3,
      name: 'Ethan Parker',
      city: 'Surabaya',
      message: "That sounds great. Let me know when you're available.",
      status: 'Online',
      type: 'personal_chat',
    },
    {
      id: 4,
      name: 'Nadia Wilson',
      city: 'Yogyakarta',
      message: "I'm on my way. I should arrive in about fifteen minutes.",
      status: '',
      type: 'personal_chat',
    },
    {
      id: 5,
      name: 'UNITED OFFICE TEAM',
      city: 'Medan',
      message: 'Have a nice day! Hopefully we can catch up sometime soon.',
      status: 'Last seen on 08:00',
      type: 'group',
    },
    {
      id: 6,
      name: 'Clara Morgan',
      city: 'Semarang',
      message: 'What are you doing this weekend?',
      status: 'Online',
      type: 'personal_chat',
    },
    {
      id: 7,
      name: 'VICTORY Gaming Squad',
      city: 'Makassar',
      message: "Let's meet later. I know a nice place we could try.",
      status: '',
      type: 'group',
    },
    {
      id: 8,
      name: 'Sophie Bennett',
      city: 'Denpasar',
      message: 'Thanks for helping! I really appreciate what you did.',
      status: 'Online',
      type: 'personal_chat',
    },
    {
      id: 9,
      name: 'Family_Group',
      city: 'Malang',
      message: "See you soon. I'll message you when I get there.",
      status: 'Last seen on 08:00',
      type: 'group',
    },
    {
      id: 10,
      name: 'Amara Hayes',
      city: 'Palembang',
      message: "Good morning! Hope you're having a great start to the day.",
      status: '',
      type: 'personal_chat',
    },
  ];

  return (
    <>
      <div className="flex text-white h-screen">
        <div className="w-[30%] h-screen  bg-gray-800 border-r border-gray-500 overflow-hidden">
          <h1 className="text-4xl ms-2 my-3 font-semibold">Talkagram</h1>
          <div className="flex ms-2 me-4 my-3">
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
          <div className="flex ms-2 me-4 my-3">
            {chatTypeButtons.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`hover:cursor-pointer border border-gray-500 ${selectedTypeChat === item.id && `bg-sky-700/35`} rounded-full px-3 py-1 text-sm me-3`}
                  onClick={() => setSelectedTypeChat(item.id)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
          <div className="h-screen ms-2 chatBoxContainer overflow-y-scroll">
            <div>
              {/* h16 */}
              {chatsList
                .filter(
                  (item) => !selectedTypeChat || item.type === selectedTypeChat,
                )
                // .filter((item) => )
                .map((item, index) => {
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
                      <div className="my-auto mx-1 min-w-0 w-full">
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
        {/* <a href="https://www.magnific.com/free-vector/hand-drawn-doodle-icons-set_24097127.htm#fromView=search&page=1&position=3&uuid=83b70490-36d6-4dee-8c48-497c3a269af0&track=ais_hybrid&query=doodle+png">Image by brgfx on Magnific</a> */}
        {/* bg-gray-700 */}
        <div className="w-[80%] chatContainer">
          {/* <h1>Right</h1> */}
          {/* CONTACT/GROUP NAME TASKBAR */}
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
