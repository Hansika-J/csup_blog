import { Link } from 'react-router-dom';

function Card({ data }) {
    
    return (
        <div className="posts-tile">
            <div className="top">
                <img src="https://picsum.photos/300/200" alt="random img" />
            </div>

            <div className="title">
                <span>{data.title}</span>
            </div>

            <div className="writer">
                <span>By : {data.userId}</span>
            </div>

            <Link to={`/posts/${data.id}`}>
                <button>More Details</button>
            </Link>
        </div>
    );
}

export default Card;
