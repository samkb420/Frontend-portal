import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

export default class Header extends Component {

  handleLogout =() =>{
    localStorage.clear();
    this.props.setUser(null);
  }
    render() {
      let btn;
      if(this.props.user){
        btn = (
           <>
     
  
     <a
       class="text-reset me-3 dropdown-toggle hidden-arrow"
       href="#/"
       
     >
       <i class="fas fa-bell"></i>
       <span class="badge rounded-pill badge-notification bg-danger">1</span>
     </a>
     

   
     <a
       class="dropdown-toggle d-flex align-items-center hidden-arrow"
       href="#gg"
       id="navbarDropdownMenuLink"
       role="button"
       data-mdb-toggle="dropdown"
       aria-expanded="false"
     >
       <img
         src={this.props.user.profile_image}
         class="rounded-circle"
         height="25"
         alt=""
         loading="lazy"
       />
     </a>
     <ul
       class="dropdown-menu dropdown-menu-end"
       aria-labelledby="navbarDropdownMenuLink"
     >
       <li>
         <a class="dropdown-item" href="#/">My profile</a>
       </li>
       <li>
         <a class="dropdown-item" href="#/">Settings</a>
       </li>
       <li>
         <Link class="dropdown-item" onClick={this.handleLogout} to="/">Logout</Link>
       </li>
     </ul>
           
         
          </>
         
        )

      }else{
        btn = (

          <>

             <Link
       class=" nav-item nav-link"
       to="/login"
       
     >
       Login
      
     </Link>
     <Link
       class="  nav-item nav-link"
       to="/register"
       
     >Register
       
     </Link>
            
            </>

        )



      }
        return (


         


            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light ">
 
 <div class="container">

   <button
     class="navbar-toggler"
     type="button"
     data-mdb-toggle="collapse"
     data-mdb-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <i class="fas fa-bars"></i>
   </button>


   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
     <a class="navbar-brand mt-2 mt-lg-0" href="#/">
       <h4>Advanced Attachment Portal </h4>
     </a>
    
     {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link" href="#">Dashboard</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Team</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Projects</a>
       </li>
     </ul> */}



<form class="d-flex search">
        <Search/>
      </form>
  
   </div>



   <div class="d-flex align-items-center">
    {btn}
     

   </div>

 </div>

</nav>
                

          

            </div>
        )
    }
}
