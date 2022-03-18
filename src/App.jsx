import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const App = () => {

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(new Date().toString().split(" ").slice(0,5).join(" "))

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


    const handleUserName = (e) => {
        setUserName(e.target.value)

    };

    const handleMessage = (e) => {
        setMessage(e.target.value)

    };

    const handleTime = () => {
        setTime(new Date().toString().split(" ").slice(0,5).join(" "));

    }

    const handleTimelineData = (e) => {

        e.preventDefault();

        handleTime();
        console.log(time)

        setTimelineData([...timelineData, {
            username: userName,
            message: message,
            time: time

        }])
        setUserName('');
        setMessage('');
  

    }



    return (
        <>
            <form className="col-6">

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" value={userName} onChange={handleUserName} />
                </div>

                <div className="form-group">
                    <textarea className="form-control my-3" rows="3" placeholder="Your thoughts" value={message} onChange={handleMessage} ></textarea>
                </div>

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