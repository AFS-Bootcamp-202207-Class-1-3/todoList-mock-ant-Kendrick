import AntDoneList from "../todo/AntDoneList";
import AntList from "../todo/AntList";
import Done from "./Done";
import "./DoneList.css";

function DoneList(){
    return(
        <div className="done-list">
        <span>DoneList</span>
        <AntDoneList />
    </div>
    );
}

export default DoneList;