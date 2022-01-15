import React, { useState }  from 'react';

import "./Form.css";

const Form=()=>{
  
 const[Title ,setTitle]=useState("");
 const[AppointmentTime,setAppointmentTime]=useState("");
 const[AppointmentType,setAppointmentType]=useState("");
 const[Appointmentdoctor,setAppointmentdoctor]=useState("");
 const[Patient_BP,setPatient_BP]=useState("");
 const[Patient_Plus,setPatient_Plus]=useState("");
 const[Patient_SPO2,setPatient_SPO2]=useState("");
 const[Patient_Temp,setPatient_Temp]=useState("");
 const[Patient_Weight,setPatient_Weight]=useState("");
 const[Patient_Height,setPatient_Height]=useState("");
 const[ShortNote,setShortNote]=useState("");
 const[PrescriptionNote,setPrescriptionNote]=useState("");
 
 


 function saveUser(){
  
  
   let data={Title,AppointmentTime,AppointmentType,Patient_BP,Patient_Plus,Patient_SPO2,Patient_Temp,
    Patient_Weight,Patient_Height,ShortNote,PrescriptionNote}
    var UserId=810459219;
    var DoctorId=45346070;
    var ClinicId=122990548;
    var FirstName="jhon";
    var LastName="wick";
    var date=Date.now()
    var AppointmentChannel="walk-in";

    
    var AppointmentStatus="pending";
    data["AppointmentChannel"]=AppointmentChannel;
    data['FirstName']=FirstName;
    data['LastName']=LastName;
    data["AppointmentStatus"]=AppointmentStatus;
    data["AppointmentDate"]=date;
    data["UserId"]=UserId;
    data["DoctorId"]=DoctorId;
    data["ClinicId"]=ClinicId;
    
   
console.log(data);
   fetch("http://13.233.217.107:8080/api/AddAppointment",{
   method:"POST",
   headers:{
    
    
     'Accept':'application/json',
     'Content-Type':'application/json'

   },
  body:JSON.stringify(data)

  }).then((result)=>{
    console.log("result",result);
  })
 }
  
  

    return(
        <>
       <div class="flex-container">
       <span className='textname'>shubham bandal</span>
        <img src="./img/shubhu.jpg" alt="Avatar" className='picture'/>
        </div>
        
      <div class="container-fluid border-top border-3">
          <div className="d-inline-flex flex-column p-5 bg-secondary text-white icons">
            <div className='icons1'>
                <div> <i className='fas fa-user-check'></i></div>
  <div> <i className='fa fa-desktop'></i></div>
  <div> <i className='fa fa-address-book'></i></div>
  <div> <i className='fas fa-user-check'></i></div>
  <div> <i className='fa fa-home'></i></div>
  <div> <i className='fa fa-desktop'></i></div>
  <div> <i className='fa fa-clone'></i></div>
  <div> <i className='fa fa-credit-card'></i></div>
  <div> <i className='fa fa-clone'></i></div>
   </div>
</div>
</div>
      <h3 class="header">Book Appointment</h3>
      <div className='container'>
        <div class="main">
          <div class="row">

         {/* Left Section starts here  */}
            <section class="leftsec col-4 col-md-4 col-lg-4">
              <h3>Details</h3>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1"></label>
                  <input
                    type="text"
                    class="form-control" value={Title} name='Title' onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Appointment Title"
                  />
                </div>

                <div class="dropdown p-3">
                  <button
                    type="button"
                    className="form-control1 dropdown-toggle border"
                    data-bs-toggle="dropdown"
                  >
                    Appointment Channel
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>

                <select name="cars" id="cars" className='doctorid'>
    <option value={Appointmentdoctor} name='Appointmentdoctor' onChange={(e)=>setAppointmentdoctor(e.target.value)}>dr peter parek</option>
    <option value={Appointmentdoctor} name='Appointmentdoctor' onChange={(e)=>setAppointmentdoctor(e.target.value)}>dr william</option>
    <option value={Appointmentdoctor} name='Appointmentdoctor' onChange={(e)=>setAppointmentdoctor(e.target.value)}>dr sethi dil</option>
    <option value={Appointmentdoctor} name='Appointmentdoctor' onChange={(e)=>setAppointmentdoctor(e.target.value)}>dr markus stonics</option>
  
  </select>
              </form>
            </section>

         {/* Right Section starts here  */}

             <section class="rightsec col-4 col-md-4 col-lg-4">
              <div className='appoint'>
                <h3>Appointment Details</h3>
                <div class="row">
                  <div class="col-6 col-md-3 col-lg-6">
                    <p>John Wick</p>
                  </div>
                  <div class="col-6 col-md-3 col-lg-6">
                    <p>810459219</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 col-md-6 colp-lg-6">
                    <p>Walk-in Appointment</p>
                  </div>
                  <div class="col-6 col-md-6 colp-lg-6">
                  <label class="switch">
                      <input type="checkbox"/>
                      <span class="slider round p-1">yes</span>
                    </label>
                  </div>
                  <div class="schedule">
                    <span>Schedule</span>
                  
                  
                    
       <form>
           <label for="birthdaytime"></label>
           <input type="datetime-local" className='time1' value={AppointmentTime} name='AppointmentTime' onChange={(e)=>setAppointmentTime(e.target.value)}  />
         

             </form>
                  </div>
                  
    <input value={AppointmentType} placeholder='Appointment Type' className='appointype' name='AppointmentType' onChange={(e)=>setAppointmentType(e.target.value)}/>
    
  
  
                </div>

              </div>

            </section>

          </div> 
          <div className='row'>
            <div className='col-lg-12 col-12 col-md-12'>
              <h4>vital information</h4>
              <div className='row'>
                <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text">Blood pressure
    <input type="text" class="form-control3 news-input"  value={Patient_BP} name='Patient_BP' onChange={(e)=>setPatient_BP(e.target.value)}     placeholder=""/></span>
   
      
    </div>
  </div>
  <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text">Height
    <input type="text" class="form-control3 news-input"  value={Patient_Height} name='Patient_Height' onChange={(e)=>setPatient_Height(e.target.value)}   placeholder=""/></span>
   
      
    </div>
  </div>
  <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text">SPo2
    <input type="text" class="form-control3 news-input"  value={Patient_SPO2} name='Patient_SPO2' onChange={(e)=>setPatient_SPO2(e.target.value)}  placeholder=""/></span>
   
      
    </div>
  </div>
  <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text">Temp
    <input type="text" class="form-control3 news-input"  value={Patient_Temp} name='Patient_Temp' onChange={(e)=>setPatient_Temp(e.target.value)}   placeholder=""/></span>
   
      
    </div>
  </div>
  <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text" >Weight
    <input type="text" class="form-control3 news-input" value={Patient_Weight} name='Patient_Weight' onChange={(e)=>setPatient_Weight(e.target.value)}  placeholder="" /></span>
   
      
    </div>
  </div>
  <div className='col-lg-2 col-2'>
              
              <div class="input-group p-3">
          <span class="input-group-text">Pulse Rate
    <input type="text" class="form-control3 news-input" value={Patient_Plus} name='Patient_Plus' onChange={(e)=>setPatient_Plus(e.target.value)}   placeholder=""/></span>
   
      
    </div>
  </div>
  <div className="row col-sm-12">
              <div className="col-sm-5 mr-sm-1 mb-2">
                <textarea className="form-control"  value={	ShortNote} name='ShortNote' onChange={(e)=>setShortNote(e.target.value)}  rows="3" placeholder={' Short Note'} ></textarea>
               
              </div>
              <div className="col-sm-5 mr-sm-1 mb-2">
                <textarea className="form-control"  value={PrescriptionNote} name='PrescriptionNote' onChange={(e)=>setPrescriptionNote(e.target.value)} rows="3" placeholder={'	PrescriptionNote'} ></textarea>
               
              </div>
            </div>
        <div className="row">
          <div className="col-sm-5 mb-2">
          </div>
          <div className="col-sm-4">
          </div>
      </div>
          <div class="buttons1">
            <button to="/register" onClick={saveUser} type="button" class="btn2 btn-primary">
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
    }
    export default Form;
