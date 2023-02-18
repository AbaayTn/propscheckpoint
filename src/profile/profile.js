import PropTypes from "prop-types";

export const Profile=(props)=>{
    const { fullname = "HG" } = props;
        return(
        <div>
        <h1>My profile: {fullname}, {props.bio}, {props.profession}</h1>
        <div>{props.photo}</div>
        <div>{props.children}</div>
        <div><HandleName fullname="Houssem Gharbi"/></div>
        </div>
        ) 
    }

export const HandleName =(props)=>{ 
    return alert(props.fullname)

}

Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
    };
