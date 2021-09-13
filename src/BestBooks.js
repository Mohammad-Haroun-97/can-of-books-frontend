import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import bookItem from './bookItem';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'



class MyFavoriteBooks extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
      booksArr : []
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
    })
    .catch (err =>{
      console.log('error');
    })
  }

  render() {
    




    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        

        {this.state.booksArr.map(item=>{
          return(
            <>

            

               {/* <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.status}</p>
                <p>{item.email}</p> */}


                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.status}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.email}</p>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
  {/* <Carousel.Item></Carousel.Item> */}




            {/* // title =  <p>{item.title}</p>
            // description = {item.description}
            // status = {item.status}
            // email = {item.email} */}

            </>
          )
        })
       }
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
