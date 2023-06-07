import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '5a170a9d-3291-432a-88e0-881b276dc1d2',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow  {...chatProps} style={{height:'100%'}} />
        </div>
    )
}

export default ChatsPage