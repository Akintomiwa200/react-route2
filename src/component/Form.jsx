import { useEffect, useState } from "react";

const Form = () => {
    const [userName, SetUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState({});

    useEffect(() => {
        
        if (Object.keys(error).length === 0) {
            SetEmail("");
            SetUsername("");
            SetPassword("");
        }
    }, [error]); 

    function formHandler(e) {
        e.preventDefault();

        let errorObj = {};

        if (userName.trim() === "") {
            errorObj.userName = "Name required";
        }
        if (email.trim() === "") {
            errorObj.email = "Email required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorObj.email = "Email invalid";
        }
        if (password.trim() === "") {
            errorObj.password = "Password is required";
        } else if (password.length < 6) {
            errorObj.password = "Password must be at least 6 characters long";
        }

        SetError(errorObj); 
    }

    return (
        <>
            <div>
            <form onSubmit={formHandler}>
                <input type="text" placeholder="Name" value={userName} onChange={(e) => SetUsername(e.target.value)} /> <br />
                {error.userName && <div className="error-message">{error.userName}</div>} 
                <input type="email" placeholder="Email" value={email} onChange={(e) => SetEmail(e.target.value)} /> <br />
                {error.email && <div className="error-message">{error.email}</div>} 
                <input type="password" placeholder="Password" value={password} onChange={(e) => SetPassword(e.target.value)} /> <br />
                {error.password && <div className="error-message">{error.password}</div>} 
                <button type="submit">SUBMIT</button>
            </form>

                <div>
                    <div>{userName}</div>
                    <div>{email}</div>
                    <div>{password}</div>
                </div>
            </div>
        </>
    );
};

export default Form;