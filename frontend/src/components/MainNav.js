import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'


class MainNav extends Component {   
   
    render() {
        return (
            
        <div style={{boxShadow : '0px 0px 5px #888888'}}>                
              <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand active" href="http://localhost:3000/">HomeAway</a>
                    </div>
                    
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="http://localhost:3000/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="http://localhost:3000/signin"><span class="glyphicon glyphicon-log-in"></span> Signin</a></li>
                    <li>
                                <a href="http://localhost:3000/listProperty" >
                                List YOUR property  </a>
                            </li>
                    </ul>
                </div>
                </nav>
             </div>
        );
    }
}

export default withRouter(MainNav);