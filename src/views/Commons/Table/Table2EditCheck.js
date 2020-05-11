import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';



const Table2Edit = (props) => {

    const handleOnSelect = (row, isSelect) => {
        props.action(row, isSelect);
    } 

    const pagination = paginationFactory({
        page: 1
    });

    const { SearchBar, ClearSearchButton } = Search;

    return(
        <div>
            <ToolkitProvider
                keyField="id"
                data={ props.datas }
                columns={ props.tableHead }
                caption={ props.caption }
                striped
                hover
                condensed
                search
                >
                {
                    props => (
                    <div>
                    <SearchBar { ...props.searchProps } style={{marginLeft:'5px', marginTop:'5px', boxShadow: 'none'}}/>
                    <span style={{marginLeft: '10px', display:'inline-flex', justifyContent:'center', backgroundColor: '#6767c5', WebkitTextFillColor: 'white' }}><ClearSearchButton style={{borderBlockStyle: 'unset'}} { ...props.searchProps } /></span>
                    <BootstrapTable pagination={ pagination }
                        { ...props.baseProps } 
                        selectRow={{ 
                            mode: 'checkbox',
                            clickToSelect: true,
                            onSelect: handleOnSelect
                        }} />
                    </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}

export default Table2Edit