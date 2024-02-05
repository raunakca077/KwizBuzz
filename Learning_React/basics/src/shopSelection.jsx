
const select =({obj})=>
{
return (
<ul>

    {obj.map((i)=>{return <li style={{color:(i.status)?"red":null,textDecoration:obj.status?"line-through":null}}>
        {i.item}:{i.qty}</li>})}
</ul>
)
}

export default select