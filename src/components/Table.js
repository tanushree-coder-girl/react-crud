import TableRow from './TableRow';
function Table({ allData, editUser, deleteUser }) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-8 mx-auto mt-5">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>User</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow allData={allData} deleteUser={deleteUser} editUser={editUser} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
