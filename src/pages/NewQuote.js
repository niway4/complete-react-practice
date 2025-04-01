import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const navigate = useNavigate();

  const addQuoteHandler = (quoteData) => {
    
    navigate("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
