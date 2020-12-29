import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';
import Admin from '../Auth/Admin';
import Auth from '../Auth/Auth';

const UpdateProduct = (props) => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState(0);
    const [Link,setLink] = React.useState("");
    const id =props.match.params.id;
    React.useEffect(()=>{
        ProductService.getSingleProduct(id).then(data=>{
            setName(data.name);
            setPrice(data.price);
            setLink(data.Link);
        })
    },[]);
    return ( 
        <Admin>
    <Grid container spacing={3}>
        
            <h1>Update Existing Product</h1>
            <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="name" fullWidth value={name} onChange={(e=>{setName(e.target.value)})}/>
            <TextField id="standard-basic" label="price" fullWidth value={price} onChange={(e=>{setPrice(e.target.value)})}/>
        </Grid>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.updateProduct(id,{Link,name,price}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Update Product</Button>
        </Admin> );
}
 
export default UpdateProduct;