
const AddressTable = (props) => {

    const clickDelete = (index) => {
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
                            <button onClick={() => clickDelete(index)}>Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export {AddressTable}