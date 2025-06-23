export default function CertificationCard({ name, certifyingBody, duration, body }) {
    return (
        <div className="review-card">
            <div className="user">
                <div className="img">{certifyingBody[0]}</div>
                <div>
                    <h4>{name}</h4>
                    <h5>By {certifyingBody}</h5>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    )
}
