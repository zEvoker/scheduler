import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"
import './Login.scss'

const Login = ({setUser}) => {
    const [data, setData] = useState({ mail: '', pswd: '' });
    const [isRegistered, setIsRegistered] = useState(true);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [stage, setStage] = useState(1);

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
        setStage(3);
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
        setStage(3);
        setLoading(true);
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
        setStage(1);
        setData({ mail: '', pswd: '' });
        setIsRegistered(!isRegistered);
    }

    return (
        <div className="card">
            <div className="side" style={!isRegistered ? { transform: "rotateY(-180deg)" } : {}}>
            <svg viewBox="0 0 320 300">
                <defs>
                    <linearGradient inkscape:collect="always" id="linearGradient" x1="13" y1="193.49992" x2="307" y2="193.49992" gradientUnits="userSpaceOnUse">
                        <stop style={{ stopColor: 'violet' }} offset="0" id="stop876" />
                        <stop style={{ stopColor: 'purple' }} offset="1" id="stop878" />
                    </linearGradient>
                </defs>
                <path style={stage === 1 ? { strokeDashoffset: "0" } : stage === 2 ? { strokeDashoffset: "-336" } : { strokeDashoffset: "-730", strokeDasharray: "530 1386" }} d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <h2>LOGIN</h2>
            <div className='uBox'>
                <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} onFocus={() => setStage(1)}/>
                <span>Email</span>
                <i></i>
            </div>
            <div className='uBox'>
                <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} onFocus={() => setStage(2)}/>
                <span>Password</span>
                <i></i>
            </div>
            <input type="submit" value="Sign in" onClick={handleSignin} />
            <p>Don't have an account? <span onClick={handleSwitch}>Register</span></p>
            </div>
            <div className="side" style={isRegistered ? { transform: "rotateY(180deg)" } : {}}>
            <h2>REGISTER</h2>
            <svg viewBox="0 0 320 300">
                <defs>
                    <linearGradient inkscape:collect="always" id="linearGradient" x1="13" y1="193.49992" x2="307" y2="193.49992" gradientUnits="userSpaceOnUse">
                        <stop style={{ stopColor: 'violet' }} offset="0" id="stop876" />
                        <stop style={{ stopColor: 'purple' }} offset="1" id="stop878" />
                    </linearGradient>
                </defs>
                <path style={stage === 1 ? { strokeDashoffset: "0" } : stage === 2 ? { strokeDashoffset: "-336" } : { strokeDashoffset: "-730", strokeDasharray: "530 1386" }} d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <div className='uBox'>
                <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} onFocus={() => setStage(1)}/>
                <span>Email</span>
                <i></i>
            </div>
            <div className='uBox'>
                <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} onFocus={() => setStage(2)}/>
                <span>Password</span>
                <i></i>
            </div>
            <input type="submit" value="Sign up" onClick={handleSignup} />
            {err && <p>Something went wrong!</p>}
            <p>Already have an account? <span onClick={handleSwitch}>Login</span></p>
            </div>
        </div>
    )
}

export default Login