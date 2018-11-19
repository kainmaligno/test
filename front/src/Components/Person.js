    import React, { Component } from 'react'
    import Nav from './Nav';    
    import { Button,Table} from 'react-materialize';
    import { Link } from 'react-router-dom';
    import { loggedin } from '../actions/authAction';
    import { connect } from 'react-redux';
    import { deletePerson } from '../actions/addAction';
    import  axios from 'axios'

   class Person extends Component {
       state = {
           person:{}
           
       }
       async componentDidMount(){
           try{
            const personId =this.props.match.params.id
            const res = await axios.get(`http://localhost:3000/person/${personId}`)
            let person = res.data
            console.log(person)
            this.setState({
                person
            })
           }catch(error){

           }
           loggedin()
       }
       handleDelete = async event =>{
          try{
              event.preventDefault()
            let id = this.state.person._id
            await this.props.deletePerson(id)
            await  this.props.history.push('/private')
          }catch(error){
            alert(error)
          }
       }
       
      render() {
        let id = this.state.person._id
          const {person} = this.state
        return (
          <div>
          <Nav/>
          <h2>Human Resource</h2>
                    <div className="white center container">
                           <Table >
                               <thead>
                                   <tr>
                                   <th>Name</th>
                                   <th>Gender</th>
                                   <th>Start date of contract</th>
                                   <th>Email</th>
                                   <th>Type of Contract</th>
                                   <th>
                                   <Link to={'/edit/'+ id}>
                                      <Button>Edit</Button>
                                   </Link>
                                   </th>
                                   <th><Button onClick={this.handleDelete}>Delete</Button></th>
                                   </tr>
                                   
                               </thead>
                               <tbody>
                                 <tr>
                                   <td>{person.name}</td>
                                   <td>{person.gender}</td>
                                   <td>{person.contractDate}</td>
                                   <td>{person.email}</td>
                                   <td>{person.role}</td>
                                 </tr>     
                               </tbody>
                           </Table>
                    </div>
                    <div className='center container btnbox'>
                   <Link to='/private'>
                   <Button className='buttons'>go back</Button>
                   </Link> 
                    </div>
                  
          </div>
        )
      }
    }
  const  mapStateToProps = ({person}) => ({
        
  })
    export default connect(mapStateToProps,{deletePerson})(Person)