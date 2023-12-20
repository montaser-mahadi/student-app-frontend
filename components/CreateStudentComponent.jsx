import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
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
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({firstName: student.firstName,
                    secondName: student.secondName,
                    age : student.age,
                    parentPhone: student.parentPhone,
                    address: student.address,
                    className: student.className
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, secondName: this.state.secondName, 
            age: this.state.age, address: this.state.address, parentPhone: this.state.parentPhone,
        className: this.state.className};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeSecondNameHandler= (event) => {
        this.setState({secondName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeParentPhoneHandler= (event) => {
        this.setState({parentPhone: event.target.value});
    }
    changeClassNameHandler= (event) => {
        this.setState({className: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }

    // async sendRequest() {
    //     try { 
    //         const response = await HttpService.post('/api/v1/students', {
    //             Student: ''
    //         });
    //         console.log({response})
    //     } catch(e) {
    //         console.log({error: e})
    //     }

    // }

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
                                                value={this.state.phone} onChange={this.changeParentPhoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Class Name: </label>
                                            <input placeholder="Class Name" name="phone" className="form-control" 
                                                value={this.state.className} onChange={this.changeClassNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentComponent
