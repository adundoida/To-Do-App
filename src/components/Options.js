import React from "react";
import Options from "./Options"

class Options extends React.Component{
    render(){
        return(
            <div>
            {this.props.OptionData.map((Options)=>{
                return <Options OptionText={Options} />;

            })}
            </div>
        );
    }
}

export default Options;