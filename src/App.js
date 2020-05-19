import React, {Component} from 'react';
import Addresses from './components/addresses';

class App extends Component {
    render() {
        return (
            <Addresses contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/request')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;