export function JiraBoardColumn({ title, cards }) {

    function Card({ card }) {
        const tagColorMap = {
            BILLING: "bg-danger",
            ACCOUNTS: "bg-success",
            FORMS: "bg-primary",
            FEEDBACK: "bg-warning text-dark",
        };
        return (
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                    <h6 className="card-title mt-2">{card.title}</h6>
                    <span
                        className={`badge mb-2 ${tagColorMap[card.tag] || "bg-secondary"
                            }`}
                    >
                        {card.tag}
                    </span><br />
                    <small className="text-muted">{card.id}</small>
                    <img
                        src={card.avatar}
                        alt="avatar"
                        className="rounded-circle position-absolute"
                        style={{
                            width: "32px",
                            height: "32px",
                            bottom: "10px",
                            right: "10px",
                            objectFit: "cover"
                        }}
                    />

                </div>
            </div>
        )
    }
    return (
        <div className="col">
            <div className="bg-light p-3 rounded">
                <h6 className="mb-3">
                    {title} <span className="text-muted">({cards.length})</span>
                </h6>

                {cards.map(card => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}