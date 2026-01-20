export function JiraBoardColumn({title,cards})
{
    function Card({card})
    {
        return(
             <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h6 className="card-title mt-2">{card.title}</h6>
              <span className="badge bg-primary mb-2">{card.tag}</span><br/>
              <small className="text-muted">{card.id}</small>
 
              </div>
             </div>
        )
    }
    return(
        <div className="col">
         <div className="bg-light p-3 rounded">
           <h5 className="mb-3">
           {title} <span className="text-muted">({cards.length})</span>
           </h5>

            {cards.map(card => (
             <Card key={card.id} card={card} />
              ))}
         </div>
        </div>
    )
}