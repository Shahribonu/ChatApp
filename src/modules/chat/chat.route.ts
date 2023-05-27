const ChatPage=()=>import('./views/ChatPage.vue')
const ChatMessages=()=>import('./views/ChatMessage.vue')

export default [
    {
        path:'/chat',
        name: 'chat',
        component: ChatPage,
        children: [
            {
              path: 'messages/:id',
              name:'chat-messages',
              component: ChatMessages
            }
          ]
    },
 
]