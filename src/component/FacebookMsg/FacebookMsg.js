import { FacebookProvider, CustomChat } from 'react-facebook';
function FacebookMsg () {
    return(
        <div className="facebookMsg-chat">
            <FacebookProvider appId="230962079912731" chatSupport>
                <CustomChat pageId="108302479016574" minimized={true}/>
            </FacebookProvider>
        </div>
    )
}
export default FacebookMsg