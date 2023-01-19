import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const o = { name: "bob", item: 23 };
const UseEffectBasics = () => {
  useEffect(() => {
    console.log("call useEffect");
  });
  console.log("render component");

  return (
    <>
      <h1>{ value }</h1>
      <button>button</button>
    </>
  );
};

export default UseEffectBasics;
