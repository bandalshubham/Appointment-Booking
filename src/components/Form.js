import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  var d = new Date();
  let showdate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

  const [Title, setTitle] = useState("");
  const [AppointmentDate, setAppointmentDate] = useState("");
  const [AppointmentTime, setAppointmentTime] = useState();
  const [AppointmentChannel, setAppointmentChannel] = useState();
  const [Address, setAddress] = useState("");
  const [BookedDate, setBookedDate] = useState(showdate);
  const [UserId, setUserId] = useState("810459219");
  const [ClinicId, setClinicId] = useState("122990548");
  const [DoctorId, setDoctorId] = useState("45346070");

  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [Pincode, setPincode] = useState("");
  const [AppointmentType, setAppointmentType] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const [Patient_BP, setPatient_BP] = useState("");
  const [Patient_Plus, setPatient_Plus] = useState("");
  const [Patient_SPO2, setPatient_SPO2] = useState("");
  const [Patient_Temp, setPatient_Temp] = useState("");
  const [Patient_Weight, setPatient_Weight] = useState("");
  const [Patient_Height, setPatient_Height] = useState("");
  const [ShortNote, setShortNote] = useState("");
  const [PrescriptionNote, setPrescriptionNote] = useState("");

  function saveUser() {
    let data = {
      UserId,
      ClinicId,
      DoctorId,
      Title,
      AppointmentDate,
      AppointmentTime,
      AppointmentStatus,
      AppointmentChannel,
      AppointmentType,
      FirstName,
      LastName,
      BookedDate,
      city,
      state,
      Pincode,
      country,
      Patient_BP,
      Patient_Plus,
      Patient_SPO2,
      Patient_Temp,
      Patient_Weight,
      Patient_Height,
      ShortNote,
      PrescriptionNote,
    };

    var AppointmentStatus = "active";

    var AppointmentChannel = "yes";
    data["AppointmentChannel"] = AppointmentChannel;
    // data['UserId']=UserId;
    // data['ClinicId']=ClinicId;
    // data['DoctorId']=DoctorId;
    data["AppointmentStatus"] = AppointmentStatus;

    console.log(data);
    fetch("http://13.233.217.107:8080/api/AddAppointment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log("result", result);
      })
      .catch((res) => {
        res.json();
        console.log(res);
      });
  }

  return (
    <>
      <div class="flex-container">
        <span className="textname">shubham bandal</span>
        <img src="./img/shubhu.jpg" alt="Avatar" className="picture" />
      </div>

      <div class="container-fluid border-top border-3">
        <div className="d-inline-flex flex-column p-5 bg-secondary text-white icons">
          <div className="icons1">
            <div>
              {" "}
              <i className="fas fa-user-check"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-desktop"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-address-book"></i>
            </div>
            <div>
              {" "}
              <i className="fas fa-user-check"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-home"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-desktop"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-clone"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-credit-card"></i>
            </div>
            <div>
              {" "}
              <i className="fa fa-clone"></i>
            </div>
          </div>
        </div>
      </div>
      <h3 class="header">Book Appointment</h3>
      <div className="container">
        <div class="main">
          <div class="row">
            {/* Left Section starts here  */}
            <section class="leftsec col-4 col-md-4 col-lg-4">
              <h3>Details</h3>
              <form>
                <div class="form-group">
                  <span className="title1">Title</span>

                  <form>
                    <label for="birthdaytime"></label>
                    <input
                      type="text"
                      className="Title"
                      value={Title}
                      name="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </form>
                </div>

                <span className="date2">AppointmentDate</span>

                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Date"
                    className="date1"
                    value={AppointmentDate}
                    name="Address"
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </form>
                <span className="aptime">AppointmentTime</span>

                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Time"
                    className="aptime1"
                    value={AppointmentTime}
                    name="AppointmentTime"
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </form>
                <span className="user1">UserId</span>

                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="userid"
                    value={UserId}
                    name="UserId"
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </form>
                <span className="doctor2">DoctorId</span>

                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="doctori"
                    value={DoctorId}
                    name="DoctorId"
                    onChange={(e) => setDoctorId(e.target.value)}
                  />
                </form>
                <span className="clinic1">ClinicId</span>

                <form>
                  <label for="birthdaytime"></label>
                  <input
                    type="Number"
                    className="clinicid"
                    value={ClinicId}
                    name="ClinicId"
                    onChange={(e) => setClinicId(e.target.value)}
                  />
                </form>
              </form>
            </section>

            {/* Right Section starts here  */}

            <section class="rightsec col-4 col-md-4 col-lg-4">
              <div className="appoint">
                <h3>Appointment Details</h3>
                <div class="row">
                  <div class="col-3 col-md-3 col-lg-6">
                    <p className="first">FirstName</p>
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <input
                      type="text"
                      value={FirstName}
                      name="FirstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <p className="lastname1">LastName</p>
                  </div>
                  <div class="col-3 col-md-3 col-lg-6">
                    <input
                      type="text"
                      value={LastName}
                      name="LastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 col-md-6 colp-lg-6">
                    <p className="chanel">AppointmentChannel-Walk In</p>
                  </div>
                  <div class="col-6 col-md-6 colp-lg-6">
                    <label class="switch">
                      <input
                        type="checkbox"
                        value={AppointmentChannel}
                        name="LastName"
                        onChange={(e) => setAppointmentChannel(e.target.value)}
                      />
                      <span class="slider round p-1">yes</span>
                    </label>
                  </div>
                  <div class="schedule">
                    <span className="book2">BookedDate</span>

                    <form>
                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="time10"
                        value={BookedDate}
                        name="CurrentDate"
                        onChange={(e) => setBookedDate(e.target.value)}
                      />
                    </form>
                    <span className="addres">Address</span>

                    {/* <form>
                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="time3"
                        value={Address}
                        name="Address"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <span className="country1">Country</span>
                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="country2"
                        value={country}
                        name="state"
                        onChange={(e) => setcountry(e.target.value)}
                      />
                    </form> */}
                    <span className="city1">City</span>

                    <form>
                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="time4"
                        value={city}
                        name="city"
                        onChange={(e) => setcity(e.target.value)}
                      />

                      <span className="state1">State</span>
                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="time5"
                        value={state}
                        name="state"
                        onChange={(e) => setstate(e.target.value)}
                      />

                      <span className="state2">Pincode</span>

                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="time6"
                        value={Pincode}
                        name="Pincode"
                        onChange={(e) => setPincode(e.target.value)}
                      />
                      <span className="state10">AppointmentType</span>

                      <label for="birthdaytime"></label>
                      <input
                        type="text"
                        className="appointype1"
                        value={AppointmentType}
                        name="AppointmentType"
                        onChange={(e) => setAppointmentType(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="row">
            <div className="col-lg-12 col-12 col-md-12">
              <h4>vital information</h4>
              <div className="row">
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      Blood pressure
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_BP}
                        name="Patient_BP"
                        onChange={(e) => setPatient_BP(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      Height
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_Height}
                        name="Patient_Height"
                        onChange={(e) => setPatient_Height(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      SPo2
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_SPO2}
                        name="Patient_SPO2"
                        onChange={(e) => setPatient_SPO2(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      Temp
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_Temp}
                        name="Patient_Temp"
                        onChange={(e) => setPatient_Temp(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      Weight
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_Weight}
                        name="Patient_Weight"
                        onChange={(e) => setPatient_Weight(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-2">
                  <div class="input-group p-3">
                    <span class="input-group-text">
                      Pulse Rate
                      <input
                        type="text"
                        class="form-control3 news-input"
                        value={Patient_Plus}
                        name="Patient_Plus"
                        onChange={(e) => setPatient_Plus(e.target.value)}
                        placeholder=""
                      />
                    </span>
                  </div>
                </div>
                <div className="row col-sm-12">
                  <div className="col-sm-5 mr-sm-1 mb-2">
                    <textarea
                      className="form-control"
                      value={ShortNote}
                      name="ShortNote"
                      onChange={(e) => setShortNote(e.target.value)}
                      rows="3"
                      placeholder={" Short Note"}
                    ></textarea>
                  </div>
                  <div className="col-sm-5 mr-sm-1 mb-2">
                    <textarea
                      className="form-control"
                      value={PrescriptionNote}
                      name="PrescriptionNote"
                      onChange={(e) => setPrescriptionNote(e.target.value)}
                      rows="3"
                      placeholder={"	PrescriptionNote"}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 mb-2"></div>
                  <div className="col-sm-4"></div>
                </div>
                <div class="buttons1">
                  <button
                    to="/register"
                    onClick={saveUser}
                    type="button"
                    class="btn2 btn-primary"
                  >
                    Book
                  </button>

                  <button type="button" class="btn3 btn-primary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p class="footer">POWERED BY RAJYUG IT SOLUTIONS PVT LTD</p>
      </footer>
    </>
  );
};
export default Form;
