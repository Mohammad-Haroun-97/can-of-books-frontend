import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Card,Button}  from 'react-bootstrap'

class bookItem extends React.Component {

    
    render(){


       
        return(
            <>
               
               
              


              {this.props.booksArr.map((item) => {
                       return(
                         
                           <>
                           <Card style={{ width: '18rem' }}>

                        <Card.Img variant="top" src={item.status} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
    {item.description}
    <p><strong>email: </strong>{item.email}</p>
    </Card.Text>
    <Button onClick={() => this.props.deleteBook(item._id)}>Delete</Button>
  </Card.Body>

  </Card> 
  </>
  )})}  

  


</>

                     

                        


       
            
        )
    }
}

export default bookItem;