import { FaTwitter, FaGithub } from 'react-icons/fa';

function Socials() {
    return (
        <div className="socials m-2">
            <a target="_blank" rel="noreferrer" href='https://twitter.com/authorgreenleaf' className='m-2'>
                <FaTwitter size={30} />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/jamesgade' className='m-2'>
                <FaGithub size={30} />
            </a>
        </div>
    )
}

export default Socials;
