import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const{id,cover, title, author_img, reading_time,author, posted_date, hashtags  } = blog
    return (
        <div className='mb-20 pr-4 space-y-4'>
            <img className='w-full ' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div  className='flex gap-4 pt-4' >
                    <img className='w-10 rounded-full' src={author_img} alt="" />
                    <div>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div className='justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)}
                     className='ml-2 text-red-500 text-2xl'>
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p>
                {
                    hashtags.map( (hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)

                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-700 font-bold underline hover:text-green-800'>Mark As Read</button>
            
        </div>
    );
};

Blog.propTypes= {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;