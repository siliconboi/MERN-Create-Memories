import card from "./images/card.png";

const Memory = (props)=>{
    const {message, email, image} = props;
    return(
    <div className="Card">
        <img src={image===''?card:image} alt="none"/>
        <div className="CardDetails">
            <h1>{message}</h1>
            <h2>{email}</h2>
        </div>
    </div>
    );
};

export default Memory;