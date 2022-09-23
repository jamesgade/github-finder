import { useContext } from "react";
import User from './User';
import Loading from "../Loading";
import GithubContext from "../../context/github/GithubContext";

const UserList = () => {

    const { users, loading } = useContext(GithubContext)

    return (
        !loading
            ? <div className='users row m-auto'>
                {users.map((user) => <User key={user.id} user={user} />)}
            </div>
            : <h1><Loading /></h1>
    )
}

export default UserList;
