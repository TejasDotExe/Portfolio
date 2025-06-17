import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";

const reviews = [
    {
        name: "Network Security",
        certifyingBody: "By NPTEL",
        duration: "12 weeks",
        body: "Malay was fantastic ! He followed all instructions and finished task in time and with great accuracy. He understo...",
    },
    {
        name: "Advanced Computer Networks",
        certifyingBody: "By NPTEL",
        duration: "12 weeks",
        body: "Malay Completed the project on time and budget. He fix all issues and provided excellent support to us using his so...",
    },
    {
        name: "Oracle19c Database Administration Training",
        certifyingBody: "By Aalok Institute",
        duration: "26 weeks",
        body: "Malay is very good at Flask anb Html/Css/js wev development, I would like to hire him for long term project based jobs...",
    },
    {
        name: "Post Graduate Diploma in Advanced Computing",
        certifyingBody: "By CDAC",
        duration: "26 weeks",
        body: "Working with Malay was a great experience! He is very professional, communicates well, and delivers top-quality work...",
    }
];



export default function Reviews() {
    return (
        <div className="section reviews-section">
            <h2>Certifications</h2>
            <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor="var(--clr-bg)">
                {reviews.map((review, index) => {
                    return <ReviewCard key={index} {...review} />;
                })}
            </Marquee>
        </div>
    )
}
