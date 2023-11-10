import { Props } from "../types/types.ts"
import { FormatDate } from "./helpers/FormatDate"

const Message: React.FC<Props> = ({ message }) => {
    return (
        <div className="flex justify-center">
            <div>
                <p>{message.text}</p>
                <small>{FormatDate(message.timestamp)}</small>
            </div>
            <img className="w-16 rounded-full m-3" src={message.photo} alt="image of you" />
        </div>
    )
}

export default Message