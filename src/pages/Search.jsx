import UserSearch from "../components/users/UserSearch";
import UserList from "../components/users/UserList";
import Alert from "../components/Alert";

const Search = () => {
    return (
        <div className="container my-5">
            <Alert />
            <UserSearch />
            <div className="m-5">
                <UserList />
            </div>
        </div>
    )
}

export default Search;
