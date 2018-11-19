import React, { Component } from 'react'
import Nav from '../Nav';
import PersonList from '../PersonList';
import { Row, Col,Button, Icon} from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_all } from '../../actions/addAction'
import { loggedin } from '../../actions/authAction';


class Private extends Component {
  
  componentWillMount(){
    this.props.loggedin()
     this.props.get_all()
  }
 
  componentDidMount(){
    this.props.get_all()
  }
  render() {
    const {user} = this.props.store.auth
    const {persons} = this.props.store.list
    
    return (
      <div>
      <Nav/>
      <Row>
      <Col m={6}>
          <div className="container">
            <div className="white">
              <h5 className="grey-text text-darken-3">Welcome Mr/Ms: {user.username}</h5>
            </div>
          </div>
        </Col>
        <Col m={6}>
          <div className="container white">
              <h5>List</h5>
              <PersonList persons={persons}/>
          </div>
        </Col>
      </Row>
      <Row>
            <Col>
            <Link to="/personnel">
            <Button   waves="light" className="buttons">
                <Icon right>person_add</Icon>
                Crear Usuario
              </Button>
            </Link>
             </Col>
      </Row>
       
      </div>
    )
  }
}

const mapStateToProps = (person) => ({
  store:person
})
export default connect(mapStateToProps,{get_all,loggedin})(Private);