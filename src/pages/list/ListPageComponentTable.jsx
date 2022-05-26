import {getAllEmployee} from "../../services/EmployeeService";
import {useEffect, useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

export default function ListPageComponentTable() {

    const [list, setList] = useState([]);

    const columns = [
        {dataField: 'id', text: 'Id'},
        {dataField: 'name', text: 'Name', sort: true},
        {dataField: 'languages', text: 'Languages'}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    useEffect(() => {
        getAllEmployee().then(res => {
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <div className="container">
            <div className="pt-5">
                <div className="card">
                    <div className="card-header">
                        <h3>List of Employees</h3>
                    </div>
                    <div className="card-body">

                        <BootstrapTable bootstrap4 keyField='id' columns={columns} data={list} pagination={pagination}/>

                        {/*<table className="table table-striped">*/}
                        {/*    <thead>*/}
                        {/*    <tr>*/}
                        {/*        <th scope="col">#</th>*/}
                        {/*        <th scope="col">Name</th>*/}
                        {/*        <th scope="col">Languages</th>*/}

                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*    <tbody>*/}
                        {/*    {list.map((item, ind) =>*/}
                        {/*        <tr key={item.id}>*/}
                        {/*            <th scope="row">{ind + 1}</th>*/}
                        {/*            <td>{item.name}</td>*/}
                        {/*            <td>{item.languages}</td>*/}
                        {/*        </tr>*/}
                        {/*    )}*/}
                        {/*    </tbody>*/}
                        {/*</table>*/}


                    </div>
                </div>
            </div>
        </div>
    )
}