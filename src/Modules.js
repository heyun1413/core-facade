import React from "react";
import {Button} from "react-materialize";
import './Modules.css'
import DynamicTable from "./DynamicTable";


const Modules = () => {
    return <div className='p'>
        <Button floating className='red float-right small' waves='light' icon='add' />
        <DynamicTable />
    </div>
}

export default Modules