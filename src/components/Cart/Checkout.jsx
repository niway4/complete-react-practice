import classes from "./Checkout.module.css";
import { useState, useReducer, useContext } from "react";
import CartContext from "../../store/cart-context";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isStreetValid, setIsStreetValid] = useState(false);
  const [isPostalValid, setIsPostalValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);

  const [isTouched, setIsTouched] = useState({
    name: false,
    street: false,
    postal: false,
    city: false,
  });
  const [isPostalBlur, setIsPostalBlur] = useState(false);

  const inputReducer = (state, action) => {
    if (action.type === "NAME") {
      if (action.value.trim().length === 0) {
        setIsNameValid(false);
        return;
      } else {
        setIsNameValid(true);
        return { ...state, name: action.value };
      }
    }
    if (action.type === "STREET") {
      if (action.value.trim().length === 0) {
        setIsStreetValid(false);
        return;
      } else {
        setIsStreetValid(true);
        return { ...state, street: action.value };
      }
    }
    if (action.type === "POSTAL") {
      if (action.value.trim().length === 4) {
        setIsPostalValid(true);
        return { ...state, postal: action.value };
      } else {
        setIsPostalValid(false);
        return;
      }
    }
    if (action.type === "CITY") {
      if (action.value.trim().length === 0) {
        setIsCityValid(false);
        return;
      } else {
        setIsCityValid(true);
        return { ...state, city: action.value };
      }
    }
  };
  // reducer for input fields
  const [inputHandler, dispatch] = useReducer(inputReducer, {
    name: "",
    street: "",
    postal: "",
    city: "",
  });

  const formIsValid =
    isNameValid && isStreetValid && isPostalValid && isCityValid;
  const postHandler = async (props) => {
    try {
      const response = await fetch(
        "https://test-6cb3e-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: inputHandler,
            orderedItems: props.cartItemsList,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Could not send an order!");
      }
      
      const data = response.json();
      props.resetCart();
    } catch (error) {
      console.log(error.message);
    }
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    setIsTouched({
      name: true,
      street: true,
      postal: true,
      city: true,
    });

    if (!formIsValid) {
      return;
    } else {
      console.log(props.cartItemsList);
      console.log(inputHandler);

      postHandler(props.resetCart);
    }
  };
  // const classNameStyling = (input) => {
  //   if (input === "name") {
  //     if (!isNameValid && isTouched.name) {
  //       return classes.invalid;
  //     }
      
  //   }
  //   if (input === "street") {
  //     if (!isStreetValid && isTouched.street) {
  //       return classes.invalid;
  //     }
  //   }
  //   if (input === "postal") {
  //     if (!isPostalValid && isTouched.postal && isPostalBlur) {
  //       return classes.invalid;
  //     }
  //   }
  //   if (input === "city") {
  //     if (!isCityValid && isTouched.city) {
  //       return classes.invalid;
  //     }
  //   }
  // }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {/*

       */}
      <div className={`${classes.control}  ${!isNameValid && isTouched.name && classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={(event) => {
            dispatch({ type: "NAME", value: event.target.value });
            isTouched.name = true;
          }}
          type="text"
          id="name"
        />
        {!isNameValid && isTouched.name && <p>Please enter a valid name</p>}
      </div>
      {/*

       */}
      
      <div className={`${classes.control}  ${!isStreetValid && isTouched.street && classes.invalid}`}>

        <label htmlFor="street">Street</label>
        <input
          onChange={(event) => {
            dispatch({ type: "STREET", value: event.target.value });
            isTouched.street = true;
          }}
          type="text"
          id="street"
        />
        {!isStreetValid && isTouched.street && (
          <p>Please enter a valid street</p>
        )}
      </div>
    
      <div className={`${classes.control}  ${!isPostalValid && isTouched.postal && classes.invalid}`}>

        <label htmlFor="postal">Postal Code</label>
        <input
          onChange={(event) => {
            dispatch({ type: "POSTAL", value: event.target.value });
            isTouched.postal = true;
            setIsPostalBlur(false); // reset the blur state
          }}
          onBlur={() => {
            setIsPostalBlur(true);
          }}
          type="text" 
          id="postal"
        />
        {!isPostalValid && isTouched.postal && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={`${classes.control}  ${!isCityValid && isTouched.city && classes.invalid}`}>

        <label htmlFor="city">City</label>
        <input
          onChange={(event) => {
            dispatch({ type: "CITY", value: event.target.value });
            isTouched.city = true;
          }}
          type="text"
          id="city"
        />
        {!isCityValid && isTouched.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
