import React, { useRef, useState } from "react";
import { Button, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdTableChart } from "react-icons/md";
import AccountForm from "../Components/AccountForm";
import AccountList from "../Components/AccountList";

const Account = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(import("flowbite-react").TabsRef );
  const props = { setActiveTab, tabsRef };

  const [employeeData, setEmployeeData] = useState([]);

  const setActiveForm = (e) => { 
    props.tabsRef.current?.setActiveTab(0)
  }
  const addData = (user) => { 
    let empData = [{user}];
    setEmployeeData(empData);
  }
  return (      
    <Tabs.Group
      aria-label="Tabs with icons"
      style="fullWidth"
      ref={props.tabsRef}
      onActiveTabChange={(tab) => props.setActiveTab(tab)}
    >
      <Tabs.Item icon={HiUserCircle} title="Form">
        <div className="container mx-auto px-10">
          <AccountForm employeeData={employeeData}/>
        </div>
      </Tabs.Item>
      <Tabs.Item icon={MdTableChart} title="List"  >
        <AccountList setActiveForm ={setActiveForm} addData={addData} employeeData={employeeData} />
      </Tabs.Item>
    </Tabs.Group>
  );
};

export default Account;
