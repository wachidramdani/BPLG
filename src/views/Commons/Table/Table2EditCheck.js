import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';

const Table2Edit = (props) => {

    const handleOnSelect = (row, isSelect) => {
        props.action(row, isSelect);
    } 

    return(
        <div>
            <BootstrapTable keyField='id' data={ props.datas } columns={ props.tableHead }
                caption={ props.caption }
                striped
                hover
                condensed
                selectRow={{ 
                    mode: 'checkbox',
                    clickToSelect: true,
                    onSelect: handleOnSelect
                }}
            />
        </div>
    )
}

export default Table2Edit