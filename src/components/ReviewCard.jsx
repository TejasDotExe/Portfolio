
export default function ReviewCard({ name, certifyingBody, duration, body }) {
    return (
        <div className="review-card">
            <div className="user">
                <div className="img">{name[0]}</div>
                <div>
                    <h4>{name}</h4>
                    <h5>{certifyingBody}</h5>
                    <p>{duration}</p>
                </div>
            </div>
            <p>
                {body}
            </p>
        </div>
    )
}
