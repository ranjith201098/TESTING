import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrView } from 'react-icons/gr';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CSVLink} from "react-csv";
import axios from 'axios';
import { useState } from 'react';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xm"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
    >
       <div >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Employee details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{fontSize:"25px",textAlign:"left",textTransform:"uppercase"}} >  
           <>
           {props.data.map(vie_ws=>(
             <ol>
                 <li>{vie_ws.emp_name}</li>
                 <li>{vie_ws.emp_fname}</li>
                 <li>{vie_ws.emp_ph_no}</li>
                 <li>{vie_ws.emp_email}</li>
                 <li>{vie_ws.emp_age}</li>
                 <li>{vie_ws.emp_department}</li>
                 <li>{vie_ws.emp_designation}</li>
                 <li>{vie_ws.emp_technicalskill1}</li>
                 <li>{vie_ws.emp_technicalskill2}</li>
                 <li>{vie_ws.emp_gender}</li>
                 <li>{vie_ws.emp_address}</li>
             </ol>
              ))}
           </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
}
function Employeetable({Parentmethod_call_one,Trigger_the_button2}) {
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
  const [modalShow, setModalShow] = React.useState(false);
   const refprint = useRef()
    const _delete_alert=(id)=>{
      axios.post(`http://localhost:4000/delete/formdata/${id}`)
      .then(res=>{
        alert(res.data)
        window.location.reload()
      })
   }
   const Make_print = useReactToPrint({
    content: ()=>refprint.current,
    documentTitle:()=>'employee table'
   })
 const Makepdf =()=>{
  const doc = new jsPDF()
autoTable(doc, {
  styles: { fillColor: [150, 0, 0] },
  columnStyles: { 0: { halign: 'center' } }, // Cells in first column centered and green
  head: [['Name','fathername','phonenumber', 'Email', 'age','department','gender','desighnation','teachnical skill','address']],
  body: [
    ['David', 'palaniyappan', '6382588569','ranjithsurendar@gmail.com','25','softwaredevelopement','male','juniordeveloper','reactjs','kumaramangalam'],
  ],
}) 
doc.save('table.pdf')
 }
  //......get data from database...
        const[posts,setposts]=useState([])
        useEffect(() => {
          axios
            .get("http://localhost:4000/get/formdata")
            .then((result) => {
              console.log(result.data);
              setposts(result.data);
            })
            .catch((error) => console.log(error));
        }, []);
    //.............
    const [viewdata,setviewdata]=useState([])
      const Handleclickview =(id)=>{
       
         console.log(id)
         setModalShow(true)
         axios.get(`http://localhost:4000/view/formdata/${id}`).then(res=>{
         
          setviewdata(res.data)
         })
      }  
  return (
   <div style={{border:"0px solid red",height:"100%"}} ref={refprint} className='#my-table'>
    <div style={{margin:"10px",textAlign:"end"}}>
    <Button variant="warning" ><CSVLink data={csvData} style={{textDecoration:"none"}}>Excell</CSVLink></Button>{' '}
    <Button variant="danger" onClick={Makepdf}>pdt</Button>{' '}
    <Button variant="primary" onClick={Make_print} >print</Button>{' '}
    <Button variant="primary" style={{opacity:"0"}}>print</Button>{' '}
 <Button variant="primary" onClick={Trigger_the_button2}>Form</Button>{' '}
    </div>
         <Table style={{textAlign:"center",fontSize:"12px"}}>
      <thead >
        <tr >  
          <th>Sl NO</th>
          <th> Name</th>
          <th>Fathers Name</th>
          <th>Phone number</th>
          <th>Email Address</th>
          <th>Age</th>
          <th>Department</th>
          <th>gender</th>
          <th>Designation</th>
          <th>Technical sKILLS1</th>
          <th>Technical sKILLS2</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {
            posts.map(user=>(
        <tr>
          <td key={user.emp_id}>{user.emp_id}</td>
          <td>{user.emp_name}</td>
          <td>{user.emp_fname}</td>
          <td>{user.emp_ph_no}</td>
          <td>{user.emp_email}</td>
          <td>{user.emp_age}</td>
          <td>{user.emp_department}</td>
          <td>{user.emp_gender}</td>
          <td>{user.emp_designation}</td>
          <td>{user.emp_technicalskill1}</td>
          <td>{user.emp_technicalskill2}</td>
          <td>{user.emp_address}</td>
          <td> <Button variant="primary" onClick={() => { Parentmethod_call_one(user.emp_id); } } style={{ width: "50px" }}><LiaEdit /></Button>{' '}</td>
          <td> <Button variant="danger" onClick={()=>{_delete_alert(user.emp_id)}} style={{ width: "50px" }}><RiDeleteBin5Line /></Button>{' '}</td>
          <td> <Button variant="primary" onClick={() => Handleclickview(user.emp_id)} style={{ width: "50px", color: "white" }}><GrView /></Button>{' '}</td>
          </tr>
          )) 
        }
      </tbody>
       
    </Table>
       <div className='pagination' style={{display:"flex",justifyContent:"center"}}>
           <div>
           <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>

      
      <Pagination.Item>{7}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
           </div>
       </div>
          <div>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={viewdata}
      />
          </div>
    </div>
  )
}

export default Employeetable