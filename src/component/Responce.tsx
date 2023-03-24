import { useCallback, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Response.css";

const Response = () => {
  const [data, setData] = useState<any>([]);
  const [response, setResponse] = useState([]);
  // const [questions,setQuestions] = useState([]);

  useEffect(() => {  // Whenever there is change in DOM or any API request get exe 
    // use Effect wille get executed
    async function fetchPosts() {

      try {
        const response = await fetch('https://api.qa.gessa.io/cms/survey/641ab2d9e71ce2b287961b16', {
          method: 'GET',
          headers: {
            'x-tenant-id': '63f72c21f9dfbe6751b887b5'
          }
        });
        const resData = await response.json();
        console.log("resData", resData);
        await setData(resData);

        // console.log(createdAt);  
      } catch (err) {
        console.log("Error", err);
      }
    }
    async function fetchResponses  () {
      try {
        const response = await fetch('http://localhost:5000/response/form/641ab2d9e71ce2b287961b16', {
          method: 'GET',
          headers: {
            'x-tenant-id': '63f72c21f9dfbe6751b887b5',
            // 'content-type':'application/json'
          }
        });
        const resData = await response.json();
        setResponse(resData);
        // console.log("resData", resData);

        // console.log(createdAt);  
      } catch (err) {
        console.log("Error", err);
      }
    }
    fetchPosts();
    fetchResponses();
  }, [])

  // console.log("Response :", response);

  //variables for form
  const createdAt = data?.result?.createdAt?.slice(0, 10);
  const questionsCount = data?.result?.form?.length;
  const expiresOn = data?.result?.expiry;
  const status = data?.result?.draft;
  const surveyName = data?.result?.title;
//   const navigate = useNavigate();

  //variables for response
  const responseObjects = response;

  //useReducer
  function reducer(state:any, action:any) {
    if (action.type === 'click') {
      console.log(action.payload)
      return action.payload;

    }
  }
  const [state, dispatch] = useReducer(reducer, []);

  //get day , date ,Month  and year 
  const datetimeStr = "" + state.createdAt;
  // Create a Date object from the string
  const datetime = new Date(datetimeStr);

  // Define arrays for days of the week and months
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Extract day of the week, month, and date
  const dayOfWeek = weekdays[datetime.getUTCDay()];
  const month = months[datetime.getUTCMonth()];
  const date = datetime.getUTCDate();
  const year = datetime.getUTCFullYear();
  const time = datetime.getTime();


//   const onItem1TextClick = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onItem1Text1Click = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//edit-outline.svg"
//right-side-icon-onoff.svg
//lock-fill-1.svg
//right-side-icon-onoff1.svg

  return (
    <div className="task-19">
      <div className="sidenavigation1">
        <div className="navoption2">
          <img className="live-icon" alt="" src="/task.svg" />
        </div>
        <div className="navoption3">
          <img className="live-icon" alt="" src="/dashboard1.svg" />
        </div>
      </div>
      <div className="event-heading-creator-parent">
        <div className="event-heading-creator">
          <div className="event-heading-creator-inner">
            <div className="group-wrapper">
              <div className="group-wrapper">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <div className="buttonoutline-button-parent">
                  <div className="buttonoutline-button">
                    <div className="content6">
                      <img
                        className="edit-outline-icon"
                        alt=""
                        src="/edit-outline.svg"
                      />
                      <div className="name">Edit</div>
                      <img
                        className="right-side-icon-onoff"
                        alt=""
                        src="/right-side-icon-onoff.svg"
                      />
                    </div>
                  </div>
                  <div className="lock-fill-1-parent">
                    <img className="png-1-icon" alt="" src="/lock-fill-1.svg" />
                    <div className="input-parent">
                      <b className="input1">Public</b>
                      <div className="label79">Access</div>
                    </div>
                  </div>
                </div>
                <div className="buttonoutline-button-group">
                  <div className="buttonoutline-button">
                    <div className="content7">
                      <img
                        className="dot-icon"
                        alt=""
                        src="/edit-outline1.svg"
                      />
                      <img
                        className="right-side-icon-onoff"
                        alt=""
                        src="/right-side-icon-onoff1.svg"
                      />
                    </div>
                  </div>
                  <div className="px-check-parent">
                    <img className="px-check" alt="" src="/24px--check.svg" />
                    <div className="input-group">
                      <b className="input1">Upcoming</b>
                      <div className="label80">Status</div>
                    </div>
                  </div>
                </div>
                <div className="label-parent">
                  <div className="accepting-responses">Survey Name</div>
                  <div className="h1-medium">{surveyName}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-container">
            <div className="input-container">
              <div className="input3">2020-01-27 â¢ 01 : 30 PM</div>
              <div className="last-name">Start on</div>
            </div>
            <img className="group-child" alt="" src="/group-7026.svg" />
          </div>
          <div className="event-heading-creator-child">
            <div className="group-frame">
              <div className="group-frame">
                <div className="input-parent1">
                  <div className="input3">Jack Matthew</div>
                  <div className="last-name">Created By</div>
                </div>
                <img className="group-item" alt="" src="/group-7022.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="group-wrapper1">
              <div className="group-parent2">
                <div className="input-parent2">
                  <div className="input3">{createdAt}</div>
                  <div className="last-name">Created On</div>
                </div>
                <img className="group-item" alt="" src="/group-7020.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent3">
                <div className="input-parent3">
                  <div className="input3">{questionsCount}</div>
                  <div className="last-name">Survey Questions</div>
                </div>
                <img className="group-item" alt="" src="/group-70201.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent4">
                <div className="input-parent4">
                  <div className="input3">{responseObjects.length}</div>
                  <div className="last-name">Total Responses</div>
                </div>
                <img className="group-item" alt="" src="/group-7024.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent2">
                <div className="input-parent2">
                  <div className="input3">{expiresOn}</div>
                  <div className="last-name">Expires On</div>
                </div>
                <img className="group-item" alt="" src="/group-70202.svg" />
              </div>
            </div>
            <div className="live-parent">
              <img className="live-icon" alt="" src="/live.svg" />
              <div className="input-parent8">
                <b className="input1">{status ? "Draft" : "Active"}</b>
                <div className="label79">Status</div>
              </div>
            </div>
          </div>
          <div className="event-heading-creator-item" />
        </div>
        <div className="top-departments-container">
          <div className="top-departments1">
            <div className="modal-header">
              <div className="bg2" />
              <div className="modal-header-child" />
              <b className="title">Individual Responses</b>
              <img
                className="iconsarrow-back"
                alt=""
                src="/iconsarrow-back.svg"
              />
              <img className="openinnew-icon" alt="" src="/openinnew.svg" />
            </div>

            <div className="frame-parent67">
              <div className="frame-parent68">
                <div className="frame-parent69">
                  <div className="frame-wrapper2">
                    <div className="property-1rafiq-parent">
                      <div className="property-1rafiq">
                        <div className="add" />
                        <div className="frame-parent73">
                          <div className="group-tile-parent">
                            {
                              responseObjects?.map((item:any) => (
                                <div key={item.__id} className="group-tile" onClick={() => dispatch({ type: 'click', payload: item })}>
                                  <img
                                    className="group-tile-child"
                                    alt=""
                                    src="/ellipse-597@2x.png"
                                  />
                                  <div className="name">{item.email}</div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                        <div className="add" />
                      </div>

                      <div className="frame-child41" />
                      <div className="model-header-parent">
                        <div className="model-header2">
                          <div className="response-details-parent">
                            <b className="displaying-5-of">Response Details</b>
                            <div className="label139">Add New</div>
                            <div className="chevron-right-parent">
                              <img
                                className="edit-outline-icon"
                                alt=""
                                src="/chevron-right1.svg"
                              />
                              <img
                                className="edit-outline-icon"
                                alt=""
                                src="/chevron-right4.svg"
                              />
                            </div>
                          </div>
                          <div className="model-header-child" />
                        </div>
                        <div className="model-department-manager">
                          <div className="model-header3">
                            <div className="tab-data-item" />
                          </div>
                          <div className="bottom-divider-onoff-group">
                            <div className="bottom-divider-onoff" />
                            <div className="bottom-divider-onoff10" />
                            <div className="bottom-divider-onoff10" />
                            <div className="bottom-divider-onoff10" />
                            <div className="bottom-divider-onoff10" />
                            <div className="frame-parent88">
                              <div className="frame-parent89">
                                <div className="frame-parent90">
                                  <div className="frame-parent91">
                                    <div className="frame-parent38">
                                      <div className="table-data12">
                                        <img
                                          className="table-data-child"
                                          alt=""
                                          src="/ellipse-1@2x.png"
                                        />
                                        <div className="name-parent">
                                          <div className="name">
                                            <span className="started-on">
                                              Submitted On
                                            </span>
                                            <b> :</b>
                                            {dayOfWeek},{month} {date} ,{year}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent94">
                                  <div className="frame-parent91">
                                    <div className="frame-parent38">
                                      <div className="table-data12">
                                        <div className="name-parent">
                                          <div className="name">
                                            <b>{`Collector :`}</b>
                                            <span>Web Link</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff10" />
                          </div>
                          <div className="frame-parent98">
                            <div className="bottom-divider-onoff-parent">
                              <div className="bottom-divider-onoff10" />

                              {
                                state.response?.map((item:any, index:any) => (
                                  <div key={index} className="frame-parent99">
                                    <div className="frame-parent79">
                                      <div className="frame-parent38">
                                        <div className="rank-parent">
                                          <div className="rank">Rank</div>
                                          <div className="div7">1</div>
                                        </div>
                                        <div className="table-data12">
                                          <img
                                            className="table-data-child"
                                            alt=""
                                            src="/ellipse-1@2x.png"
                                          />
                                          <div className="name-parent">
                                            <div className="name10">Q{index + 1}. {item.question}
                                              <div className="name-wrapper">
                                                <div  className="rank">
                                                  <span>
                                                    <div className="rank">
                                                      {item.answer}
                                                    </div>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }

                              <div className="bottom-divider-onoff" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff10" />
              </div>
              <div className="image-3-wrapper">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              </div>
            </div>
            <img
              className="download-outline-icon2"
              alt=""
              src="/download-outline1.svg"
            />
          </div>
        </div>
      </div>
      <div className="topnavigation1">
        <div className="lhs1">
          <img className="logo-icon1" alt="" src="/logo.svg" />
          <div className="breadcrumb3">
            <div className="rank">Dashboard</div>
            <img
              className="px-drag"
              alt=""
              src="/iconschevron-right-black-24dp2.svg"
            />
            <div className="time-utilized">...</div>
            <img
              className="input-child"
              alt=""
              src="/iconschevron-right-black-24dp3.svg"
            />
            <div className="item-31">View Details</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Response;
