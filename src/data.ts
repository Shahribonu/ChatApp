export interface Chat {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    messages: Object;
    password: string;
  }
  
  export const chats = [
      {
          id: 1,
          name: "Shahribonu",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo 1'],
          password: '123'
        },
        {
          id: 2,
          name: "Shahribonu 2",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo 2'],
          password: '123'
        },
        {
          id: 3,
          name: "Shahribonu 3",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
          password: '123'
        },
        {
          id: 4,
          name: "Shahribonu 4",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
          password: '123'
        },
        {
          id: 5,
          name: "Shahribonu 5",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
          password: '123'
        },
    ];