import imag from '../assets/images/me.jpg';

export default function SideBar () {
    let usersArray = [
        {
            Name:'Hassun',
            profile:require('../assets/images/me.jpg'),
        },
    ]
    let chatfunction = usersArray.map(chat => {
        return (

            <div className="newChat">
                <div className='chatName'>
                    <image className="imgContainer"><img src={chat.profile} alt="profile"/></image>
                    <div className='nameContainer'>
                        <h2>{chat.Name}</h2>
                        <p>jaaaaaaaaaaaaiwpoijgaw4wpafifj4ijgaw</p>
                    </div>
                </div>
                <span>date</span>
            </div>
            )
    })

    return (
        <div className='SideBar'>
            <div className='searchContainer'>
                <div className='inputContainer'>
                    <input placeholder='Search' type='text' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <i className="fa-solid fa-bars"></i>
            </div>
            {chatfunction}
        </div>
    )
}