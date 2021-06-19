import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import { ProductService } from "../services/productService";


export default function ProductDetail() {
    const [productDetails, setProductDetails] = useState({})
    let {name}=useParams()
    useEffect(()=>
    {
        let productService=new ProductService()
        productService.getByProductsName(name).then(result=>setProductDetails(result.data.data))
    },[])
  return (
    <div>
        
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{productDetails.productName}</Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
