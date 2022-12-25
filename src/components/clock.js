import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dateTime: new Date() }
        // console.log('Instansiated')
    }

    tick = () => {
        this.setState(this.state.dateTime = new Date())
    }

    componentDidMount() {
        this.clock = setInterval(
            () => {
                this.tick()
                // console.log("Updated")
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.clock)
    }

    render() {
        // console.log("Re-rendering")
        return <div>{this.state.dateTime.toLocaleTimeString()}</div>
    }
}

export default Clock;