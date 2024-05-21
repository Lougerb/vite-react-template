
// layout
import Nav from './project/layout/Nav/Nav';
import Header from './project/layout/Header/Header';
import Footer from './project/layout/Footer/Footer';

// Content
import Home from './project/pages/Home/Home';
import About from './project/pages/About/About';
import Product from './project/pages/Product/Product';
import Services from './project/pages/Services/Services';
import Contact from './project/pages/Contact/Contact';
import NotFound from './project/pages/NotFound/NotFound';

// Packages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import favico from './assets/img/favico.png';

const baseUrl = '/vite-react-template/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    name: 'Home'
  },
  {
    path: "/about/",
    element: <About/>,
    name: 'About',
  },
  {
    path: "/product/",
    element: <Product/>,
    name: 'Product',
  },
  {
    path: "/services/",
    element: <Services/>,
    name: 'Services',
  },
  {
    path: "/contact/",
    element: <Contact/>,
    name: 'Contact',
  },
  {
    path: "*",
    element: <NotFound/>,
    name: 'Not Found',
  },
], {basename: baseUrl});

const siteName = 'Sample Title';
const siteDesc = 'Sample Description';
const siteKeywords = 'Sample Keywords';
const siteType = 'Sample Type';

function App() {
  return (

    <div className="App">
    {/* Head */}
			<HelmetProvider>
        <Helmet>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width"/>
            <title>{siteName}</title>
            <link rel="icon" href={favico} />
            <meta name="description" content={siteDesc}/>
            <meta name="keywords" content={siteKeywords}/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

            <meta property="og:title" content={siteName}/>
            <meta property="og:type" content={siteType}/>
            <meta property="og:description" content={siteDesc}/>
            <meta property="og:site_name" content={siteName}/>
        </Helmet>
      </HelmetProvider>

    <Header />
    
    <Nav baseUrl={baseUrl}/>

    <div className="main">
        <RouterProvider router={router} />
    </div>

    <Footer />

</div>
  )
}

export default App
