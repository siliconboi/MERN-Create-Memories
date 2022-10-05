import Memory from "./Memory";
const Results = ({memories})=>{
return(
<div className="Display">
    {
    memories.map((memory)=>{
        return (
         <Memory 
         message = {memory.message} 
         email = {memory.email} 
         image = {memory.image}
         key = {memory._id}/>
        )
    })
    }
</div>
);
};

export default Results;