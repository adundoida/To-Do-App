import React from "react";
import Header from "./Header";
import Action from "./Action";
import Option from "./Option";
import AddOption from "./AddOption";

class App extends React.Component{ 
    render(){
        const title ="Todo Application";
        const subtitle ="items to focus on";
        const Option =
        ["visit Paris",
        "visit Egypt",
        "visit Seychelles",
        "visit tunis",
    ];
        return(
            <div>
                <Header titleData ={title} subtitleData={subtitle} />
                <Action />
                <Option  OptionData={Option}/>
                <AddOption />
            </div>
        );
    }
}

export default App;