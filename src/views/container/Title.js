import React from "react";


export default function Title({ name, title }) {
  return (
    <div className="mx-auto my-3 text-center text-title mt-5">
      <h1 className="font-weight-bold  font-italic">
       <strong> {name}</strong> <strong className="title">{title}</strong>
      </h1>
    </div>
  );
}
