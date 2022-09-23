import { Routes, Route } from 'react-router-dom';
import { Search, About, NotFound, UserDetails } from '../pages';

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<UserDetails />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/notfound" element={<NotFound />} />
        </Routes>
    )
}

export default Content;
