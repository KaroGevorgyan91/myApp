import React, { Component } from 'react';
import Image from './Img';

class App1 extends Component{
    constructor(props){
      super(props);
  
      this.state = {
          data:[],
          src:"",
      }
    }
    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const data = await response.json();
        const nData = [];
        for(let i = 0; i < 10 && i < data.length; i++){
        nData.push(data[i]);
        }
        this.setState({data:nData})
        console.log(nData);
    }


getSrc= (src) =>{
    this.setState({src:src})

}


render (){
    return (
    <div>
        <header> Hello world</header>
         <ul>
          {this.state.data.map((item,index) =>{
            return (
            <li key = {index}>
                <aside><a  onClick= {()=>this.getSrc(item.url)} > 
                    { item.id}
                </a></aside>
                
            </li>
            )
          })}
        <div className = "image" style = {{border: 0,
                    borderRadius: 3,
                    height: 20,
                    alignItemn: 'center',
                    padding: '0 30px',
                    margin: "auto",
                    display:"flex",
                    justify:'center',
                    position: 'absolute', 
                    left: '60%', 
                    top: '0%',
                    transform: 'translate(-50%, -30%)'}}>{this.state.src !== ""? <Image src = {this.state.src}/>:null} </div> 
        </ul>
         
    </div>
         )
        }
}
export default App1;


















// async fetchUsers(){
    
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         const names = data.map(item=>item.name);
//         this.setState ({names: names});
// }
// componentDidMount(){
//         fetch("https://jsonplaceholder.typicode.com/photos")
//           .then(res => res.json())
//           .then(data => this.setState({ data: data }));
// }
