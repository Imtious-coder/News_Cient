import { useParams } from 'react-router';
import './NewsDetails.css';
import Footer from '../Home/Footer/Footer'
import NewsData from '../News.json';

const NewsDetails = () => {
    const {newsId} = useParams()
    const News = NewsData.find(news => news.id == newsId);
    return (
        <section>
            <section className="grid md:grid-cols-2 mx-10">
                {/* image */}
               <img className="NewsDeatailsImage" src={News.image} alt="" />
               {/* details */}
               <div className="NewsDeatailsInfo">
                   <p className="NewsDeatailsInfoTitle">{News.title}</p>
                   <p className="NewsDeatailsInfoAuthor">{News.author}</p>
                   <p className="NewsDeatailsInfoDescription">{News.description}</p>
               </div>
            </section>
            <Footer />
        </section>
    );
};

export default NewsDetails;