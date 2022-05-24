
const AddressTable = () => {
    <form onSubmit={this.props.onChange}>
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
            </tr>
            </thead>
            <tbody>
            {this.props.items.map((item, index) =>
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.street}</td>
                    <td>{item.number}</td>
                    <td>{item.complement}</td>
                    <td>{item.neighborhood}</td>
                    <td>{item.zipCode}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                </tr>
            )}
            </tbody>
        </table>
    </form>
}

export default AddressTable