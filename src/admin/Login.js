import React, { useState } from 'react'
import { useAuth } from '../Provider/AuthProviderComp';
import { useNavigate } from 'react-router-dom';
import { loginService } from './services';

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    })


    const handleLogin = async (e) => {
        e.preventDefault();



        const response = await loginService(form);
        console.log("response", response);

        if (response?.status) {
        console.log("response1111", response);
        setToken(response?.data?.token);
         navigate("/admin/create-jobs");
         window.location.reload();

        }

      else  alert(response?.message || "Something went wrong");
    };

    const onChange = ({ target }) => {

        setForm((prev) => ({ ...prev, [target.name]: target.value }))
    }
    console.log("form", form)

    // setTimeout(() => {
    //     handleLogin();
    // }, 3 * 1000);
    return (<>
        <div className='wrapper'>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form className='form'>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" name='username' value={form.username} onChange={onChange} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' value={form.password} onChange={onChange} />

                <button onClick={handleLogin}>Log In</button>

            </form>
        </div>
    </>
    )
}

export default Login