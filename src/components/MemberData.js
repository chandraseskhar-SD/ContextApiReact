import "./MemberData.css";
const MemberData = () => {
  const member_array = [
    {
      imageurll: require("../Assets/ocean.png"),
      first_name: "You",
      msg: "Admin",
      image: require("../Assets/chevron-left.png"),
    },
    {
      imageurll: require("../Assets/sportsman.png"),
      first_name: "Mat",
      msg: "Admin",
      image: require("../Assets/chevron-left.png"),
    },
    {
      imageurll: require("../Assets/to-walk-g1cd47a695_640 2.png"),
      first_name: "Sid",
      image: require("../Assets/chevron-left.png"),
    },
    {
      imageurll: require("../Assets/women.png"),
      first_name: "Zen",
      image: require("../Assets/chevron-left.png"),
    },
  ];
  return (
    <>
      {member_array.map((item, index) => (
        <div key={index}>
          <div className="container  d-flex justify-content-between mt-2">
            <div>
              <img src={item.imageurll} />
            </div>
            <div className="memberdata-name-msg">
              <h5>{item.first_name}</h5>
              <p className="memberdata-admin">{item.msg}</p>
            </div>
            <div>
              <img src={item.image} className="memberdata-chevronimage" />
            </div>
          </div>
          <hr className="memberdata-border d-flex justify-content-center"></hr>
        </div>
      ))}
    </>
  );
};
export default MemberData;
