import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email
        };
        
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.navigate('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.navigate('/employees');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    changeLastNameHandler= (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    changeEmailHandler= (event) => {
        this.setState({
            email: event.target.value
        });
    }

    cancel(){
        this.props.navigate('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    isValidEmail = (email) => {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        {/* First Name */}
                                        <div className = "form-group">
                                            <label htmlFor="firstName">First Name:</label>
                                            <input placeholder="First Name" id="firstName" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        {/* Last Name */}
                                        <div className = "form-group">
                                            <label htmlFor="lastName">Last Name:</label>
                                            <input placeholder="Last Name" id="lastName" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        {/* Email */}
                                        <div className = "form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input placeholder="Email Address" id="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export function withRouter(Children){
    return(props)=>{
   
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
    }
}

function WithNavigate(props){
    const navigate = useNavigate();
    return <CreateEmployeeComponent {...props} navigate={navigate}/>
}

export default withRouter(WithNavigate)