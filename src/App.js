import { BrowserRouter } from 'react-router-dom';
import { Header, Content, Footer } from './layout';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

const App = () => {

  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className='layout text-center'>
            <Header />
            <Content />
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
