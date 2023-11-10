import { useState, useEffect } from "react"
import Message from "./Message"
import { db } from "../main.tsx"
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"

const Chat: React.FC = () => {

    const [messages, setMessages] = useState<any[]>([])

    useEffect(() => {
        const newQuery = query(collection(db, "messages"), orderBy("timestamp"))

        const unSuscribe = onSnapshot(newQuery, (querySnapshot) => {
            let currentMessages: any = []
            querySnapshot.forEach(item => {
                currentMessages.push({ content: item.data(), id: item.id })
            })
            setMessages(currentMessages)
        })
        return unSuscribe
    }, [])


    return (
        <main>
            {
                messages && messages.map(item => (
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