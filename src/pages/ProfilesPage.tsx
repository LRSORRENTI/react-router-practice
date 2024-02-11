import {Link, Outlet} from 'react-router-dom'


// The outlet component will act as a placeholder 
// for child components, any child root of ProfilesPage 
// will render in the outlet 
export default function ProfilesPage(){
    const profiles = [1, 2, 3, 4, 5];
    return(
    <div>
        <div className='profiles-wrap'>
        <div className='profiles'>
            {profiles.map((prof) => {
                return(
                   <Link className="prof-link" key={prof} to={`/profiles/${prof}`}>
                        Profile {prof}
                    </Link>
                )
            })}
        </div>
        </div>
        <div className='outlet-wrap'>
            <Outlet/>
        </div>
    </div>
    )
}