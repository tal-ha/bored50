import { useState, ChangeEvent } from 'react';
import { _login } from '../Services/AuthService';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import IAuth from '../Interfaces/IAuth';

interface LoginForm {
    email: string,
    password: string,
    token: string,
    userId: string,
}

const Login: React.FC<{ auth: IAuth, setAuth: Function, setAlert: Function }> = ({ auth, setAuth, setAlert }) => {
    const [formData, setFormData] = useState<LoginForm>({ ...auth, password: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value, validity } = event?.target;
        setFormData({ ...formData, [id]: value });

        const errVal = !validity.valid;
        switch (id) {
            case "username":
                setUsernameError(errVal);
                break;
            case "password":
                setPasswordError(errVal);
                break;
            default:
                break;
        }
    };

    async function login() {
        if(!formData.email){
            setUsernameError(true);
            return;
        }
        
        if(!formData.password){
            setPasswordError(true);
            return;
        }

        setLoading(true);

        const authData = await _login(formData.email, formData.password);
        if (authData != null) {
            setFormData({ ...formData, token: authData.token, userId: authData.userId });
            setAuth({ ...formData, token: authData.token, userId: authData.userId });
        }
        else {
            setAlert("Login failed!");
        }

        setLoading(false);
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardActions>
                <TextField label="Email" id="email" size="small" value={formData.email} onChange={handleChange} required error={usernameError}/>
                <TextField label="Password" id="password" type="password" size="small" value={formData.password} onChange={handleChange} required error={passwordError}/>
                <Button id="loginBtn" size="small" variant="contained" onClick={login} disableElevation>Login</Button>
            </CardActions>
            <CardContent>
                {
                    !loading ?
                        (
                            <Stack spacing={2}>
                                <TextField label="Token" id="token" size="small" value={formData.token} inputProps={{ readOnly: true, }} fullWidth />
                                <TextField label="User ID" id="userId" size="small" value={formData.userId} inputProps={{ readOnly: true, }} fullWidth />
                            </Stack>
                        ) :
                        (
                            <Stack spacing={2}>
                                <Skeleton sx={{ fontSize: '2.5rem' }} />
                                <Skeleton sx={{ fontSize: '2.5rem' }} />
                            </Stack>
                        )
                }
            </CardContent>
        </Card>
    );
}

export default Login;