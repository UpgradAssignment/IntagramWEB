import React, {Component} from "react";
import "./header.css";
import Typography from '@material-ui/core/Typography';

class Header extends Component{
    render() {
        return(
            <div>
                <header className={'headerBody'}>
                    <Typography className={'title'}>
                        Image Viewer
                    </Typography>
                </header>
            </div>
        )
    }
}
export default Header;