import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { db, auth } from "../main"
import { useState } from "react"
import { Button } from "@mui/material"

const SendMessages: React.FC = () => {

    const [input, setInput] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = auth.currentUser
        if (user) {
            const { uid, displayName, photoURL } = user
            await addDoc(collection(db, "messages"), {
                text: input,
                name: displayName,
                uid,
                photo: photoURL,
                timestamp: serverTimestamp()
            })
            setInput("")
        }
    }


    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <input className=" text-zinc-950 p-1" value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}

export default SendMessages