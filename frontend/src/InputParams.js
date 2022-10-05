import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import Results from './Results';

const InputParams = ()=>{
    const [message, setMessage] = useState("");
    const [mail, setMail] = useState("");
    const [image, setImage] = useState("");
    const [memories, setMemories] = useState([]);
    useEffect(()=>{
      postForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function postForm(){
        const data = {
            message: message,
            email: mail,
            image: image
          };
    const res = await fetch("http://localhost:8080/api/post",{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const mem = await res.json();
    setMemories(mem);
    };

    const clear = () => {
      setImage("");
      setMail("");
      setMessage("");
    };

return(
<div>
    <form
    onSubmit={(e)=>{
        e.preventDefault();
        postForm();
    }}>
      <label htmlFor="message">
        Message
        <input id="message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      </label>
      <label htmlFor="email">
        Creator
        <input id="mail" type="text" value={mail} onChange={(e)=>setMail(e.target.value)}/>
      </label>
      <div><FileBase className="FileBase" type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} /></div>
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
    </form>
    <div>
        {
            <Results memories={memories}/>
        }
    </div>
</div>
);
};

export default InputParams;