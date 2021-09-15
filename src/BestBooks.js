import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import BookItem from "../src/BookItem";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Form, Button } from "react-bootstrap";
import UpdateForm from "./components/updateForm";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksArr: [],
      show: false,

      title: "",
      description: "",
      status: "",
      bookId:'',
     
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = "mohammadharoun44@gmail.com";
    axios
      .get(`https://mongo-can-of-books.herokuapp.com/books?email=${email}`)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
        // console.log(result.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  addBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = "mohammadharoun44@gmail.com";
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: email,
      status: event.target.status.value,
    };

    axios
      .post(`https://mongo-can-of-books.herokuapp.com/addBook`, obj)
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log("Error on adding data");
      });
  };

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = "mohammadharoun44@gmail.com";
    axios
      .delete(
        `https://mongo-can-of-books.herokuapp.com/deleteBook/${id}?email=${email}`
      )
      .then((result) => {
        this.setState({
          booksArr: result.data,
        });
      })
      .catch((err) => {
        console.log("error in deleting cat");
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  showUpdateForm = (item) => {
    this.setState({
      show: true,
      title: item.title,
      description: item.description,
      status: item.status,
      bookId:item._id,
     
    });
  };

  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      bookId: this.state.bookId,
      email:email
      
    };

    // http://localhost:3030/

    axios.put(`https://mongo-can-of-books.herokuapp.com/updateBook/${this.state.bookId}`,obj)
    .then(result =>{
      this.setState({

        booksArr:result.data,
        show : false
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>

        <Form
          style={{ marginBottom: "300px" }}
          style={{ marginLeft: "180px" }}
          onSubmit={this.addBook}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Book Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Book Description"
            />
          </Form.Group>
          <Form.Label>Author Email</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="text" name="email" placeholder="Image URL" />
          </Form.Group>
          <Form.Label> Image URL </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="text" name="status" placeholder="Author Email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>




        {this.state.booksArr.length && (
          <BookItem
            booksArr={this.state.booksArr}
            deleteBook={this.deleteBook}
            showUpdateForm={this.showUpdateForm}
          ></BookItem>
        )}

        <UpdateForm
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
         
          updateBook={this.updateBook}
          
        />
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
