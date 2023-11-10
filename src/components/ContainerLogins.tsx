import { useAuthState } from "react-firebase-hooks/auth"
import Login from "./Login"
import Logout from "./Logout"
import { auth } from "../main"

const ContainerLogins: React.FC = () => {

    const [user] = useAuthState(auth)

    const imageLink = "/userImage.png"

    const image = user ? user.photoURL : imageLink
    const name = user ? user.displayName : "Full Name"

    return (
        <div className="flex flex-col w-40 m-6 absolute">
            <h1>ChatApp</h1>
            <img src={image || imageLink } alt="Image of you" />
            <p>{name}</p>
            {user ? <Logout /> : <Login />}
        </div>
    )
}

export default ContainerLogins