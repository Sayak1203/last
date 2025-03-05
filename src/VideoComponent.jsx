import videoSrc from './Visuals/152798-803733100_small.mp4';
import './VideoBackground.css';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';



const HoverWords = ({ text }) => {
  const words = text.split(" ");

  return (
    <div className="innerContent">
      {words.map((word, index) => (
        <motion.span key={index}>
          {word}
          <span>  </span>
        </motion.span>
        
      ))}
    </div>
  );
};


const VideoComponent = () => (
    <div className="video-container">      
        <video autoPlay muted loop id="bgVideo" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      <div className="content">

        
        <h1>My Lucky Charm: The Backbone of My Confidence & Growth</h1>

        
        <div className='innerContent'>
          
          <HoverWords text="Happy Birthday, my love! 🎉💕 Today is all about celebrating you—the most beautiful, kind, and amazing person in my life. Every moment with you is a gift, and I feel so lucky to have you by my side. I can’t wait to make more memories together and love you today and always. Wishing you all the happiness, love, and magic in the world! ❤️🎂✨" />

        
        </div>
        <div className='Changepage'>
                    <Link to='/start'> <button> Start </button> </Link>                                       
                    
          </div>

      </div>

    </div>
);

export default VideoComponent;
