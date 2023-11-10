import Button from '@mui/material/Button';
import { auth } from '../main';
import { signOut } from 'firebase/auth';

const Logout: React.FC = () => {

    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <Button onClick={handleLogout} variant="outlined" color="error">
            Log Out
        </Button>
    )
}

export default Logout