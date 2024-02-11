import {useParams} from 'react-router-dom'

// By using the useParams returns all the params 
// available, when visiting 'profiles/5' it logs 
// {profileId: '5'}

export default function ProfilePage(){
   const params = useParams<{profileId:string}>();
    //  console.log(params)
   const pageName = params.profileId;
    return (
        <div>
            <h1>Profile Page {pageName}</h1>
        </div>
    )
}