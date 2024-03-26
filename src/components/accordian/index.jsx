//single selection
//multiple selection
import data from "./data";
import { useState } from "react"

export default function Accordian() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(currentId) {
        console.log(currentId);
    }

    return <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                    </div> )
                    : <div>No data found!</div>
                }
            </div>
    </div>;
}