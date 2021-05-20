// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render(){
        return(
            <li>
            {this.state.peopleInSpace.map(p => p.name)}
            </li>
        )
    }

    

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}

export default App