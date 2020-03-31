import React, { Component } from 'react';
import { Button } from '@material-ui/core'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Platillo</h1>
                <Button variant="contained" color="primary">
                    Hello World
    </Button>
            </div>
        );
    }
}

export default Header;