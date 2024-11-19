import "./css/Header.css";

let headerText = 'Login';

if(localStorage.getItem('user') !== null){
  window.location.replace("http://www.w3schools.com");
}

if(sessionStorage.getItem("user")){
  headerText = 'Logout';
}else{
  headerText = 'Login';
}

const clickToLogout = () =>{
  sessionStorage.removeItem("user");
  headerText = 'Login';
  window.location.replace("http://www.w3schools.com");
};

const Header = () => {
    return (
      <header className="navbar">
        <div className="logo">Emo-ney</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <button className="login-btn" onClick={clickToLogout}>{ headerText }</button>
      </header>
    );
  };

  export default Header;