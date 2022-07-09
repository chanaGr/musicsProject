import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { eventNames } from "process";
import React, { ChangeEvent } from "react";
import { categoriesList, Category, Product, productsList } from "../data";
import About from "./About";

type MyState = {
    subProductsList: Array<Product>;
    categories:Array<Category>;
    yes:boolean;
  };

class View extends React.Component <{},MyState>{

  pic:string =""

  state: MyState = {
    subProductsList: productsList.getProductsList,
    categories:categoriesList.getCategories,
    yes:false,
};

constructor(props:any) {
  super(props);
  //save in the local storage
  localStorage.setItem('myData', JSON.stringify(productsList.getProductsList));
  console.log(localStorage.getItem('myData'));
  
}
 
 
    viewProd=(item : Product)=>{    
      this.setState({yes:true})
      this.pic=item.getPicture;
    }

    back=()=>{
      this.setState({yes:false})
    }
     searchFilter=(event:ChangeEvent)=>{
      let str=(event.target as HTMLInputElement).value.toUpperCase();
      let temp= productsList.getProductsList.filter(x=>x.getProductName.toUpperCase().indexOf(str)>-1)
      this.setState({subProductsList:temp});
    }

    searchByCategory=(event:ChangeEvent)=>{
      debugger
      let temp = (event.target as HTMLInputElement).value[0];
      if(temp=='S'){
      this.setState({subProductsList:productsList.getProductsList});
      }
      else{
      let arr = productsList.getProductsList.filter(x=>x.getProductCategory==parseInt(temp));
      this.setState({subProductsList:arr});
      }
    }

  render() {

    return (
     <>
      <input type="text" className="serch" placeholder="Type To Search By Name..." onChange={this.searchFilter}/>
      <select className="select" id="select" onChange={this.searchByCategory}>
        <option>Search By Category</option>
        {
          !this.state.yes &&
          this.state.categories  != undefined &&
          this.state.categories.length > 0 &&
          this.state.categories.map((item) => (       
            <>
            <option>{item.getCodeCategory}.{item.getNameCategory}</option>
            </> 
        ))}
      </select>
      
      <div className="bigdiv">
    {        
      !this.state.yes &&
      this.state.subProductsList  != undefined &&
      this.state.subProductsList.length > 0 &&
      this.state.subProductsList.map((item) => (       
        <>    
        <div className="prdct"> 
            <h3>{item.getProductName}</h3>
            <span> code: {item.getProductCode}</span>
            {/* <span>Category: {item.getProductCategory}</span> */}
            <span>Price: {item.getProductPrice}</span>
            <span> Units: {item.getProductUnits} $</span>
            <h6>Click To see big </h6>
            <img src={item.getPicture} onClick={() => this.viewProd(item)} ></img>
          </div>   
        </>   
      ))
    }
      </div>
      
      {
        this.state.yes &&
        <>
        <img src={this.pic} className="bigimg"></img>
        <button className="btn" onClick={()=>this.back()}>back</button>
        </>
      }
      {/* { <MDBTable>
          <MDBTableHead>
            <tr>
              <th>productName</th>
              <th>productCode</th>
              <th>productCategory</th>
              <th>productPrice</th>
              <th>productUnits</th>
              <th>picture</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            { this.state.subProductsList  != undefined &&
              this.state.subProductsList.length > 0 &&
              this.state.subProductsList.map((item) => (
                <>
                  <tr>
                    <td>{item.getProductCode}</td>
                    <td>{item.getProductName}</td>
                    <td>{item.getProductCategory}</td>
                    <td>{item.getProductPrice}</td>
                    <td>{item.getProductUnits}</td>
                    <td><img key="{item.getProductCode}" src={item.getPicture}></img></td>
                  </tr>
                </>
              ))
            }
          </MDBTableBody>
        </MDBTable> } */}
    </>
    );
  }
}
export default View;
