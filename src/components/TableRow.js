function TableRow({ allData, editUser, deleteUser }) {
    return (
        <>
            {
                allData.map((value) => {
                    return (<tr style={{ textAlign: 'center' }} key={value.id}>
                        <td>{value.name.username}</td>
                        <td>{value.name.gender}</td>
                        <td>{value.name.status}</td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm mx-1" onClick={() => editUser(value.id)}>Edit</button>
                            <button type="button" className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(value.id)}>Delete</button>
                        </td>
                    </tr>)
                })
            }
        </>

    )
}

export default TableRow;
