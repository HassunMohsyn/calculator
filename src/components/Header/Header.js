

export default function Header () {

    let array_icons = [
        {
            icon:'fa-solid fa-users',link:'#',key:'3'
        },
        {
            icon:'fa-solid fa-circle',link:'#',key:'4'
        },
        {
            icon:'fa-solid fa-comment-medical',link:'#',key:'2'
        },
        {
            icon:'fa-solid fa-ellipsis-vertical',link:'#',key:'1'
        },
    ]

    let li = array_icons.map(item => {
       return <li key={item.key}><a href={item.link}><i className={item.icon}></i></a></li>
    })

    return (
        <header>
            <div className="left">
                <h1 className="imgContainer"><img src={require("../assets/images/me.jpg")} alt=""/></h1>
                <ul>
                    {li}
                </ul>
            </div>
            <div className="right">
                <div className='chatName'>
                    <image className="imgContainer"><img src={require("../assets/images/me.jpg")} alt=""/></image>
                    <div className='nameContainer'>
                        <h2>Name</h2>
                        <p>jaaaaaaaaaaaaiwpoijgaw4wpafifj4ijgaw</p>
                    </div>
                </div>
                
                <div className='icons'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </header>
    );
}