import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
         const {name,id,age,image}=person
        return (
          <article key={id} className="person">
             <image src={image} alt={name}/>
             <h4> {name} </h4>
             <p>{age}</p> 
          </article>
        )
      })}
    </>
  );
};

export default List;
