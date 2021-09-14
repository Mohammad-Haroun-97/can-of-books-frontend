import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BookItem from '../src/BookItem';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'



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
    .get(`http://localhost:3030/books?email=${email}`)
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

  render() {
    




    return(
      <>
      
        <h1>My Favorite Books</h1>
        

       
        
            
          {this.state.booksArr.length && (<BookItem booksArr = {this.state.booksArr}></BookItem>)}
            
          
        
       
     
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
