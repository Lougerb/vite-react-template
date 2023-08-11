
// Layout
import Nav from './Project/Layout/Nav/Nav';
import Header from './Project/Layout/Header/Header';
import Footer from './Project/Layout/Footer/Footer';
// Content
import Home from './Project/Pages/Home/Home';
import About from './Project/Pages/About/About';
import Contact from './Project/Pages/Contact/Contact';
import NotFound from './Project/Pages/NotFound/NotFound';
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sanitize.css';
import favico from './Project/Components/img/favico.png';

// Packages
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about/",
    element: <About/>,
  },
  {
    path: "/contact/",
    element: <Contact/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

function App() {

  return (
       
    <div className="App">
    {/* Head */}
    <Helmet>
        {/* Meta Tags */}
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width"/>
        <title>Home</title>
        <link rel="icon" href={favico} />
        <meta name="description" content="{{ $site.description }}"/>
        <meta name="keywords" content="{{ $site.keywords }}"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <meta property="og:title" content="{{ $site.title }}"/>
        <meta property="og:type" content="{{ $site.type }}"/>
        <meta property="og:url" content="{{ $define.FEGG_HTTP_DOMAIN }}/{{ $site.url }}"/>
        <meta property="og:description" content="{{ $site.description }}"/>
        <meta property="og:site_name" content="{{ $site.name }}"/>
        <meta property="og:image" content="{{ $define.FEGG_HTTP_DOMAIN }}/{{ $site.image }}"/>
    </Helmet>

    <Header />
    <Nav />

    <div className="main">
        <RouterProvider router={router} />
    </div>

    <Footer />

</div>
  )
}

export default App
