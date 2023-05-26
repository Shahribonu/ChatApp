const ChatPage=()=>import('./views/ChatPage.vue')
const ChatMessage=()=>import('./views/ChatMessage.vue')

export default [
    {
        path:'/chat',
        name: 'chat',
        component: ChatPage,
        children: [
            {
              path: '/:id',
              name:ChatMessage,
              component: ChatMessage
            }
          ]
    },
 
]