import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { FaTimes } from 'react-icons/fa'

const UserSearch = () => {

    const [text, setText] = useState("")
    const { users, searchUsers, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            setAlert('Please enter something', 'error')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div className="search d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <input type="text" placeholder="Search by username" className="finder" value={text} onChange={handleChange} />
                    <button type="submit" className="search-button">GO</button>
                </div>
            </form>
            <div className="d-flex align-items-center ms-3">
                {users.length > 0 && <button onClick={clearUsers} className="btn btn-danger p-2 d-flex align-items-center">
                    <span className="me-2">Clear</span>
                    <FaTimes />
                </button>}
            </div>
        </div>
    );
}

export default UserSearch;
