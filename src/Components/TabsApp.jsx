import React, { useEffect, useState } from "react";
import './TabsAppCss.css';
import Tab from "./Tab";
import Pagination from "./Pagination";
const TabsApp = ()=>{
   

    const [ tabActive , setTabActive] = useState(1)
    let [tabCount , setTabCount] = useState([])
   
    const [currentPage , setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    function handlingTab(index){
        setTabActive(index)
        console.log("My Index :- ",index)
    }
  
    useEffect(()=>{
        for(let i = 0 ; i < 30 ; i++){
            tabCount =  [...tabCount, <Tab key={i} boxCount={i}/> ]         
        }
        setTabCount(tabCount)
    },[])

    

    const indexOfLastRecord = currentPage*recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecord = tabCount.slice(indexOfFirstRecord,indexOfLastRecord);
    
    const nPages = Math.ceil(tabCount.length / recordsPerPage )
    

    return(

        <div className="tabs_app">
                   <div className="app_heading">
                        <h2>Tabs</h2>
                    </div>     

                    <div className="tabs_container">
                        <div className="tabs_cont">
                               <div className="tabs_block">

                                <div className=  {tabActive === 1 ? 'active-tab tab' :'tab'} onClick={()=>handlingTab(1)}>
                                       <h2>Tab 1</h2>
                                </div>

                                <div className=  {tabActive === 2 ? 'active-tab tab' :'tab'}  onClick={()=>handlingTab(2)}>
                                       <h2>Tab 2</h2>
                                </div>

                                <div className=  {tabActive === 3 ? 'active-tab tab' :'tab'}  onClick={()=>handlingTab(3)}>
                                       <h2>Tab 3</h2>
                                </div>

                               </div>

                               <div className="tab_cont_block">
                                    <div className= {tabActive === 1 ? 'tabCont-active tabCont' : 'tabCont' }>
                                         <h2>Tabs 1 Content</h2>
                                         <hr />
                                       
                                       <div className="tabContainer">

                                      
                                       {currentRecord.map((item,index) => (
                                        <div className="" key={index}>
                                            {item}
                                            </div>
                                       ))}
                                        </div>


                                        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

                                         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur sapiente sed tempora veritatis ab corrupti ipsam provident ratione. Repellendus doloribus similique ea assumenda temporibus impedit voluptas voluptatem earum accusantium deserunt culpa error, deleniti, reprehenderit ratione vero a ducimus at eveniet saepe laboriosam. Provident dolore, veniam repellendus fuga ducimus itaque?</p> */}
                                    </div>

                                    <div className={tabActive === 2 ? 'tabCont-active tabCont' : 'tabCont' }>
                                         <h2>Tabs 2 Content</h2>
                                         <hr />
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur sapiente sed tempora veritatis ab corrupti ipsam provident ratione. Repellendus doloribus similique ea assumenda temporibus impedit voluptas voluptatem earum accusantium deserunt culpa error, deleniti, reprehenderit ratione vero a ducimus at eveniet saepe laboriosam. Provident dolore, veniam repellendus fuga ducimus itaque?</p>
                                    </div>

                                    <div className={tabActive === 3 ? 'tabCont-active tabCont' : 'tabCont' }>
                                         <h2>Tabs 3 Content</h2>
                                         <hr />
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur sapiente sed tempora veritatis ab corrupti ipsam provident ratione. Repellendus doloribus similique ea assumenda temporibus impedit voluptas voluptatem earum accusantium deserunt culpa error, deleniti, reprehenderit ratione vero a ducimus at eveniet saepe laboriosam. Provident dolore, veniam repellendus fuga ducimus itaque?</p>
                                    </div>
                               </div>
                        </div>
                        
                    </div>                                                                        

        </div>
    )
}


export default TabsApp;