import React, { Component } from 'react';
import PieChart from "react-svg-piechart";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Pichart extends Component {
  constructor(props){
    super(props);
     this.state = {
       dataList:[],
      isloading:true
    };
   }
   componentWillMount=()=>{
     var _this=this;
 console.log("component will mount");
 fetch('https://cl7ry4y706.execute-api.ap-south-1.amazonaws.com/api/capital')
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data['products']['net'],'from fetch');
    const holder=[];
    var color=["#22594e","#2f7d6d","#3da18d","#69c2b0","#a1d9ce","#a1d9ce","#a1d9ce","#700000 "];
    var i=0;
    for(var item in data['products']['net']){
  console.log('ye ',item);
  const val=[];
  val['title']=item;
  val['value']=data['products']['net'][item];
  val['color']=color[i++];
  holder.push(val);
  console.log(color[i++],'clor');
  // ++i;
    }
    console.log(holder,'holder');
    _this.setState({ dataList :holder });
  });

 }
 render() {
   const style = {
  height: 500,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


   console.log("demo",this.state.dataList);
   return (
     <div className="row">
       <div className="col-md-3">
       </div>
       <div className="col-md-6">
         <MuiThemeProvider>
          <Paper style={style} zDepth={1} circle={true} children={<PieChart
            data={this.state.dataList} expandOnHover expandSize={56} viewBoxSize={1000} strokeWidth={10}/>}/>
    </MuiThemeProvider>
       </div>
       <div className="col-md-3">
       </div>
</div>
   );

}
}
export default Pichart;
