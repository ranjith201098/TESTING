import React from 'react'
import DataTable from 'react-data-table-component';
import { useEffect } from 'react';
import { useState } from 'react';
function Tablepagination(){      
  const url = "http://192.168.1.21:90/employee_information/emp_details/index.php";
  const [datas, setDatas] = useState([]);
  const FetchInfo = () => { 
  return fetch(url)
      .then((res) => res.json())
      .then((das) => setDatas(das))
  }
     useEffect(() => {    
    FetchInfo();
  }, []);
          //...........datatable
         const columns =[
          {
            name:'id',
            selector:row=> row.emp_id,
            sortable:true,
            style:{
              fontsize:"40px"
            }
          },{
            name:'name',
            selector:row=> row.emp_name,
            sortable:true
          },{
            name:'fathername',
            selector:row=> row.emp_fname,
            sortable:true,
             style:{
              fontsize:"20px"
            }
          }
          ,{
            name:'phone nmber',
            selector:row=> row.emp_ph_no,
            sortable:true
          }
          ,{
            name:'email',
            selector:row=> row.emp_email,
            sortable:true,
             style:{
              fontsize:"20px"
            }
          }
          ,{
            name:'age',
            selector:row=> row.emp_age,
            sortable:true
          }
          ,{
            name:'department',
            selector:row=> row.emp_department,
            sortable:true,
             style:{
              fontsize:"20px"
            }
          }
          ,{
            name:'gender',
            selector:row=> row.emp_gender,
            sortable:true
          }
          ,{
            name:'designation',
            selector:row=> row.emp_designation,
            sortable:true,
             style:{
              fontsize:"20px"
            }
          }
          ,{
            name:'technicalskill1',
            selector:row=> row.emp_technicalskill1,
            sortable:true
          }
          ,{
            name:'technicalskill2',
            selector:row=> row.emp_technicalskill2,
            sortable:true,
             style:{
              fontsize:"20px"
            }
          }
          ,{
            name:'address',
            selector:row=> row.emp_address,
            sortable:true
          }
         ]
         //  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
    rows: {
        style: {
            minHeight: '40px',
            width:"100%" ,// override the row height,
        },},
   columns:{
    style:{
       fontsize:"40px"
    }
   }
}       
//.....filters
const [record,setrecords]=useState(datas)
  const Handlefilter=(event)=>{
     const newdata =datas.filter(row=>{
        return row.emp_name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     setrecords(newdata )
  }
  return (
    <div>
      <>
         <input 
            placeholder='search'
             onChange={Handlefilter}/>
       </>
         <DataTable
          bordered
          small
          data={record} 
          columns={columns}
          pagination  
          customStyles={customStyles}/>
   </div>
  )
}
export default Tablepagination