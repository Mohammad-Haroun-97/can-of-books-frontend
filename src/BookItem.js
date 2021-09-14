import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class bookItem extends React.Component {

    
    render(){


       
        return(
            <>
               <>
               <Carousel variant="dark" style={{marginTop:'100px'}}>
              
                   {this.props.booksArr.map((item) => {
                       return(
                        
                      <Carousel.Item >
                      <img
                          className="d-block w-90 "
                          src={item.status}
                          alt="First slide"
                      />
                      <Carousel.Caption style={{color:'black', paddingLeft:'300px'}}>
                          <h5>{item.title}</h5>
                          <p><strong>Description: <br></br></strong> {item.description}</p>

                    
                    
                          <p><strong>email: </strong>{item.email}</p>
                          
                          
                      </Carousel.Caption>
                  </Carousel.Item>
                  
                       )
                   })}
              
              </Carousel>
       </>
            </>
        )
    }
}

export default bookItem;