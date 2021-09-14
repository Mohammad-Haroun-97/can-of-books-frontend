import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BookItem from '../src/BookItem';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import {Form,Button} from 'react-bootstrap'



class MyFavoriteBooks extends React.Component {

  
  constructor(props){
    super(props);

    this.state ={
      booksArr : [],
    }
  }

  componentDidMount = () =>{
    const { user } = this.props.auth0;
    const email = 'mohammadharoun44@gmail.com';
    axios
    .get(`https://mongo-can-of-books.herokuapp.com/books?email=${email}`)
    .then( result =>{
      this.setState({
        booksArr:result.data
      })
      // console.log(result.data);
    })
    .catch (err =>{
      console.log('error');
    })
  }


  addBook = (event) =>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = 'mohammadharoun44@gmail.com';
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: email,
      status:event.target.status.value,
    }

    axios
    .post(`https://mongo-can-of-books.herokuapp.com/addBook`,obj)
    .then(result =>{
      this.setState({
        booksArr: result.data
      })
    })
    .catch(err=>{
      console.log('Error on adding data');
    })
  }




  deleteBook = (id) =>{
    const { user } = this.props.auth0;
    const email = 'mohammadharoun44@gmail.com';
    axios
    .delete(`https://mongo-can-of-books.herokuapp.com/deleteBook/${id}?email=${email}`)
    .then(result =>{
      this.setState({
        booksArr: result.data
      })
    })
    .catch(err=>{
      console.log('error in deleting cat');
    })
  }



  render() {
    




    return(
      <>
      
        <h1>My Favorite Books</h1>

        {/* <form onSubmit={this.addBook}>
          <fieldset>

            <legend>Add Book:</legend>
            <input type='text' name='title' placeholder='Book Name' />
            
            <input type='text' name='description' placeholder='Book description' />

            <input type='text' name='email' placeholder='Author Email' />

            <input type='text' name='status' placeholder='img url' />

            <button type='submit'>Add</button>

          </fieldset>
        </form> */}



        <Form style={{marginBottom:'300px'}} style={{marginLeft:'180px'}} onSubmit={this.addBook}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Book Title</Form.Label>
    <Form.Control type='text' name='title' placeholder='Book Name'/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Book Description</Form.Label>
    <Form.Control type='text' name='description' placeholder='Book Description' />
  </Form.Group>
  <Form.Label>Author Email</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type='text' name='email' placeholder='Image URL' />
  </Form.Group>
  <Form.Label> Image URL </Form.Label>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type='text' name='status' placeholder='Author Email' />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>



        

       
        
            
          {this.state.booksArr.length && (<BookItem booksArr = {this.state.booksArr} deleteBook= {this.deleteBook} ></BookItem>)}
            
          
        
       
     
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
