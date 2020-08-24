import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import courses from "../../data/courses.json";

const CourseButtons = ({courses}) => {
	const courseButtons = courses.map(course => (
		<Button 
		  variant = "primary" 
		  href = {`https://mkrkelj1.github.io/chemistry-lab-app/#/courses/${course.id}`}>
			{course.name}
		</Button>
	))
	return (courseButtons)
}

const HomeCourseButtons = () => (
    <Container className="p-1">
	    <row>
			<Col>
				<CourseButtons courses = { courses } />
			 </Col>
		</row>
    </Container>
);

export default HomeCourseButtons;