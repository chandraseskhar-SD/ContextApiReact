import { useEffect, useState } from "react";

const TestApi = () => {
  const [userdata, setUserData] = useState([]);
  const getdata = async () => {
    // try{
    // const response = await fetch("https://sozj1jms93.execute-api.us-east-1.amazonaws.com/Test/gpcchat/getgroupchat");
    // const jsonData = response.json();
    // console.log("response", jsonData);
    // setUserData(Object.values(jsonData?.Users));
    // console.log("state", userdata)

    // }
    // catch(error){
    //     console.log('error')
    // }
    fetch("https://sozj1jms93.execute-api.us-east-1.amazonaws.com/Test/gpcchat")
      .then((response) => response.json())
      .then((jsondata) => setUserData(Object.values(jsondata?.Users)))
      .catch((error) => console.error("error", error));
  };
  useEffect(() => {
    getdata();
    console.log(userdata);
  }, [userdata]);
  return (
    <>
      <h1 className="d-flex justify-content-center">GroupChat</h1>
      {userdata.map((user, index) => (
        <div key={index} className="d-flex justify-content-between p-4">
          <div>{user.groupName}</div>
          <div>{user.groupMembersNumber}</div>
          <div>{user.isActive}</div>
          <div>{user.GroupName}</div>
          <div>{user.NofParticipants}</div>
        </div>
      ))}
    </>
  );
};
export default TestApi;
