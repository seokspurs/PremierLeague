import { useParams } from "react-router-dom";

function TeamComponent(){
    const {id} = useParams();
    return (
        <div>팀 페이지{id}</div>
    );
}
export default TeamComponent;