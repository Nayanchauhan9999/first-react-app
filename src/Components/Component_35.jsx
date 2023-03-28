import React, { useEffect, useState } from "react";
const Component35 = () => {
  const [state, setState] = useState();
  const [page, setPage] = useState(0);
  const [cat, setCat] = useState("computers");
  const [limit, setLimit] = useState("5")
  useEffect(() => {
    const quotesData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${cat}&limit=${limit}`,
          {
            headers: {
              "X-Api-Key": "gq9UD/5mz6gNOkIjanqURw==MSq3aMHbzXG9nxJI",
            },
          }
        );
        const data = await response.json();
        setState(data);
      } catch (err) {
        console.log(err);
      }
    };
    quotesData();
  }, [page, cat,limit]);
  const quoteLimit = []
  for(let i = 1; i<=10; i++){
    quoteLimit.push(i)
  }
  const nextPage = () => {
    setPage(page + 1);
  };
  const categories = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];
  const selectCategory = (e) => {
    setCat(e.target.value);
  };
 const setQuoteLimit=(e)=>{
  setLimit(e.target.value)
 }
  return (
    <>
      <div className="quote-main-div">
        <h2 className="text-center m-3">Inspirational Quotes for Daily Life</h2>
        <span className="text-danger">Current Category : </span>
        <select className="ms-1" defaultValue="computers" onChange={selectCategory}>
          {categories.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <span className="text-danger ms-2">Quote Limit : </span>
        <select onChange={setQuoteLimit} defaultValue="5">
          {quoteLimit.map((value)=>{
            return <option key={value} value={value}>{value}</option>
          })}
        </select>
        <div className="container">
          {!state ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            state.map((value, index) => {
              return (
                <p key={index} className="fs-5 m-3">
                  {index + 1}. {value.quote} #{value.category}
                </p>
              );
            })
          )}
        </div>
      </div>
      <div className="container text-center">
        <button className="btn btn-sm btn-success" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default Component35;
