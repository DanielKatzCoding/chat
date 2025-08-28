import { IChat, ChatBound } from '../types/types'

export const Chats: IChat[] = [
    {
        id: 'e3b0c442-98fc-1fc2-9bfb-4c4b6e0d327c',
        msgs: [
            { text: 'Hi, how are you?', timestamp: '10:00', bound: ChatBound.outgoing },
            { text: 'Good, what\'s up?', timestamp: '10:05', bound: ChatBound.incoming },
            { text: 'Alright... you wanna go out?', timestamp: '10:09', bound: ChatBound.outgoing },
            { text: 'Maybe later, I have work.', timestamp: '10:10', bound: ChatBound.incoming },
            { text: 'No worries, let me know!', timestamp: '10:12', bound: ChatBound.outgoing },
            { text: 'Will do. How was your weekend?', timestamp: '10:13', bound: ChatBound.incoming },
            { text: 'Pretty good, went hiking.', timestamp: '10:15', bound: ChatBound.outgoing },
            { text: 'Nice! Where did you go?', timestamp: '10:16', bound: ChatBound.incoming },
            { text: 'Galilee mountains.', timestamp: '10:17', bound: ChatBound.outgoing },
            { text: 'Sounds amazing!', timestamp: '10:18', bound: ChatBound.incoming },
            { text: 'We should go together next time.', timestamp: '10:19', bound: ChatBound.outgoing },
            { text: 'Absolutely, count me in!', timestamp: '10:20', bound: ChatBound.incoming },
        ]
    },
    {
        id: '7f9c2c4a-1b2e-4d3c-8f9a-2a6b7c8d9e0f',
        msgs: [
            { text: 'Hey Lior!', timestamp: '09:30', bound: ChatBound.outgoing },
            { text: 'Hey Daniel, how are you?', timestamp: '09:31', bound: ChatBound.incoming },
            { text: 'Doing well, thanks!', timestamp: '09:32', bound: ChatBound.outgoing },
            { text: 'Want to grab coffee later?', timestamp: '09:33', bound: ChatBound.outgoing },
            { text: 'Sure, sounds good!', timestamp: '09:34', bound: ChatBound.incoming },
            { text: 'Where should we meet?', timestamp: '09:35', bound: ChatBound.outgoing },
            { text: 'Let\'s go to Aroma.', timestamp: '09:36', bound: ChatBound.incoming },
            { text: 'Perfect, see you at 11?', timestamp: '09:37', bound: ChatBound.outgoing },
            { text: 'Works for me!', timestamp: '09:38', bound: ChatBound.incoming },
            { text: 'Great, I\'ll grab us a table.', timestamp: '09:39', bound: ChatBound.outgoing },
            { text: 'Thanks! Want anything special?', timestamp: '09:40', bound: ChatBound.incoming },
            { text: 'Just a cappuccino.', timestamp: '09:41', bound: ChatBound.outgoing },
        ]
    },
    {
        id: 'c1a2b3c4-d5e6-7f89-0abc-1d2e3f4a5b6c',
        msgs: [
            { text: 'Aba, are you coming to the meeting?', timestamp: '11:00', bound: ChatBound.outgoing },
            { text: 'Yes, I\'ll be there in 10 minutes.', timestamp: '11:01', bound: ChatBound.incoming },
        ]
    },
    {
        id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
        msgs: [
            { text: 'Maya, did you finish the report?', timestamp: '14:20', bound: ChatBound.outgoing },
            { text: 'Almost done, will send soon!', timestamp: '14:22', bound: ChatBound.incoming },
            { text: 'Great, thanks!', timestamp: '14:23', bound: ChatBound.outgoing },
        ]
    },
    {
        id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
        msgs: [
            { text: 'Yossi, are you free for a call?', timestamp: '16:00', bound: ChatBound.outgoing },
            { text: 'Yes, call me now.', timestamp: '16:01', bound: ChatBound.incoming },
        ]
    },
    {
        id: 'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
        msgs: [
            { text: 'Noa, can you review my code?', timestamp: '17:45', bound: ChatBound.outgoing },
            { text: 'Sure, send me the link.', timestamp: '17:46', bound: ChatBound.incoming },
            { text: 'Sent!', timestamp: '17:47', bound: ChatBound.outgoing },
            {
                text: 'Here is a very long message to test the chat UI. This message should be about one hundred characters long so you can see how it wraps and scrolls inside the chat block container. Enjoy testing!',
                timestamp: '17:48',
                bound: ChatBound.outgoing
            }
        ]
    },
    {
        id: "a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b2c3d",
        msgs: []
    }
];