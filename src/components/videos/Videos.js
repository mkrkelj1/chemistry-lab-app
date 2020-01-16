import React from "react";
import { CoursesAPI } from "../../api";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VideosAPI } from "../../api";
import Card from "react-bootstrap/Card";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
// Exports: Main.js


const VideoCards = (videos) => {
  const videoCards = videos.videos.map(video => (
    <Container className="p-1">
      <Card>
        <Card.Header as="h2" className="bg-transparent">
          {video.title}
        </Card.Header>
        <Card.Body id={video.id}>
          <iframe
            width="100%"
            height="315" 
            src={video.url}
            frameborder="0"
            allow="accelerometer; autoplay; //encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card.Body>
      </Card>
    </Container>
  ));
  return videoCards;
};



const Videos = props => {
  const videos = VideosAPI.all();
  const colOneVideos = videos.slice(0, 9)
  const colTwoVideos = videos.slice(9, videos.length)

  return (
    <React.Fragment>
      <Container className="p-3">
        <Row>
          <Col>  <VideoCards videos = {colOneVideos} /> </Col>
          <Col>  <VideoCards videos = {colTwoVideos} /> </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Videos;
