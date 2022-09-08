import {useState} from "react";
import {DependentDialog} from "./DependentDialog";

const DependentTable = (props) => {

    //---------------Edit------------------------------------------//
    const [dialogOpen, setDialogOpen] = useState(false);

    const [chosedDependent, setChosedDependent] = useState({});

    const [index, setIndex] = useState(0);

    const clickEdit = (i) => {
        setIndex(i)
        setChosedDependent(props.items[i])
        setDialogOpen(true);
    }

    const confirmEdit = (actualDependent) => {
        const dependentList = props.items;
        dependentList[index] = actualDependent;
        props.setDependent(dependentList);
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">kinship</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">cpf</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>

                </tr>
                </thead>
                <tbody>
                {props.items.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td scope="col">{idx + 1}</td>
                            <td scope="col">{item.kinship}</td>
                            <td scope="col">{item.personalInformation.name}</td>
                            <td scope="col">{item.personalInformation.email}</td>
                            <td scope="col">{item.personalInformation.cpf}</td>
                            <td scope="col">
                                <button type="button" className="btn btn-info btn-sm"
                                        onClick={() => clickEdit(index)}>Edit
                                </button>
                            </td>
                            <td scope="col">
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div>
                <DependentDialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} dependents={chosedDependent} confirmEdit={confirmEdit}/>
            </div>
        </div>
    )
}

export {DependentTable}
