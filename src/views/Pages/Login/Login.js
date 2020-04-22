import React, {Component} from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, withStyles } from '@material-ui/core';
import API from '../../../API';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import Swal from 'sweetalert2';
import { Rtif } from '../../Utils/Rtif';
import Container from '@material-ui/core/Container';
import Copyright from '../../Base/Global/Copyright';
import imgrepeat from '../../../assets/img/seamless.png';
import logo from '../../../assets/img/logo.png';

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url('/assets/img/bg3.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#ef012d',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                username: "",
                password: "",
                remember_me: false
            },
            errors: {},
            blocking: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //username
        if(!fields["username"]){
           formIsValid = false;
           errors["username"] = true;
        }

        if(typeof fields["username"] !== "undefined"){
            // let lastAtPos = fields["username"].lastIndexOf('@');
            // let lastDotPos = fields["username"].lastIndexOf('.');

            // if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["username"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["username"].length - lastDotPos) > 2)) {
            //   formIsValid = false;
            //   errors["username"] = true;
            // }
            // if(fields["username"] !== 'admin' && fields["username"] !== 'BP' && fields["username"] !== 'BPL' && fields["username"] !== 'BPP' && fields["username"] !== 'BPK' && fields["username"] !== 'KPA') {
            //   formIsValid = false;
            //   errors["username"] = true;
            // }
        }  
        
        //Password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = true;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(e, field){         
        let fields = this.state.fields;
        const errors = this.state.errors;
        switch (field) {
            case 'remember_me':
                fields[field] = e.target.checked;   
                break;
            case 'username':
                fields[field] = e.target.value;
                errors["username"] = false;
                this.setState({errors: errors});   
                break;
            case 'password':
                fields[field] = e.target.value;
                errors["password"] = false;
                this.setState({errors: errors});   
                break;
            default:
                fields[field] = e.target.value;
                break;
        }
        this.setState({fields});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({blocking: true});

        if(this.handleValidation()){
            localStorage.clear();
            const form = {
                username: this.state.fields.username,
                password: this.state.fields.password,
                remember_me: this.state.fields.remember_me
            }
            this.setState({blocking: false});
            localStorage.setItem('token', this.state.fields.username);
            this.props.history.push('/planner');
        }else{
            Swal.fire({  
                title: 'Warning',  
                icon: 'warning',
                text: 'Login Failed.',  
            });
            this.setState({blocking: false});
        }
    }

    render() {
        const { classes } = this.props;
        const { fields } = this.state;
        const styleImg = {
            backgroundImage: `url(${imgrepeat})`,
            marginTop: '-20px',
            paddingTop: '60px',
            height: '100vh'          
        };
        return (
            <BlockUi tag="div" blocking={this.state.blocking} message="Please wait">
                <div style={styleImg}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className="lgn">
                            <img src={logo} style={{marginBottom: '15px'}}/>
                            <Typography component="h1" variant="h5" className="welcome">
                                Welcome
                            </Typography>
                            <Typography className="fs14">
                                Silakan Masukan UserId Anda.
                            </Typography>
                            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                                <TextField
                                    onChange={(e) => this.handleChange(e, 'username')}
                                    value={fields["username"]}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    error={this.state.errors["username"]}
                                    style={{background: 'white'}}
                                />
                                <Rtif boolean={this.state.errors["username"]}>
                                    <div className='error_input'><i className="icon-cancel-circle2"></i></div>
                                </Rtif>
                                <TextField
                                    onChange={(e) => this.handleChange(e, 'password')}
                                    value={fields["password"]}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={this.state.errors["password"]}
                                    style={{background: 'white'}}
                                />
                                <Rtif boolean={this.state.errors["password"]}>
                                    <div className='error_input'><i className="icon-cancel-circle2"></i></div>
                                </Rtif>
                                <FormControlLabel className="fs12"
                                    control={<Checkbox onChange={(e) => this.handleChange(e, 'remember_me')} value={fields["remember_me"]} name="remember_me" color="primary"/>}
                                    label={<Typography className="smallCheck">Remember Me</Typography>}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    // color="primary"
                                    className={classes.submit}
                                    style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                                >
                                LOGIN <i className="icon-arrow-right8" style={{marginTop: '3px', fontSize: '12px', marginLeft: '10px'}}></i>
                                </Button>
                            </form>
                        </div>
                        <Box mt={8}>
                            <Copyright />
                        </Box>
                    </Container>
                </div>
            </BlockUi>
        )
    }
}

export default  withStyles(styles, { withTheme: true})(Login); 