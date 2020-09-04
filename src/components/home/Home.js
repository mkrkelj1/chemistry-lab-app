import React from 'react'
import HomeHeading from './HomeHeading'
import HomeImagePlaceholders from './HomeImagePlaceholders'
import HomeVideoTutorials from './HomeVideoTutorials'
import HomeSeeAllVideosButton from './HomeSeeAllVideosButton'
import HomeCourseButtons from './HomeCourseButtons'

//<CourseLinkButtons />
const Home = () => (
	<React.Fragment>
	    <HomeHeading />
	    <HomeCourseButtons />
    	<HomeVideoTutorials />
    	{/* <HomeImagePlaceholders /> */}
    	<HomeSeeAllVideosButton />
    </React.Fragment>
)

export default Home