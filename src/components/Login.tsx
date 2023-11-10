import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../main"
import { useAuthState } from "react-firebase-hooks/auth"
import Button from '@mui/material/Button';

const Login: React.FC = () => {

    const [user] = useAuthState(auth)
    console.log(user)

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <Button onClick={googleLogin} >
            Log In with Google.
        </Button>
    )
}

export default Login