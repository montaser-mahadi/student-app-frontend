import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            secondName: '',
            address: '',
            parentPhone:'',
            age: 0,
            className: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeParentPhoneHandler = this.changeParentPhoneHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeClassNameHandler = this.changeClassNameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudents(this.state.id).then( (res) =>{
            let student = res.data;
                this.setState({firstName: student.firstName,
                    fecondName: student.secondName,
                    age : student.age,
                    parentPhone: student.parentPhone,
                    address: student.address,
                    className: student.className
                });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, secondName: this.state.secondName, age: this.state.age,
        address: this.state.address, parentPhone: this.state.parentPhone, className: this.state.className};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({FirstName: event.target.value});
    }

    changeSecondNameHandler= (event) => {
        this.setState({SecondName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({Age: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({Address: event.target.value});
    }
    changeParentPhoneHandler= (event) => {
        this.setState({ParentPhone: event.target.value});
    }
    changeClassNameHandler= (event) => {
        this.setState({ClassName: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Second Name: </label>
                                            <input placeholder="Second Name" name="secondName" className="form-control" 
                                                value={this.state.secondName} onChange={this.changeSecondNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.parentPhone} onChange={this.changeParentPhoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Class Name: </label>
                                            <input placeholder="Class Name" name="phone" className="form-control" 
                                                value={this.state.className} onChange={this.changeClassNameHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
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

export default UpdateStudentComponent
