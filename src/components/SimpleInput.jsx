import "./SimpleInput.css";
const SimpleInput = (props) => {
  return (
    <form className="container">
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
