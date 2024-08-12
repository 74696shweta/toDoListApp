
import React, { useState } from 'react';
import { Container } from './styles';
import Form from '../Form';

function Todo() {
    const [input, setInput] = useState('');
    console.log(input, "input");
  return (
    <Container >
      <h1>List of todo </h1>
      <Form input={input} setInput={setInput}  />
    </Container>
  );
}

export default Todo;