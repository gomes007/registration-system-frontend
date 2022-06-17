import {getAllEmployee} from "../../services/EmployeeService";
import {useEffect, useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';


export default function ListPageComponentTable() {

    const [list, setList] = useState([]);


    const columns = [
        {dataField: 'id', text: 'Id'},
        {dataField: 'name', text: 'Name', sort: true, filter: textFilter()},
        {dataField: 'languages', text: 'Languages', filter: textFilter()}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true
    });

    useEffect(() => {
        getAllEmployee().then(res => {
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <div className="container content">
            <div className="pt-2">
                <div className="card">
                    <div className="card-header">
                        <h3>List of Employees</h3>
                    </div>
                    <div className="card-body">

                        <BootstrapTable
                            bootstrap4
                            keyField='id'
                            columns={columns}
                            data={list}
                            pagination={pagination}
                            filter={filterFactory()}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}