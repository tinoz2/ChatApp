import { db } from '../main'
import { useState, useEffect } from "react"
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"

const useMessage = () => {

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

    return messages
}

export default useMessage