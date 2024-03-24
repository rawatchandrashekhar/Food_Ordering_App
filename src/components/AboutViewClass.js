import React from "react";

class AboutViewClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 1,
        }
    }

    render() {

        const { heading } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="about-container">
                <h2>{heading}</h2>
                <div>COUNT : {count}</div>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase COUNT</button>
                <div>COUNT2 : {count2}</div>
                <button onClick={() => {
                    this.setState({
                        count2: this.state.count2 + 1
                    })
                }}>Increase COUNT2</button>
                <div>Chandra Shekhar Rawat</div>
                <div>Gwalior</div>
            </div>
        )
    }
}

export default AboutViewClass;