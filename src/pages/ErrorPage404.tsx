import '../index.css';
import {Link} from 'react-router-dom';

// As a note: When you use the default <a> tag to 
// link back to a route like '/', it performs an entire 
// refresh, requesting all the html and js 

// But when using the built in Link component instead 
// we can circumvent this behavior, this will not 
// it will instead perform client side routing 

// If you go into the network tab of the browser tools 
// you can see that pressing the a tag instead of the 
// Link does indeed fetch all resources 

export default function ErrorPage404(){
    return (
        <div className="Page404">
            <h2>
                404 Page Not Found
            </h2>
            <Link to='/' className="link">Home</Link>
            {/* <a href="/" style={{marginTop: "5px"}}>A Tag home </a> */}
        </div>
    )
}