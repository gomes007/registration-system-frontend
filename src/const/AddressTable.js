import {useRef, useState} from "react";
import {Dialog} from "../components/Dialog";
import {AddressDelete} from "../components/AddressDelete";
import AddressModel from "../model/AddressModel";
import {AddressEdit} from "../components/AddressEdit";



const AddressTable = (props) => {

    //Edit
    const [dialogOpen, setDialogOpen] = useState(false);

    const closeDialog = () => {
        setDialogOpen(false);
    }

    const[chosedAddress, setChosedAddress] = useState({});

    const clickEdit = (index) => {
        setChosedAddress(props.items[index])
        setDialogOpen(true);
    }


    const confirmEdit = () => {
        console.log();
    }

    //------------------------------EDIT-------------------------//
    const saveComponent = useRef();

    const [addressList, setAddressList] = useState([])
    const [selectedAddress, setselectedAddress] = useState(new AddressModel('','','','','','',''));

    const createProductRequest = () => {
        setselectedAddress(new AddressModel('','','','','','',''))
        saveComponent.current?.showProductModal();
    }

    const saveAddressWatcher = (address) => {
        let itemIndex = addressList.findIndex(item => item.id === address.id);
        if (itemIndex !== -1) {
            const newList = addressList.map((item) => {
                if (item.id === address.id) {
                    return address;
                }
                return item;
            });
            setAddressList(newList);
        } else {
            const newList = addressList.concat(address);
            setAddressList(newList);
        }
    }

    const editAddressRequest = (item) => {
        setselectedAddress(Object.assign({}, item));
        saveComponent.current?.showProductModal();
    }


    //Delete
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
            List of Addresses
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
                            <button type="button" className="btn btn-info btn-sm" onClick={() => clickEdit(index)}>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteAddressRequest(item)}>Delete</button>
                            <button className="btn btn-primary me-1" onClick={() => editAddressRequest(item)}>EditRequest</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <Dialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} address={chosedAddress} setAddress={setChosedAddress}/>

            <AddressDelete ref={deleteComponent} onConfirmed={() => deleteAddress()}/>

            <AddressEdit ref={saveComponent} product={selectedAddress} onSaved={(a) => saveAddressWatcher(a)}/>

        </div>
    )
}

export {AddressTable}