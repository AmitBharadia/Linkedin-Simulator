import React,{Component} from 'react';
import "./postJobs.css";

class postJobsNav extends Component{

    render()
    {
        return(
              <div>
                    <nav className="navbar navbar-toggler navbar-expand-md navbar-light">
                        <div className="container">
                            <img
                                className="lazy-loaded mr-auto pl-5"
                                alt="LinkedIn"
                                src="https://static.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y"
                            />
                            <div className="collapse navbar-collapse" id="navbar6"> <a className="navbar-text text-light d-none d-md-block" href="#">
                                <h3> JOBS </h3>
                            </a>
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Home</h3></a> </li>
                                    <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Post a Job</h3></a> </li>
                                    <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Linkedin.com</h3></a> </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item"> <a className="nav-link text-light" href="#"><h3>Log in</h3></a> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

        )
    }
}

export default postJobsNav;