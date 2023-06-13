import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tab1 = [{'title': 'Tab 1', 'content':''},{'title': 'Tab 2', 'content':''},{'title': 'Tab 3', 'content':''}]
  const tabA = [{'title': 'Tab A', 'content':''},{'title': 'Tab B', 'content':''},{'title': 'Tab C', 'content':''}]

  const [tab1content, setTab1Content] = useState("Tab 1");
  const [tab2content, setTab2Content] = useState("Tab A");
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tab ={tab1} setcontent ={setTab1Content} />
        <p>Content for {tab1content}</p>
        <Tabs tab ={tabA} setcontent= {setTab2Content} />
        <p>Content for {tab2content}</p>
    </div>
  )
}

export default App