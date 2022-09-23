import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';


const Repo = ({ repo }) => {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

    return (
        <div className='card rounded bg-secondary m-3 p-3 text-start'>
            <h5 className='d-flex align-items-center my-0'>
                <a href={html_url} target="_blank" rel="noreferrer" className="text-white">
                    <FaLink className='me-2' />
                    {name}
                </a>
            </h5>
            <p className='mx-3 my-0'>{description}</p>
            <div className='my-2'>
                <div className="badge bg-primary mx-2">
                    <FaEye className='me-2' />{watchers_count}
                </div>
                <div className="badge bg-success mx-2">
                    <FaStar className='me-2' />{stargazers_count}
                </div>
                <div className="badge bg-danger mx-2">
                    <FaInfo className='me-2' />{open_issues}
                </div>
                <div className="badge bg-warning mx-2">
                    <FaUtensils className='me-2' />{forks}
                </div>
            </div>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired
}

export default Repo;
