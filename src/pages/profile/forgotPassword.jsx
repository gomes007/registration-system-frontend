import {useState} from "react";
import User from "../../model/user";
import authenticationService from "../../services/authentication.service";




const ForgotPassword = () => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const sendForgotPassword = () => {
        const user = new User(username);
        authenticationService.forgotPassword(user).then(() => {
            setMessage("link sent to email");
            cleanEmailField();
        }).catch((err) => {
            console.log(err);
        })
    }

    function cleanEmailField() {
        setUsername('');
    }


    return (
        <div className="container content">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="col-6">
                                <h3>Forgot Password Page</h3>
                                <div className="form-group col-12">
                                    <label htmlFor="username">email:</label>
                                    <input type="text" name="username" value={username}
                                           onChange={(e) => setUsername(e.target.value)} className="form-control"/>
                                </div>
                            </div>

                        </div>

                    </div>
                    {message &&
                        <div className="alert alert-success">
                            {message}
                        </div>
                    }
                </div>
                <br/>
                <button className="btn btn-primary" onClick={sendForgotPassword}>send link</button>
            </div>
        </div>

    )
}

export {ForgotPassword}