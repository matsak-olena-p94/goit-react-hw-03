export default function Feedback({reviews, allFeedback}) {
    
    return (
        <div className="text">
            <p>good: {reviews.good}</p>
            <p>neutral: {reviews.neutral}</p>
            <p>bad: {reviews.bad}</p>
            <p>positive: {allFeedback}%</p>
        </div>
    )
}