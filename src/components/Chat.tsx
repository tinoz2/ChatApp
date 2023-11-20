import useMessage from "../hooks/useMessages"
import Message from "./Message"

const Chat: React.FC = () => {

    const { messages } : any = useMessage()

    return (
        <main className="chat-content">
            {
                messages && messages.map((item : any) => (
                    <Message
                        key={item.id}
                        message={item.content}
                    />
                ))
            }
        </main>
    )
}

export default Chat