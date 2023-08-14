import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component{
    state= {
        initial:{
            name:'',
            job:"",
        },
     }
     submitForm = () => {
     
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
      handleChange = (event) => {
        const { name , value } = event.target
      
        this.setState({
          [name] : value,
        })
      }
    render()
    {
        const { name , job } = this.state.initial;
        return (
            <div className='container col-*-8 pt-5 mb-5 float-start'> 

        
            <form className='form form-inline'>
                <div  className='form-group'>
                <label htmlFor="name">Name :</label>
      <input
        type="text"
        name="name"
        id="name"
        defaultvalue={name}
        onChange={this.handleChange}
        placeholder="Name"/>
                </div>
                <br></br>
        <div className='form-group'>
        <label htmlFor="job" className='form-group'>Job :</label>
      <input
        type="text"
        name="job"
        id="job"
        defaultvalue={job}
        onChange={this.handleChange}
        placeholder="Job"
        />
          
        </div>
        <br></br>
        </form>
        <button  class="btn btn-primary mb-2"
        onClick={this.submitForm}>Add</button>
     </div>
        )
    }
}
export default Form;