import React, {Component} from 'react';
import { Card } from '@material-ui/core';
import './login.css';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Header from "../../common/Header";
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component{
    constructor(){
        super();
        this.state= {
            username : "",
            password : "",
            usernamereq : "displaynone",
            passreq : "displaynone",
        }
    }

    loginAction = () => {
        this.state.username === "" ? this.setState({usernamereq : "displayblock"}):this.setState({usernamereq : "displaynone"});
        this.state.password === "" ? this.setState({passreq : "displayblock"}):this.setState({passreq : "displaynone"});
    };

    usernameChange = (e) => {
            this.setState({username : e.target.value});
    };
    passwordChange = (e) => {
        this.setState({password : e.target.value});
    };

    render() {
        return(
            <div>
            <Header/>
            <div className={"card"}>
            <Card className={'cardbody'}>
                <CardContent>
                    <Typography >
                        LOGIN
                    </Typography>

                    <FormControl id={"usernamefield"} required className={'formcontent'}>
                            <InputLabel htmlFor={"username"}>Username</InputLabel>
                            <Input id={"username"} type={"text"} username={this.state.username} onChange={this.usernameChange}/>
                        <FormHelperText className={this.state.usernamereq}><span className={'red'}>required</span></FormHelperText>
                        </FormControl>

                        <FormControl required className={'formcontent'}>
                            <InputLabel htmlFor={"password"}>Password</InputLabel>
                            <Input id={"password"} type={"password"} password={this.state.password} onChange={this.passwordChange}/>
                            <FormHelperText className={this.state.passreq}><span className={'red'}>required</span></FormHelperText>
                        </FormControl>
                </CardContent>
                <CardActions>
                    <Button href={'#'} variant="contained" color="primary" onClick={this.loginAction}> Login</Button>
                </CardActions>
            </Card>
            </div>
            </div>
        );
    }
}
export default Login;
