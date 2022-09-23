import PropTypes from 'prop-types';
import Repo from './Repo';

const ReposList = ({ repos }) => {
    return (
        <div>
            <h2>Latest Repositories</h2>
            {repos.map(repo => {
                return <Repo key={repo.id} repo={repo} />
            })}
        </div>
    )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default ReposList;
