import { auth } from "../main.tsx"
import { Props } from "../types/types.ts"
import { FormatDate } from "./helpers/FormatDate"

const Message: React.FC<Props> = ({ message }) => {

    let newStyle = 'message'
    if(auth.currentUser) {
        const user = auth.currentUser.uid
        const newUser = message.uid
        newStyle = user === newUser ? 'my-message' : 'message'
    }

    return (
        <div className={newStyle}>
            <div className="text-message">
                <p>{message.text}</p>
                <small>{FormatDate(message.timestamp)}</small>
                <img className="w-16 rounded-full m-3" src={message.photo} alt="image of you" />
            </div>
        </div>
    )
}

export default Message