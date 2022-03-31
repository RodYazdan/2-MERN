import React, {Component} from 'react';

class PersonCard extends Component{	// declare a class
    constructor(props){
        super(props);

        this.state = {
            value: this.props.age,
        }; 

    }
    render(){
        const {firstName,lastName,hairColor}= this.props;
        return(
            <div>
                <h1 > {firstName}, {lastName}</h1>
                <p>Age: {this.state.value} </p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.setState({ value: this.state.value + 1 })}>
                    Birthday Button for {firstName} {lastName}
                </button>
                <br />
            </div>
        )
    }
}

export default PersonCard;
