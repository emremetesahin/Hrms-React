import React,{useState} from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history=useHistory()
  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/products")
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/products" name="Anasayfa" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {
              isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut  signIn={handleSignIn}/>
            }
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
