import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const App = () => {
//Declare the useState() to update three datas; userName, message , time
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(new Date().toString().split(" ").slice(0,5).join(" "))

// Add one more useState() to hold  three updated  datas in an array named timeLineData
    const [timelineData, setTimelineData] = useState([
        {
            username: "Ms. Angela",
            message: "Spring class picture on March, 24",
            time : time
        },
        {
            username: "Ms. Haynes",
            message: "Yay! Field trip to Jurassic Park on May , 1",
            time : time
        }
    ])

// Create a function to collect new username value
    const handleUserName = (e) => {
        setUserName(e.target.value)

    };
// Create a function to collect new message value
    const handleMessage = (e) => {
        setMessage(e.target.value)

    };
// Create a function to update time value
    const handleTime = () => {
        setTime(new Date().toString().split(" ").slice(0,5).join(" "));

    }

// Create a function to add three updated values into an array 
    const handleTimelineData = (e) => {

        e.preventDefault();// It helps to retain the currently updated value

//handleTime function will be fired to update the time
        handleTime();
     
// Three updated data will be pushed into the timelineData array
        setTimelineData([...timelineData, {
            username: userName,
            message: message,
            time: time

        }])
// Refresh username and message
        setUserName('');
        setMessage('');
  

    }



    return (
        <>
            <form className="col-6">

                <div className="form-group">
                    {/* handleUserName function is attached to the text input */}
                    <input type="text" className="form-control" placeholder="Username" value={userName} onChange={handleUserName} />
                </div>

                <div className="form-group">
                    {/* handleMessage function is attached to the textarea */}
                    <textarea className="form-control my-3" rows="3" placeholder="Your thoughts" value={message} onChange={handleMessage} ></textarea>
                </div>
                    {/* handleTimelineData function is attached to the button element */}
                <button type="button" className="btn btn-outline-primary my-3" onClick={handleTimelineData}> chirp it!</button>

            </form>

            <div className="container">
                {timelineData.map((data) => {
                    return <div className="card  col-6 my-3" >
                        <div className="card-body">
                            <h5 className="card-title">{data.username}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{data.time}</h6>
                            <p className="card-text">{data.message}</p>

                        </div>
                    </div>
                })}
            </div>

        </>


    );
};

export default App;