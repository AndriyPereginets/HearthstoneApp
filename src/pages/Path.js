import {useParams} from "react-router-dom";

const Path = () => {

    let {category} = useParams();
    console.log(category);

    return (
        <div>
            somesting
        </div>
    )
}

export default Path;