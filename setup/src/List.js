import React from 'react'

function List({people}) {
  return (
    <div>
      {
        people.map((person) => {
          const {id,age,name,image} = person;
          return (
            <article className='person' key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default List
