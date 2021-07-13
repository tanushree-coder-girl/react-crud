import { useState } from 'react';
import Table from './components/Table';
function App() {
  const [inputValue, setInputValue] = useState({
    username: '',
    gender: '',
    status: 'Active'
  });

  const [allData, setallData] = useState([]);
  const [button, setButton] = useState(true)
  const [editItemId, setEditItemId] = useState(null);

  const inputEventHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((previousValue) => {
      // console.log(previousValue);
      return {
        ...previousValue,
        [name]: value,
      }
    });
  }

  const addUser = () => {
    if (editItemId) {
      setallData(
        allData.map((value) => {
          if (value.id === editItemId) {
            return { ...value, name: inputValue }
          }
          return value;
        })
      );
      setButton(true);
      setInputValue({
        username: '',
        gender: '',
        status: 'Active'
      })
      setEditItemId(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: inputValue }
      setallData([...allData, allInputData]);
      setInputValue({
        username: '',
        gender: '',
        status: 'Active'
      });
    }
  }

  const deleteUser = (index) => {
    // console.log(id);
    const updatedData = allData.filter((value) => {
      return value.id !== index;
    });
    setallData(updatedData);
  }

  const editUser = (id) => {
    // console.log(id);
    let editedData = allData.find((value) => {
      return value.id === id;
    });
    // console.log(editedData);
    setButton(false);
    setInputValue(editedData.name)
    setEditItemId(id);
  }

  return (
    <div className="container">
      {/* Users registrastion Form start */}
      <div className="row">
        <div className="col-sm-12 col-md-8 mx-auto mt-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="mb-3">User Registration Form</h3>
            <div className="mb-3">
              <label for="username" className="form-label">Username</label>
              <input type="text" autoComplete="off" onChange={inputEventHandler} value={inputValue.username} name="username" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label for="gender" className="form-label">Gender</label>
              <select id="gender" value={inputValue.gender} onChange={inputEventHandler} name="gender" className="form-select form-select-md" aria-label=".form-select-lg example">
                <option label="Select"></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <div className="my-3" onChange={inputEventHandler} >
              <label for="status" className="form-label mr-5" style={{ marginRight: '1rem' }}>Status :</label>
              <div className="form-check form-check-inline">
                {/*  */}
                <input
                  checked={inputValue.status === 'Active'}
                  value="Active"
                  onClick={() => setInputValue((previousValue) => {
                    return {
                      ...previousValue,
                      status: 'Active',
                    }
                  })}
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="Active"
                />
                <label className="form-check-label" for="Active">Active</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  checked={inputValue.status === 'Inactive'}
                  value="Inactive"
                  onClick={() => setInputValue((previousValue) => {
                    return {
                      ...previousValue,
                      status: 'Inactive',
                    }
                  })}
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="Inactive"
                />
                <label className="form-check-label" for="Inactive">Inactive</label>
              </div>
            </div>
            {
              button ? <button disabled={inputValue.username.length < 1 || inputValue.gender.length < 1} type="button" onClick={addUser} className="btn btn-primary mb-3">Save</button> :
                <button type="button" onClick={addUser} className="btn btn-danger mb-3">Update</button>
            }
          </form>
        </div>
      </div>
      {/* users Refistration form end */}

      <Table allData={allData} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
