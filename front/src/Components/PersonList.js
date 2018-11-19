import React from 'react'
import { Row, Col, Button} from 'react-materialize';
import { Link } from 'react-router-dom';

const PersonList = ({persons}) => {
    console.log(persons)

  return (
    <div className='container'>
      {persons && persons.map(person => {
        return  <Row key={person._id}className='continer'>
        <Col m={8}>
        <ul>
          <li>{person.name}</li>
          <li>{person.email}</li>
        </ul>
        </Col>
        <Col m={4}>
        <Link to ={"/details/"+ person._id}>
        <Button
            floating
            className='red'
            icon='edit' 
            waves='light'
          />
        </Link>
        </Col>
       
  </Row>
      })}
    </div>
  )
}

export default PersonList
