
import { useState } from "react"
import React, { useEffect } from 'react'
import './jsondata.css'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { CSVLink} from "react-csv";
import { useReactToPrint } from 'react-to-print';
import copy from 'copy-to-clipboard';
import DataTable from 'react-data-table-component'
import { useRef } from 'react'
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered >
       <div >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Employee details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{fontSize:"15px",textAlign:"left",textTransform:"uppercase",color:"blue"}} > 
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
    function Jsondata({Editfunction}){    
      const [modalShow, setModalShow] = React.useState(false);
      /*  const url = "http://192.168.1.21:90/employee_information/emp_details/index.php"; */
/*    const url = "http://localhost:81/employee_information/emp_details/"; */
   const url = "http://localhost:4000/get/formdata";
        const [data, setData] = useState([]);
          const FetchInfo = () => { 
      return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d))
        
      
      }
         useEffect(() => {   
        FetchInfo();
       
      }, []);
//.........................................................
        const Expot_json_api =()=>{
      const doc = new jsPDF()
        let info=[]
        data.forEach((element)=>{
          info.push([element.emp_id,element.emp_name,element.emp_fname,element.emp_ph_no,element.emp_email,element.emp_age,element.emp_department,element.emp_gender,element.emp_designation,element.emp_technicalskill1,element.emp_technicalskill2,element.emp_address])
        })
        autoTable(doc, {
          theme: 'grid',
          // Cells in first column centered and green
          head: [['slomo','name','fathername', 'mobile no','email','age','department','gender','desighnation','technical skill1','technical skill2','address']],
          body: info  
        }) 
                        doc.save('table.pdf')
              }
              const tableref = useRef()
              const Export_json_print = useReactToPrint({
               
                content: ()=>tableref.current,
                documentTitle:()=>'json table'
               })
               const copy_clipboard=()=>{
                let info=[]
                data.forEach((element)=>{
                  info.push([element.emp_id,element.emp_name,element.emp_fname,element.emp_ph_no,element.emp_email,element.emp_age,element.emp_department,element.emp_gender,element.emp_designation,element.emp_technicalskill1,element.emp_technicalskill2,element.emp_address])
          copy(info)
        })       
      }
         //...........datatable
         const delete_json = useRef(0)
         const Delete_json_data =(props)=>{
          axios.post(`http://localhost:4000/delete/formdata/${props}`).then(res=>{
         
          alert(res.data)
          window.location.reload()
         })

         }
         const [viewdata,setviewdata]=useState([])
         const View_json_data  =(id)=>{
          setModalShow(true)
              axios.get(`http://localhost:4000/view/formdata/${id}`).then(res=>{
         
              console.log(res.data)
              setviewdata(res.data)
             })
         }
         const Column =[
          {
            name:'id',
            cell: (row, index) => index +1,
            sortable:true
          },{
            name:'name',
            selector:row=> row.emp_name,
            sortable:true
          },{
            name:'fathername',
            selector:row=> row.emp_fname,
            sortable:true
          }
          ,{
            name:'phone number',
            selector:row=> row.emp_ph_no,
            sortable:true
          }
          ,{
            name:'email',
            selector:row=> row.emp_email,
            sortable:true
          }
          ,{
            name:'age',
            selector:row=> row.emp_age,
            sortable:true
          }
          ,{
            name:'department',
            selector:row=> row.emp_department,
            sortable:true
          }
          ,{
            name:'gender',
            selector:row=> row.emp_gender,
            sortable:true
          }
          ,{
            name:'designation',
            selector:row=> row.emp_designation,
            sortable:true
          }
          ,{
            name:'technical skill1',
            selector:row=> row.emp_technicalskill1,
            sortable:true
          }
          ,{
            name:'technical skill2',
            selector:row=> row.emp_technicalskill2,
            sortable:true
          }
          ,{
            name:'address',
            selector:row=> row.emp_address,
            sortable:true
          }
          ,{
            name:'action',
             cell:(row)=><button onClick={()=>{Editfunction(row.emp_id, row.emp_name, row.emp_fname, row.emp_ph_no ,row.emp_email,
              row.emp_age,
              row.emp_address,
              )}}>edit</button>
         
          },{
             cell:(row)=><button onClick={()=>{Delete_json_data(row.emp_id)}}>delete</button>
          },{
            cell:(row)=><button onClick={()=>{View_json_data(row.emp_id)}}>view</button>
         }
         ]
         //................view
     
         //.....filters
         const [record,setrecords]=useState([data]);

const Handlefilter=(event)=>{
   const newdata =data.filter(row=>{
      return row.emp_name.toLowerCase ().includes(event.target.value.toLowerCase())
   })
   setrecords(newdata)
 
}

      return (
                <div>
          <button onClick={Expot_json_api} style={{backgroundColor:"orange",margin:"20px",color:"red",width:"70px"}}> pdf</button>
          <button style={{backgroundColor:"blue",width:"70px",color:"white"}}><CSVLink data={data} style={{textDecoration:"none"}}>Excell</CSVLink></button>{' '}
          <button style={{backgroundColor:"green",width:"70px",color:"yellow"}} onClick={Export_json_print}>print</button>{' '}
          <button style={{backgroundColor:"black",width:"70px",color:"white"}} onClick={()=>{copy_clipboard()}} > clipboard</button>{' '}
        
         <input 
            placeholder='search'
             onChange={Handlefilter}
              
         />
          <div ref={tableref}> 
        <><DataTable
             ref={delete_json}
              bordered
              small
              data={record}
              columns={Column}
              pagination 
              highlightOnHover
              fixedHeader
              fixedHeaderScrollHeight="500px"
              width={40}
              /></>
             
</div>
<div>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={viewdata}
      />
          </div>
  </div>
      );
    }
export default Jsondata;