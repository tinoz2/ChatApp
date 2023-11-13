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
        <div className="flex justify-center flex-col m-auto text-center items-center">
            <h1 className=" text-3xl font-bold mt-2">ChatApp</h1>
            <img className="w-32 my-4 rounded-full" src={image || imageLink} alt="Image of you" />
            <p className="text-lg my-2">{name}</p>
            <div className='mb-6 mt-2'>
                {user ? <Logout /> : <Login />}
            </div>
        </div>
    )
}

export default ContainerLogins