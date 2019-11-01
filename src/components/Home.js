import React from 'react'
import HomeHeading from './HomeHeading'
import HomeImagePlaceholders from './HomeImagePlaceholders'
import HomeVideoTutorials from './HomeVideoTutorials'
import HomeSeeAllVideosButton from './HomeSeeAllVideosButton'


//<CourseLinkButtons />
const Home = () => (
	<React.Fragment>
	    <HomeHeading />
    	<HomeVideoTutorials />
    	<HomeImagePlaceholders />
    	<HomeSeeAllVideosButton />
    </React.Fragment>
)

export default Home