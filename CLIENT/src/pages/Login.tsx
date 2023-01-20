import React, { useRef, useState, useEffect, useContext } from 'react'
import Button from '../components/ui/Button';
import useAuth from '../hooks/use-auth';
import axios from '../api/axios';
const LOGIN_URL = '/auth';

function Login() {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {

    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
        } catch(err) {

        }
        console.log(user, pwd);
        setUser("");
        setPwd("");
        setSuccess(true);
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />

                </section>
            ) :
                (
                    <section>
                        <p>ErrorMessage</p>

                        <div className='mt-4 shadow-sm border-2 border-black-600-p-1 flex-col space-y-6 w-auto max-w-min mx-auto text-center rounded text-2x1 min-w-[25%]'>
                            <div className='font-bold p-2 bg-gray-200 '>
                                <h2>Login</h2>
                            </div>
                            <div className='space-y-6'>
                                <form onSubmit={handleSubmit} className='space-y-3 max-w-[75%] w-auto mx-auto'>
                                    <div className='text-left flex flex-col'>
                                        <label>Username </label>
                                        <input
                                            className='border-2 rounded border-gray-600-p-1'
                                            type="text"
                                            id="username"
                                            autoComplete="off"
                                            value={user}
                                            required
                                            onChange={(e) => setUser(e.target.value)}
                                        />
                                    </div>
                                    <div className='text-left flex flex-col'>
                                        <label>Password </label>
                                        <input
                                            className='border-2 rounded border-gray-600-p-1'
                                            id="password"
                                            type="password"
                                            required
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                        />
                                    </div>
                                    <div className='pb-3 space-y-6 space-x-6'>
                                        {/*<button className='py-1 px-2 bg-blue-500 text-white rounded' type="submit">Submit</button>*/}
                                        <Button primary rounded>Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                )}

        </>
    )
}

export default Login