import React from "react";
import {DropdownButton,Dropdown} from 'react-bootstrap';
import {isEmpty} from 'lodash';
const tagReg=RegExp(/<(.*?)>/);




 class ReactForm extends React.Component{
     constructor(props) {
         super(props);
         this.state={
             firstName:"",
             firstNameError:"",
             lastName:"",
             lastNameError:"",

         };
         this.firstNameHandle=this.firstNameHandle.bind(this);
         this.lastNameHandle=this.lastNameHandle.bind(this);
         this.onButtonClick=this.onButtonClick.bind(this);
     }
     firstNameHandle(e){
         if(tagReg.test(e.target.value)){
             this.setState({firstNameError:"tags not allowed"})
         }else if(e.target.value.length<3){
             this.setState({firstNameError:"firstName should not be less than 3 characters"});
         }else{
             this.setState({firstNameError:""});
         }
         this.setState({firstName:e.target.value});
     }
     lastNameHandle(e){
         if(e.target.value.length<3){
             this.setState({lastNameError:"lasttName should not be less than 3 characters"})
         }
     }
     onButtonClick(){
         if(isEmpty(this.state.firstName)&&(isEmpty(this.state.firstNameError))){
             this.setState({firstNameError:"this field is required"})
         }
         if(isEmpty(this.state.lastName)&&(isEmpty(this.state.lastNameError))){
             this.setState({lastNameError:"this field is required"})
         }
     }
     render() {
         return (
             <div>
                 <form>
                     <input
                         type="text"
                         name="firstName"
                         onChange={this.firstNameHandle}
                     />
                     {this.state.firstNameError.length > 0 && (
                         <span>
                        {this.state.firstNameError}
                    </span>
                     )}
                     <input
                         type="text"
                         name="lastName"
                         onChange={this.lastNameHandle}
                     />
                     {this.state.lastNameError.length > 0 && (
                         <span>
                        {this.state.lastNameError}
                    </span>
                     )}
                     <Dropdown>
                         <Dropdown.Toggle variant="success" id="dropdown-basic">
                             Dropdown Button
                         </Dropdown.Toggle>

                         <Dropdown.Menu>
                             <Dropdown.Item >Action</Dropdown.Item>
                             <Dropdown.Item >Another action</Dropdown.Item>
                             <Dropdown.Item >Something else</Dropdown.Item>
                         </Dropdown.Menu>
                     </Dropdown>
                     <button type="submit" onClick={this.onButtonClick}>submit</button>
                 </form>
             </div>
         );
     }

 }
 export default ReactForm;