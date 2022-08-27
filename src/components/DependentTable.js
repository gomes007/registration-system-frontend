const DependentTable = ({dependents}) => {

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
                {dependents.map((dependent, idx) => {
                    return(
                    <tr key={idx}>
                        <td scope="col">{idx + 1}</td>
                        <td scope="col">{dependent.kinship}</td>
                        <td scope="col">{dependent.personalInformation.name}</td>
                        <td scope="col">{dependent.personalInformation.email}</td>
                        <td scope="col">{dependent.personalInformation.cpf}</td>
                        <td scope="col">
                            <button type="button" className="btn btn-info btn-sm">Edit</button>
                        </td>
                        <td scope="col">
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export {DependentTable}
