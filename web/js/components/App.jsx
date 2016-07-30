import React, {Component} from 'react'
import Chart from './Chart'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
           loaderMessage: '', 
        };
    }
	render() {
		return <div>
            <div className="search-box">
                <input className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="search-result">
                <div className="loader blink">
                    {this.state.loaderMessage}
                </div>
            </div>
            <Chart/>
        </div>
	}
}

/*
export default class Results extends Component {
	render() {
        return <div />
	}
}
*/
