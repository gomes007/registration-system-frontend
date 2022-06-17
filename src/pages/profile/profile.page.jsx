import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



const ProfilePage = () => {

    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div className="container content">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="col-6">
                                <h3>Profile Page</h3>
                            </div>
                            <div className="col-6 text-end">
                                Current role is <strong>{currentUser?.role} </strong>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export {ProfilePage}