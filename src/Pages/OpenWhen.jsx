import React, { useState, useEffect } from 'react';
import './openwhen.css';
import img1 from '../Visuals/MyPics/1.jpg'
import img2 from '../Visuals/MyPics/2.jpg'
import img3 from '../Visuals/MyPics/3.gif'
import img4 from '../Visuals/MyPics/4.webp'
import img5 from '../Visuals/MyPics/5.jpg'
import img6 from '../Visuals/MyPics/6.jpg'
import img7 from '../Visuals/MyPics/7.jpg'
import img8 from '../Visuals/MyPics/8.jpg'
import img9 from '../Visuals/MyPics/9.jpg'
import img10 from '../Visuals/MyPics/10.webp'
import { Link } from 'react-router-dom';

const OpenWhen = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const letters = [
    { title: '1️⃣ Open When You Miss Me', 
      image: img1,
      message: 'Even when we`re apart, my heart is always with you. Close your eyes, take a deep breath, and feel my love wrapping around you like a warm hug. I miss you too, my love. Can`t wait to see you soon! 💕'
     },
    { title: '2️⃣ Open When You’re Feeling Down', 
      image: img2,
      message: 'I know today might be tough, but remember, you’re stronger than any bad day. Take a deep breath, hold your head high, and know that I’m always here for you. Sending you a thousand warm hugs and kisses! 🤗💖' },
    { title: '3️⃣ Open When You Want to Laugh', 
      image: img3,
      message: 'Knock, knock… Who’s there? ME! Your personal happiness supplier! 😆😂' },
    { title: 'Open When You’re Stressed', 
      image: img4,
      message: 'Take a deep breath in… and out… 🌿 You’ve got this! Stress is just a little storm passing by, but you are the sunshine that always shines through. Close your eyes, play your favorite song, and imagine me holding your hand. Everything will be okay, my love. 🌸💆‍♀️' },
    { title: '5️⃣ Open When You Need Motivation', 
      image: img5,
      message: 'You are an unstoppable force of greatness! 💪🔥 I believe in you more than words can say. Whatever you’re facing right now, I know you’ll conquer it. Keep going, my love! I’m your biggest fan! 🎉💖' },
    { title: '6️⃣ Open When You’re Having a Great Day', 
      image: img6,
      message: 'Yay! I’m so happy for you! 🎉✨ Your happiness is my happiness, and I wish I was there to give you a high-five, a happy dance, and a million kisses! Enjoy every moment—you deserve it! 😘💃' },
      {
        title: '7️⃣ Open When You’re Mad at Me',
        image: img7,
        message: 'I’m really sorry if I upset you. 💔 The last thing I ever want is to hurt you. Please know that I love you more than anything, and I’ll always do my best to make things right. Let’s talk when you’re ready. Sending you all my love. ❤️',
      },
      {
        title: '8️⃣ Open When You Can’t Sleep',
        image: img8,
        message: 'Close your eyes, my love. Imagine we’re lying under the stars, holding hands, and whispering sweet nothings. 🌙✨ Let the moonlight wrap around you like my arms. Sleep well, beautiful. I love you more than all the stars in the sky. 😴💖',
      },
      {
        title: '9️⃣ Open When You’re Thinking About the Future',
        image: img9,
        message: 'One day, we’ll look back at this moment and smile, knowing our love only grew stronger. 🏡✨ I see a future filled with love, laughter, and endless adventures together. No matter where life takes us, I know it’ll be beautiful—as long as I have you by my side. 💍❤️',
      },
      {
        title: '🔟 Open When It’s Your Birthday 🎉',
        image: img10,
        message: 'HAPPY BIRTHDAY, MY LOVE! 🎂🎈 Today is all about celebrating YOU—your kindness, your beauty, and the happiness you bring into my life. You are my greatest gift every day. Here’s a virtual kiss 😘 and a million hugs! Let’s make this the best birthday ever! 🎁💖',
      }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Open When...</h1>
      <div className='button-holder'>
      <button className="toggle-mode" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '🔆' : '🌙'}
      </button>
      </div>
      <div className="letters-grid">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="letter-card"
            onClick={() => setSelectedLetter(letter)}
          >
            <h2 className="letter-title">{letter.title}</h2>
          </div>
        ))}
      </div>
      {selectedLetter && (
        <div className="modal-overlay" onClick={() => setSelectedLetter(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedLetter.title}</h2>
            <img src={selectedLetter.image}></img>
            <p className="modal-message">{selectedLetter.message}</p>
            <button className="close-button" onClick={() => setSelectedLetter(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className='GoBack'>
        <Link to='/start'> <button> Return </button> </Link> 
      </div>
    </div>
  );
};

export default OpenWhen;
