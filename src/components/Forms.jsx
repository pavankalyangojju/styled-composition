export default function form({ children, onSubmit }){
    console.log(children);
    return <form style={{
        border: "1px solid #fff",
        borderRadius:"5%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        width:"50%",
        margin:"0 auto",
        marginTop:10,
        padding:15,
        backgroundColor:"wheat"
    }}
    onSubmit={onSubmit}
    >
    {children}</form>;
}