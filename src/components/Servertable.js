import ReactTable from 'react-table';
import React, { Component } from 'react';
import 'react-table/react-table.css';

class Servertable extends Component {
  constructor(props){
    super(props);
     this.state = {
      isloading:true,
      dataList: [],
     };
   }
  componentWillMount=()=>{
    var _this=this;
console.log("component will mount");
fetch('https://cl7ry4y706.execute-api.ap-south-1.amazonaws.com/api/ledger')
 .then(function(response) {
   if (response.status >= 400) {
     throw new Error("Bad response from server");
   }
   return response.json();
 })
 .then(function(data) {
   console.log(data,'from fetch');
   _this.setState({ dataList :data });
 });

}

  render() {
    console.log("demo",this.state.dataList);
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }];

    const columns = [
            {
              Header: "Name",
              columns: [
                {
                  Header: "LEDGER_ID",
                  accessor: "LEDGER_ID"
                },
                {
                  Header: "CLIENT_ID",
                  accessor: "CLIENT_ID"
                },
                {
                  Header: "SEGMENT",
                  accessor: "SEGMENT"
                },
                {
                  Header: "VOUCHER_DATE",
                  accessor: "VOUCHER_DATE"
                },
                {
                  Header: "VOUCHER_NUMBER",
                  accessor: "VOUCHER_NUMBER"
                },
                {
                  Header: "NARRATION",
                  accessor: "NARRATION"
                },
                {
                  Header: "AMOUNT",
                  accessor: "AMOUNT"
                },
                {
                  Header: "PRODUCT",
                  accessor: "PRODUCT"
                }

            ]}];

    return (
      <ReactTable
        data={this.state.data}
        columns={columns}
      />
    );
  }
}

export default Servertable;
