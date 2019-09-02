import React, {Component} from "react";
import "./header.css";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {withStyles} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
    textfield:{
        float: 'right',
        width: '300px',
        background : '#c0c0c0',
        borderRadius : '4px',
        marginRight : '10%',
    },
    search : {
        border: 'none',
        marginLeft: '25px',

    },
    searchIcon: {
        width: theme.spacing(7),
        color: 'black',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'inline',
        marginTop: '5px',
        zIndex: '1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class Header extends Component{

    render() {
        const {classes}  = this.props;
        return(
            <div>
                <header className={'headerBody'}>
                    <div className={classes.textfield}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            className={classes.search}
                            placeholder={'Search...'}
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </div>
                    <Typography className={'title'}>
                        Image Viewer
                    </Typography>

                </header>
            </div>
        )
    }
}
export default  withStyles(styles)(Header);