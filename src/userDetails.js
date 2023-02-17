import {useContextProvider} from "./contextProvider";

const UserDetails = () => {
    const {state} = useContextProvider();
    
    const userName = state.userName;
    const emailId = state.emailId;
    console.log("Userdetails--> ",state);
       return (
        <>
            <h1>Profile</h1>
            <h3>UserName</h3>
            <h4>{userName}</h4>
            <h3>EmailId</h3>
            <h4>{emailId}</h4>
        </>
       )
}

export default UserDetails;