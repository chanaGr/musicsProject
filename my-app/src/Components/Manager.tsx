import React from "react";
import { productsList } from "../data";
import './navbarc.css';

type MyState = {
    delete:boolean;
    edit:boolean;
    add:boolean;
  };

class Manager extends React.Component{
    temp={
        name:"",
        code:0,
        codeCat:0,
        price:0,
        units:0
    }

    tempAdd={
        name:"",
        code:0,
        codeCat:0,
        price:0,
        units:0,
        pic:"logo.png"
    }

    state: MyState = {
        delete: false,
        edit:false,
        add:false
    };

    EditProduct=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        debugger
        this.temp.name=((event.target as HTMLFormElement)[0] as HTMLInputElement).value
        this.temp.code=parseInt(((event.target as HTMLFormElement)[1] as HTMLInputElement).value);
        this.temp.codeCat=parseInt(((event.target as HTMLFormElement)[2] as HTMLInputElement).value);
        this.temp.price=parseInt(((event.target as HTMLFormElement)[3] as HTMLInputElement).value);
        this.temp.units=parseInt(((event.target as HTMLFormElement)[4] as HTMLInputElement).value);
        console.log(this.temp);
        productsList.updateProduct(this.temp.name,this.temp.code,this.temp.codeCat,this.temp.price,this.temp.units)
        this.setState( {delete: false,edit:false, add:false})
    }

    AddProduct =(event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        this.tempAdd.name=((event.target as HTMLFormElement)[0] as HTMLInputElement).value
        this.tempAdd.code=parseInt(((event.target as HTMLFormElement)[1] as HTMLInputElement).value);
        this.tempAdd.codeCat=parseInt(((event.target as HTMLFormElement)[2] as HTMLInputElement).value);
        this.tempAdd.price=parseInt(((event.target as HTMLFormElement)[3] as HTMLInputElement).value);
        this.tempAdd.units=parseInt(((event.target as HTMLFormElement)[4] as HTMLInputElement).value);
        productsList.addProduct(this.tempAdd.name,this.tempAdd.code,this.tempAdd.codeCat,this.tempAdd.price,this.tempAdd.units,this.tempAdd.pic)
        this.setState( {delete: false,edit:false, add:false})
    }

    DeleteProduct=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        let code =parseInt(((event.target as HTMLFormElement)[0] as HTMLInputElement).value);
        productsList.deleteProduct(code)
        this.setState( {delete: false,edit:false, add:false})
    }

    render() {
        return <>
        <input type="button" className="btn" value="Delete Product" onClick={()=>{this.setState({delete:!this.state.delete, edit:false,add:false})}}/>
        <input type="button" className="btn" value="Add Product" onClick={()=>{this.setState({delete:false, edit:false,add:!this.state.add})}}/>
        <input type="button" className="btn" value="Edit Product" onClick={()=>{this.setState({delete:false, edit:!this.state.edit,add:false})}}/>
        
        {
            this.state.delete &&
            <form onSubmit={this.DeleteProduct}>
                <input type="text" className="inpt" placeholder="Enter Code Product To Delete" id="del"/>
                <input type="submit" className="btn" value="SUBMIT"/>
            </form>
        }
        {
            this.state.add  && 
            <form onSubmit={this.AddProduct}>
            <p>Add Product</p>
            <input type="text" className="inpt" min="0" placeholder="Enter Name" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter code"></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter codeCategory" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter Price"></input>   
            <input type="number"className="inpt" min="0" placeholder="Enter Unit"></input>     
            <input type="submit" className="btn" value="SUBMIT"/>
            </form>
        }
        {
            this.state.edit  && 
            <form  onSubmit={this.EditProduct}>
            <p>Edit Product</p>
            <input type="text"   className="inpt" min="0"  placeholder="Enter Name" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter code"></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter codeCategory" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter Price" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter Unit" ></input>  
            <input type="submit" className="btn" value="SUBMIT"/>
            </form>
        }
        </>
    }
    
    }
export default Manager;