import { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase"
import { doc, setDoc } from 'firebase/firestore';

const Login = ({user,setUser}) => {
    const [data, setData] = useState({ uname: '', mail: '', pswd: '' });
    const [isRegistered, setIsRegistered] = useState(true);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };
        setData({ ...data, ...inputs });
    }
    const handleDown = (event) => {
        if (event.key === 'Enter') {
            if (isRegistered === false) handleSignup();
            else handleSignin();
        }
    }
    const handleSignin = async () => {
        setLoading(true);
        const email = data.mail;
        const pswrd = data.pswd;
        try {
            const userDetails = await signInWithEmailAndPassword(auth, email, pswrd);
            setUser(userDetails.user);
        } catch (err) {
            setErr(true);
            setLoading(false);
        };
    }
    const handleSignup = async () => {
        setLoading(true);
        const displayName = data.uname;
        const email = data.mail;
        const password = data.pswd;
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            setUser(res.user);
        } catch (error) {
            console.error('Signup Error:', error.message);
            setErr(true);
            setLoading(false);
        }
    };


    const handleSwitch = () => {
        setData({ uname: '', mail: '', pswd: '' });
        setIsRegistered(!isRegistered);
    }

    return (
        isRegistered?
        <div className="">
            <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} />
            <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} />
            <input type="submit" value="Sign in" onClick={handleSignin} />
            <p>Don't have an account? <span onClick={handleSwitch}>Register</span></p>
        </div>
            :
        <div className="">
            <input type="text" name="uname" required="required" value={data.uname} onChange={event => handleInputs(event)} />
            <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} />
            <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} />
            <input type="submit" value="Sign up" onClick={handleSignup} />
            {err && <p>Something went wrong!</p>}
            <p>Already have an account? <span onClick={handleSwitch}>Login</span></p>
        </div>
    )
}

export default Login