import { BsChatText, BsInstagram, BsWhatsapp, BsSoundwave, BsYoutube, BsSpotify} from "react-icons/bs";

export const Contact = () => {
    
    const data = [
        {
            "text": "mail",
            "content" : "abc@abc.com",
            "icon": <BsChatText/>,
            "href": "/"
        },
        {
            "text": "instagram",
            "content" : "@abc",
            "icon": <BsInstagram/>,
            "href": "/"
        },
        {
            "text": "whatsapp",
            "content" : "1234567",
            "icon": <BsWhatsapp/>,
            "href": "/"
        }
    ]
    return (
        <div className="contact" id="contact">
            <div className="contact-box">
                <div className="contact-box-info">
                    <h3 className="contact-box-info-title">Contact Me</h3>

                    {data.map(({text, content, icon, href}) => (
                        <div className="contact-box-info-container">
                            <div>
                                <span>{icon}</span>
                            </div>
                            <div>
                                <p>{text}</p>
                                <a href={href}>{content}</a>
                            </div>
                        </div>
                    ))}

                    <div className="contact-box-info-footer"> 
                        <a href=""><BsSoundwave/> </a>
                        <a href=""><BsYoutube/> </a>
                        <a href=""><BsSpotify/> </a>                       
                    </div>

                </div>
                <div className="contact-box-form"></div>
            </div>
        </div>
    )
}