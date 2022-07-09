import {useState} from "react";
import User from "../../model/user";
import authenticationService from "../../services/authentication.service";
import {useNavigate, useSearchParams} from "react-router-dom";


const RecoveryPassword = () => {

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const [searchParam, setSearchParam] = useSearchParams();
    const navigate = useNavigate();


    const sendNewPassword = () => {

        const user = new User();
        user.password = password;
        user.username = searchParam.get('username');
        user.secret = searchParam.get('secret');
        authenticationService.changePassword(user).then(() => {
            setMessage("password changed!");
            cleanPasswordField();
            navigate('/login')
        }).catch((err) => {
            console.log(err);
        })
    }


    function cleanPasswordField() {
        setPassword('');
    }


    return (
        <div className="container content">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="col-6">
                                <h3>Recovery password</h3>
                                <div className="form-group col-12">
                                    <label htmlFor="password">password:</label>
                                    <input type="text" name="password" value={password}
                                           onChange={(e) => setPassword(e.target.value)} className="form-control"/>
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
                <button className="btn btn-primary" onClick={sendNewPassword}>Save new Password</button>
            </div>
        </div>

    )
}

export {RecoveryPassword}