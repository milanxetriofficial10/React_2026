// conditinal component here 

import Parts from "./Coding_Learning/Parts";
import Parts1 from "./Coding_Learning/Parts1";

function ConditionalComponent(){
    const display = true;

    if (display) {
        return(
            <Parts />
        )
    }
    else {
        return (
            <Parts1 />
        )
    }
}
export default ConditionalComponent;