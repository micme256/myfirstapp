import profile from './images/Mike.png';
const Header = () => {
    function doStuff(){
        const response = window.confirm('Do you want to add a new user?');
        if (Response===true) {
          alert("New member added!");
        } else {
          alert("Operation cancelled.");
        }
      }
      function upLoadDoc(){
        const checkt= window.confirm('Do you want to upload something?');
        if(checkt===true) {
            alert('New project uploaded successfully');
        }else{
            alert('User has cancelled the process!');
        }
      }
    
    return (
      <div className='header'>
        <div className='header-profile'>
            <img src={profile} alt="Nshimye Michael"/>
            <div>
                <p>Hi there</p>
                <p>Nshimye Michael(@Mykho)</p>
            </div>
        </div>
        <div className="nav-menu">
            <ul>
                <li><button onClick={doStuff}>New</button></li>
                <li><button onDoubleClick={upLoadDoc}>Upload</button></li>
                <li><button>Share</button></li>
            </ul>
        </div>
      </div>
    )
  }
  export default Header;