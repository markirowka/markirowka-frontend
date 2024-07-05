
export const ContentPage = ({ heading, content }: { heading: string; content: string }) => {

    return(
        <div className="contentPage">
            <div className="contentHeading">
                <h2>{heading}</h2>
                <div className="editBtn">
                    <img src="" className="editIcon" />
                </div>
            </div>
            <div className="contentZone" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}