import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                 <span className="text-muted">All Rights Reserved 2020</span> <a href='https://linkedin.com/in/montaser-mahadi'>@Montaser</a>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
