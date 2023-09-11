import TimeFunction from './TimeFunction';
import Styles from './data.css';
import query from './GroupChat'
import SpecificGapChat from './SpecificGapChat';
import { useNavigate } from 'react-router-dom';
const TestData = ()=>{
  const navigate = useNavigate();
    const array =[
      {
        id:1,
        imageurl: require('../Assets/young.png'),
        name: 'Farm jam',
        unreadmessage: '2',
        message:'lets meet tomm!!',
        time: '11:54 AM'
      },
      {
        id:2,
        imageurl: require('../Assets/people.png'),
        name: 'Trio',
        unreadmessage: '3',
        message: 'I lost my charger:/',
        time: '11:52 AM'
      },
      {
        id: 3,
        imageurl: require('../Assets/code-g6d4020df3_640 1.png'),
        name: 'Official Cs',
        unreadmessage: '1',
        message: 'but where is the error?!',
        time: '11:00 AM'
      },
      {
        id:4,
        imageurl: require('../Assets/people-g41b18db31_640 1.png'),
        name: 'Yoga Classes',
        unreadmessage: '1',
        message: 'Class will remain off tomm..',
        time: '10:55 AM'
      },
      {
        id:5,
        imageurl: require('../Assets/people-g41b18db31_640 1.png'),
        name: 'Yoga Classes',
        unreadmessage: '1',
        message: 'Class will remain off tomm..',
        time: '10:55 AM'
      }
    ]
    return(
      <div> 
      {
        array.map((item,index)=>(
          <div key={index}>
            <div className="container d-flex flex-row">
              <img src={item.imageurl} alt="response6" className='profile '/>
              <div className='d-flex flex-column pl-2'>
                <div className="profile-name d-flex flex-row ">
                  <h5 className='user-name'>{item.name}</h5>
                  <p className='time-end'>{item.time}</p>
                </div>
                <div className="message-user d-flex flex-row justify-content-between">
                  <p className='message'>{item.message}</p>
                  <div className='unreadmessage'>{item.unreadmessage}</div>
                </div>
              </div>
            </div>
            <hr className='testdata-border'/>
          </div>
        ))
      }
      </div>
    )
}
export default TestData;