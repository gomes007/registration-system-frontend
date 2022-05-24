import {getAllEmployee} from "../../services/EmployeeService";
import {useEffect, useState} from "react";


export default function ListPageComponent() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getAllEmployee().then(res => {
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <div className="container">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">
                        <h3>List of Employees</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">gender</th>
                                <th scope="col">retired</th>
                            </tr>
                            </thead>
                            <tbody>
                            {list.map((item, ind) =>
                                <tr key={item.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.retired}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}