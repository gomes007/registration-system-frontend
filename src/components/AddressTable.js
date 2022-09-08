import {useRef, useState} from "react";
import {AddressDelete} from "./AddressDelete";
import {AddressDialog} from "./AddressDialog";


const AddressTable = (props) => {

    //---------------Edit------------------------------------------//
    const [dialogOpen, setDialogOpen] = useState(false);

    const [chosedAddress, setChosedAddress] = useState({});

    const [index, setIndex] = useState(0);

    const clickEdit = (i) => {
        setIndex(i)
        setChosedAddress(props.items[i])
        setDialogOpen(true);
    }


    const confirmEdit = (actualAddress) => {''
        const addressList = props.items;
        addressList[index] = actualAddress;
        props.setAddress(addressList);
    }


    //---------------------------Delete----------------------------//
    const deleteComponent = useRef();
    const deleteAddressRequest = () => {
        deleteComponent.current?.showDeleteModal();
    }

    const deleteAddress = (index) => {
        const listAddress = props.items;
        listAddress.splice(index, 1);
        props.setAddress([...listAddress]);
    }


    return (
        <div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Street</th>
                    <th scope="col">Number</th>
                    <th scope="col">Complement</th>
                    <th scope="col">Neighborhood</th>
                    <th scope="col">ZipCode</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) =>
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.street}</td>
                        <td>{item.number}</td>
                        <td>{item.complement}</td>
                        <td>{item.neighborhood}</td>
                        <td>{item.zipCode}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>
                            <button type="button" className="btn btn-info btn-sm"
                                    onClick={() => clickEdit(index)}>Edit
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm"
                                    onClick={() => deleteAddressRequest(item)}>Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <AddressDialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} address={chosedAddress}
                           setAddress={setChosedAddress}
                           confirmEdit={confirmEdit}/>

            <AddressDelete ref={deleteComponent} onConfirmed={() => deleteAddress()}/>

        </div>
    )
}

export {AddressTable}
