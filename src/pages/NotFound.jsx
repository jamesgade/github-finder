import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="display-1"><strong>Oops!</strong></h1>
            <h3>404 - Page Not Found</h3>
            <Link to="/">
                <button className='btn border-white text-white px-3 my-2'>Go Back</button>
            </Link>
        </div>
    )
}

export default NotFound;
