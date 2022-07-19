import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCardLink = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h3 className="link-title">{title}: </h3>
            <a href={description} className="link-description"> {description}</a>
        </div>
    );
}

export default ResultCardLink;