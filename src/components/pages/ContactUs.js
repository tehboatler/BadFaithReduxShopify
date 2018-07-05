import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const RootContainer = styled.div`
 padding-top: 20vw;
  width: 100%;
  z-index: 1000;
`;

export default class ContactUs extends Component {

    render() {
    return (
      <RootContainer>
      <ReactTypeformEmbed
        popup={true}
        autoOpen={true}
        url={'https://starsigned.typeform.com/to/jO5YOo'}
        hideHeaders={false}
        hideFooter={true}
        buttonText="Go!"
        style={{height: 0, bottom: 0}}
        ref={(tf => this.typeformEmbed = tf) }/>
      </RootContainer>
    );
  }
}

// import React, { Component } from 'react';
// import styled from 'styled-components';
// import firebaseConf from '../../../config/firebase';
// require('firebase/database');

// const RootContainer = styled.div`
//   padding-top: 20vw;
//   display: flex;
//   justify-content: center;
// `;

// export default class ContactUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: [],
//       alert: false,
//       alertData: {}
//     };
//   }

//   showAlert(type, message) {
//     this.setState({
//       alert: true,
//       alertData: { type, message }
//     });
//     setTimeout(() => {
//       this.setState({ alert: false });
//     }, 4000);
//   }

//   resetForm() {
//     this.refs.contactForm.reset();
//   }

//   sendMessage(e) {
//     e.preventDefault();

//     const params = {
//       name: this.inputName.value,
//       email: this.inputEmail.value,
//       city: this.inputCity.value,
//       phone: this.inputPhone.value,
//       message: this.textAreaMessage.value
//     };

//     if (
//       params.name &&
//       params.email &&
//       params.phone &&
//       params.phone &&
//       params.message
//     ) {
//       firebaseConf
//         .database()
//         .ref('form')
//         .push(params)
//         .then(() => {
//           this.showAlert('success', 'Your message was sent successfull');
//         })
//         .catch(() => {
//           this.showAlert('danger', 'Your message could not be sent');
//         });
//       this.resetForm();
//     } else {
//       this.showAlert('warning', 'Please fill the form');
//     }
//   }

//   render() {
//     return (
//       <RootContainer>
//         {this.state.alert && (
//           <div
//             className={`alert alert-${this.state.alertData.type}`}
//             role="alert">
//             <div className="container">{this.state.alertData.message}</div>
//           </div>
//         )}
//         <RootContainer>
//           <div className="row">
//             <div className="col-sm-4">
//               <h2>Contact Form</h2>
//               <form onSubmit={this.sendMessage.bind(this)} ref="contactForm">
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Name"
//                     ref={name => (this.inputName = name)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     placeholder="Email"
//                     ref={email => (this.inputEmail = email)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="city">City</label>
//                   <select
//                     className="form-control"
//                     id="city"
//                     ref={city => (this.inputCity = city)}>
//                     <option value="México">México</option>
//                     <option value="Guadalajara">Guadalajara</option>
//                     <option value="Monterrey">Monterrey</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="phone"
//                     placeholder="+52 1"
//                     ref={phone => (this.inputPhone = phone)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     rows="3"
//                     ref={message => (this.textAreaMessage = message)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </RootContainer>
//       </RootContainer>
//     );
//   }
// }
