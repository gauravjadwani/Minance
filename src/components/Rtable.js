import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Rtable extends Component {
  constructor(props){
    super(props);
     this.state = {
      isloading:true,
      dataList: [],
     };
   }
  componentWillMount=()=>{
    var _this=this;
fetch('https://cl7ry4y706.execute-api.ap-south-1.amazonaws.com/api/ledger')
 .then(function(response) {
   if (response.status >= 400) {
     throw new Error("Bad response from server");
   }
   return response.json();
 })
 .then(function(data) {
   _this.setState({ dataList :data });
 });
}
render() {
const style = {
    height: 10020,
    width: 900,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
    return (
      <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-10">
          <MuiThemeProvider>
          <Paper style={style} zDepth={5} children={
            <BootstrapTable data={this.state.dataList} version='4' search>
        <TableHeaderColumn isKey dataField='LEDGER_ID'>LEDGER_ID</TableHeaderColumn>
         <TableHeaderColumn dataField='CLIENT_ID'>CLIENT_ID</TableHeaderColumn>
          <TableHeaderColumn dataField='SEGMENT'>SEGMENT</TableHeaderColumn>
            <TableHeaderColumn dataField='VOUCHER_DATE'>VOUCHER_DATE</TableHeaderColumn>
               <TableHeaderColumn dataField='VOUCHER_NUMBER'>VOUCHER_NUMBER</TableHeaderColumn>
                  <TableHeaderColumn dataField='NARRATION'>NARRATION</TableHeaderColumn>
                     <TableHeaderColumn dataField='AMOUNT'>AMOUNT</TableHeaderColumn>
                        <TableHeaderColumn dataField='PRODUCT'>PRODUCT</TableHeaderColumn>
     </BootstrapTable>}/>
     </MuiThemeProvider>
        </div>
        <div className="col-md-1">
        </div>
      </div>
    );
  }
}

export default Rtable;
