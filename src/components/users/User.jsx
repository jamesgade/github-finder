import { Link } from "react-router-dom";

function User({ user: { login, avatar_url } }) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="card shadow-lg">
                <div className="d-flex m-3">
                    <img src={avatar_url} alt={login} className="profile-picture" />
                    <div className="ms-3 text-start">
                        <h5>{login}</h5>
                        <Link className="view-btn" to={`/user/${login}`}>View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
