import React from 'react'
import CourseLinkButtons from './CourseLinkButtons'
import HeadingTextHomePage from './HeadingTextHomePage'
import ImagePlaceholders from './ImagePlaceholders'
import VideoTutorialText from './VideoTutorialText'
import SeeAllVideosButton from './SeeAllVideosButton'

//<CourseLinkButtons />
const Home = () => (
	<React.Fragment>
	    <HeadingTextHomePage />
    	<VideoTutorialText />
    	<ImagePlaceholders />
    	<SeeAllVideosButton />
    </React.Fragment>
)

export default Home