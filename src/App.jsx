// import react
import { useState } from 'react'
import favico from './assets/react.svg'
import { Helmet } from 'react-helmet';
// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// Layout
import Header from './project/layout/header/Header';

function App() {
	const siteTitle = 'Home';
	const siteName = 'Site Name';
	const siteDescription = 'Site Description';
	const siteKeyWord = 'siteKeyword';
	const siteOGImage = 'insertUrlHere';

  return (
	<>
		<Helmet>
			{/* Meta Tags */}
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width"/>
			<title>{siteTitle}</title>
			<link rel="icon" href={favico} />
			<meta name="description" content={siteDescription}/>
			<meta name="keywords" content={siteKeyWord}/>
			<meta http-equiv="X-UA-Compatible" content="IE=edge"/>

			<meta property="og:title" content={siteTitle}/>
			<meta property="og:description" content={siteDescription}/>
			<meta property="og:site_name" content={siteName}/>
			<meta property="og:image" content={siteOGImage}/>
		</Helmet>
		
		<Header />

	</>
  )
}

export default App
