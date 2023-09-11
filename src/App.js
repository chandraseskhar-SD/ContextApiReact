import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupChat from "./components/GroupChat";
import SpecifiGapCaht from "./components/SpecificGapChat";
import MemberInfo from "./components/MemberInfo";
import MemberData from "./components/MemberData";
import SelectMember from "./components/SelectMember";
import TestApi from "./components/TestApi";
import ChatBot from "./components/ChatBot";
import LoginPage from "./components/LoginPage";
import ChatPage from "./components/websocket";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}/>
        <Route path="/GroupChat" element={<GroupChat/>}/>
        <Route path="/GroupChatBot" element={<ChatPage/>}/>
        <Route path="GroupChat/SpecificGapChat" element={<SpecifiGapCaht/>}/>
        <Route path="Groupchat/SpecificGapChat/GroupChat/SpecificGapChat" element={<SpecifiGapCaht/>}/>
        <Route path="Groupchat/SpecificGapChat/GroupChat" element={<GroupChat/>}/>
        <Route path="GroupChat/SpecificGapChat/MemberInfo" element={<MemberInfo/>}/>
        <Route path="Groupchat/SpecificGapChat/GroupChat/SpecificGapChat/MemberInfo" element={<MemberInfo/>}/>
        <Route
          path="GroupChat/SpecificGapChat/MemberInfo/SelectMember"
          element={<SelectMember />}
        />
        <Route
          path="GroupChat/SpecificGapChat/MemberInfo/SelectMember/MemberInfo"
          element={<MemberInfo />}
        />
        <Route
          path="SpecificGapChat/MemberInfo/SelectMember/MemberInfo/SelectMember"
          element={<SelectMember />}
        />
      </Routes>
    </Router>
    // <TestApi/>
    // <ChatBot/>
    // <LoginPage/>
  );
}

export default App;
