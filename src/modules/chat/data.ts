export interface Chat {
    id?: number;
    name: string;
    avatar: string;
    lastMessage: string;
    messages: Object;
   
  }
  const picture = '@/assets/images/profile.png'
  export const chats = [
      {
          id: 1,
          name: "Shahribonu",
          avatar: picture,
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo 1'],
         
        },
        {
          id: 2,
          name: "Madina",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo 2'],
      
        },
        {
          id: 3,
          name: "Zarifa",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
   
        },
        {
          id: 4,
          name: "Durdona",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
   
        },
        {
          id: 5,
          name: "Sarvinoz",
          avatar: "john-doe-avatar.jpg",
          lastMessage: "Hello there!",
          messages: ['Hello there!','helloo'],
        
        },
    ];