const DependentsTable = ({ dependents }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kinship</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Social Code</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {dependents.map((dependent, idx) => {
            return (
              <tr key={idx}>
                <td scope="col">{dependent.id}</td>
                <td scope="col">{dependent.kinship}</td>
                <td scope="col">{dependent.personalInformation.name}</td>
                <td scope="col">{dependent.personalInformation.email}</td>
                <td scope="col">{dependent.personalInformation.cpf}</td>
                <td scope="col">
                  <button type="button" className="btn btn-info btn-sm">
                    Edit
                  </button>
                </td>
                <td scope="col">
                  <button type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { DependentsTable };
