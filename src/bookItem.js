import React from 'react';

class bookItem extends React.Component {
    render(){
        return(
            <>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.status}</p>
                <p>{this.props.email}</p>
            </>
        )
    }
}

export default bookItem;