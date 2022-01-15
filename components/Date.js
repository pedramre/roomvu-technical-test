import {useState} from "react";
import moment from "moment";

const CustomDateTime = ({id})=>{
    const [publish, setPublish] = useState(moment);
    return(
        /*<span>July 7, 2021 </span>*/
        <span>{publish.subtract(3, 'months').add(id,'days').format('MMM D, YYYY')}</span>
    )
}

export default CustomDateTime;