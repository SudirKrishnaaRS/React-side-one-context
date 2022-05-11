import React, {useState} from "react";

import PackageContext from "./context"; //! PackageContext is simply just like a variable (you can name it anything)

const Provider= (props) => {
    const [mission, setMission]=useState({
        mname:"Go to Russia", 
        agent: "007", 
        accept:"Not accepted"
    });

    return(
        <PackageContext.Provider value={{
            data:mission,                                           //? HINT: here for variable data we assign the above mission which contains mname,agent,accept
            isMissionAccepted: () => {                              //? HINT: Inthis method we are calling the setMission method as we cannot directly change the value of "mission" in State (NOT A GOOD PRACTICE)
                setMission({...mission,accept:"ACCEPTED"})          //! HINT  {...mission,accept:"ACCEPTED"} means load all other values as such(i.e mname,agent) and change the accept value as "ACCEPTED"
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    );
};

export default Provider;
