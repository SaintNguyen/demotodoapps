import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from '../components/Card';

const Dashboard = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
        <div className = "header text-center">
        <h2 className="gradient-text">TODO LIST</h2>
            <button className = "button-85" role="button" onClick = {() => setModal(true)} ><h6 className="gradient-text">Create Task</h6></button>
        </div>
        <div className = "task-container">
        {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default Dashboard;