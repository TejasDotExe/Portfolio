import Marquee from "react-fast-marquee";
import CertificationCard from "../components/CertificationCard";

const reviews = [
    {
        name: "Network Security",
        certifyingBody: "By NPTEL",
        duration: "12 weeks",
        body: "",
    },
    {
        name: "Advanced Computer Networks",
        certifyingBody: "By NPTEL",
        duration: "12 weeks",
        body: "",
    },
    {
        name: "Oracle19c Database Administration Training",
        certifyingBody: "By Aalok Institute",
        duration: "26 weeks",
        body: "",
    },
    {
        name: "Post Graduate Diploma in Advanced Computing",
        certifyingBody: "By CDAC",
        duration: "26 weeks",
        body: "",
    }
];



export default function Certifications() {
    return (
        <div className="section reviews-section">
            <h2>Certifications</h2>
            <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor="var(--clr-bg)">
                {reviews.map((review, index) => {
                    return <CertificationCard key={index} {...review} />;
                })}
            </Marquee>
        </div>
    )
}
