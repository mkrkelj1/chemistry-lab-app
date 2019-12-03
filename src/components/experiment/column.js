import React, {useState} from "react";
import styled from 'styled-components'

const Container = styled.div``
const Title = styled.h3``
const TaskList = styled.div``


const Column = ({key, column, tasks}) => {
  return (
    <Container>
     <Title>{column.title}</Title>
     <TaskList>tasks go here</TaskList>
    </Container>
  );
}

export default Column;
