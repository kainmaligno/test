import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";
import { Button, Icon, Row, Input, Col} from "react-materialize";
import Nav from './Nav';
import { connect } from 'react-redux';
import { get_all, addPerson } from '../actions/addAction';
import { loggedin } from '../actions/authAction';
//import * as actions from '../actions/addAction';

 class Personnel extends Component {
     state={
         name:"",
         gender:"",
         email:"",
         contractDate:{type:Date},
         role: ""
     }
     componentWillMount(){
      loggedin()
      get_all()
    }

     inputChange = event => {
        const { target } = event;
        const { name, value } = target;
        this.setState({
          [name]: value
        });
    };

   submit  =  async event => {
        event.preventDefault();
        try{
          await this.props.addPerson(this.state)
          await this.props.history.push('/private')
        }catch(error){
         alert(error)
        }
         
    };
  render() {
    return (
      <div>
        <Nav/>
      <div className="container">
        <form className="white" onSubmit={this.submit}>
            <h5 className="grey-text text-darken-3">Add Personel</h5>
            <Row className=''>
         <Input onChange={this.inputChange}  name='name' type='text' s={6} label="Name"><Icon>account_circle</Icon></Input> 
         <Input onChange={this.inputChange}  name='gender' type="select" label="Gender" icon="group" defaultValue='Female' s={6}>
         <option value = 'Female'>Female</option>
         <option value = 'Male'>Male</option>
         </Input>
         <Input onChange={this.inputChange}  name='email' type='email' s={6} label="Email"><Icon>email</Icon></Input> 
         <Input name='contractDate' type='date' onChange={this.inputChange} icon="date_range" />
         <Input onChange={this.inputChange}  name='role' s={12} type='select' label="Role" icon="description" defaultValue='TEST'>
          <option value='TEST'>TEST</option>
          <option value='BASE'>BASE</option>
        </Input>
        </Row>
        <Row>
            <Col>
              <Button type="submit" waves="light" className="buttons">
                {" "}
                <Icon right>person_add</Icon>
                Add Personnel
              </Button>
            </Col>
            <Col>
            </Col>
            <Col>
              <Link to="/private">
                <Button waves="light" className="buttons">
                  {" "}
                  <Icon right>cancel</Icon>
                  Cancel
                </Button>
              </Link>
            </Col>
</Row>
        </form>
      </div>
      </div>
    )
  }
}
const mapStateToProps = ({person}) =>({
person:person 
})

export default connect(mapStateToProps,{addPerson})(Personnel)
