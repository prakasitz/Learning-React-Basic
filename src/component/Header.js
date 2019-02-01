import React,{Component} from 'react';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
        console.log("constructor");
    }

    tick() {
        this.setState({date : new Date()});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
        console.log("DidMount");
    }

    componentDidUpdate() {
        console.log("didUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("WillUnmount");
    }

    render() {
        return (
            <h1>
                {this.state.date.toLocaleTimeString()}
            </h1>
        )
    }
}

export default Header;
