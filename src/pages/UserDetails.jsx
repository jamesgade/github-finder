import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import Loading from "../components/Loading";
import ReposList from "../components/users/ReposList";

const UserDetails = () => {

    const { user, getUser, loading, getUserRepos, repos } = useContext(GithubContext);

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user

    const params = useParams()

    useEffect(() => {
        getUser(params.login);
        getUserRepos(params.login)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="container">
            <div className="my-5 text-start">
                <Link to='/' className="button-text"><FaArrowLeft className="me-2" />Back to search</Link>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <div className="profile">
                        <img src={avatar_url} alt="" className="full-image rounded opacity-50" />
                        <div className="text-start">
                            <h6 className="fw-bold">{name}</h6>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="ms-4 text-start">
                        <div className="d-flex align-items-center">
                            <h1>{name}</h1>
                            <div className="badge bg-success mx-2">{type}</div>
                            {hireable && <div className="badge bg-info mx-2">{hireable}</div>}
                        </div>
                        <p>{bio}</p>
                        <div>
                            <a href={html_url} target="_blank" rel="noreferrer" className="border p-2 rounded text-secondary hover">View GitHub Profile</a>
                        </div>
                    </div>
                    <div className="ms-4 my-4 d-flex justify-content-between">
                        {location &&
                            <div className="text-start border-bottom border-secondary">
                                <div className="text-secondary">Location</div>
                                <p className="text-white">{location}</p>
                            </div>
                        }
                        {blog &&
                            <div className="text-start border-bottom border-secondary">
                                <div className="text-secondary">Website</div>
                                <div>
                                    <a href={`https://${blog}`} target="_blank" rel="noreferrer" className="text-white" >{blog}</a>
                                </div>
                            </div>
                        }
                        {twitter_username &&
                            <div className="text-start border-bottom border-secondary">
                                <div className="text-secondary">Twitter</div>
                                <div>
                                    <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer" className="text-white">{twitter_username}</a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-lg-flex align-items-center justify-content-center my-5">
                <div className="text-start me-5">
                    <div className="small text-secondary">Followers</div>
                    <h3 className="text-white fw-bold">{followers}</h3>
                </div>
                <FaUsers size={50} className="mx-5" />
                <div className="text-start me-5">
                    <div className="small text-secondary">Following</div>
                    <h3 className="text-white fw-bold">{following}</h3>
                </div>
                <FaUserFriends size={50} className="mx-5" />
                <div className="text-start me-5">
                    <div className="small text-secondary">Public Repos</div>
                    <h3 className="text-white fw-bold">{public_repos}</h3>
                </div>
                <FaCodepen size={50} className="mx-5" />
                <div className="text-start me-5">
                    <div className="small text-secondary">Public Gists</div>
                    <h3 className="text-white fw-bold">{public_gists}</h3>
                </div>
                <FaStore size={50} className="ms-5" />
            </div>
            <div className="my-5">
                <ReposList repos={repos} />
            </div>
        </div>
    )
}

export default UserDetails;
