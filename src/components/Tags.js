import React from "react";

function Tags(props) {
    const { data } = props
    let newData = data.split(',')
    return (<>
        {newData.map((item) => {
            if (item) {
                return <div className="tagsection">{item}</div>
            }
        })}
    </>);
}

export default Tags;