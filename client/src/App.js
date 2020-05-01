import React, { useState, useEffect } from 'react';
import './App.css';
import {CoverPic, FirstDate, Car1, Car2, Car3, Car4, Car5, Beach1, Beach2, Beach3, 
        Date1, Date2, Date3, Date4, Date5, Drawing1, Drawing2, Family1, Family2, Family3, 
        Dinner1, Dinner2, Dinner3, Sleep1, Sleep2, Sleep3, Kiss1, Kiss2, Kiss3, Kiss4,
        Silly1, Silly2, Silly3, Silly4, Silly5, Silly6, Happy1, Happy2, Happy3, Happy4, Happy5, Happy6} from './imgImports';


function App() {

  const [page, setPage] = useState(0);


  const prev = () =>
  {
    setPage(page - 1);
    
    console.log(page)
  }

  const next = () =>
  {
    setPage(page + 1);
    
    console.log(page)
  }


  return (
    <div>
      <div className='wrapper'>
        <button className='Prev' onClick={prev}>{'<<'}</button>
        {/* Cover Page */}
        <div className={`page odd ${page >=1 ? 'turn' : ''} `} id="cover">
          <h1>Happy Anniversary!</h1>
          <img className='coverPic' src={CoverPic} alt='Pic of Mailey and Me' />
          <h3>An interactive scrapbook of our past year together</h3>
        </div>
        {/* Page 1 */}
        <div className={`page even ${page >=1 ? 'turn' : ''} `} id="cover_back">
          <h1>Our First Date</h1>
          <img className='page1-Img' src={FirstDate} alt='First Date' />
          <h3>We went on our first date a year ago to Pho 88. I remember passing it and having to make a u-turn. When we left it was pouring and we had to run to the car. </h3>
        </div>
        {/* Page 2 */}
        <div className={`page odd ${page >=2 ? 'turn' : ''} `} id={`${page >=1 ? 'cover' : ''}`}>
          <h1>Fun Car Rides</h1>
          <img className='page2-Img' src={Car1} alt='Us in the car' />
          <img className='page2-Img' src={Car2} alt='Us in the car' />
          <img className='page2-Img' src={Car3} alt='Us in the car' />
          <img className='page2-Img' src={Car4} alt='Us in the car' />
          <img className='page2-Img' src={Car5} alt='Us in the car' />
          <h3>I love driving around with you wherever we go. We sing together on roadtrips and have a blast even if it's just a trip to the grocery store.</h3>
        </div>
        {/* Page 3 */}
        <div className={`page even ${page >=2 ? 'turn' : ''} `} id={`${page >=1 ? 'cover_back' : ''}`}>
          <h1>Beach Dates</h1>
          <img className='page3-Img' src={Beach1} alt='Us at the Beach' />
          <img className='page3-Img' src={Beach2} alt='Us at the Beach' />
          <img className='page3-Img' src={Beach3} alt='Us at the Beach' />
          <h3>I love going to the beach with you even if it's just for 30 minutes. I'm so glad we get to see the sun rise and set with each other.</h3>
        </div>
        {/* Page 4 */}
        <div className={`page odd ${page >=3 ? 'turn' : ''} `} id={`${page >=2 ? 'cover' : ''}`}>
          <h1>Foodies</h1>
          <img className='page4-Img' src={Date1} alt='Us eating out' />
          <img className='page4-Img' src={Date2} alt='Us eating out' />
          <img className='page4-Img' src={Date3} alt='Us eating out' />
          <img className='page4-Img' src={Date4} alt='Us eating out' />
          <img className='page4-Img' src={Date5} alt='Us eating out' />
          <h3>We go out to eat a lot and we always get tasty food at different restaurants. I can't wait to have bahn mi and Korean food with you again</h3>
        </div>
        {/* Page 5 */}
        <div className={`page even ${page >=3 ? 'turn' : ''}`} id={`${page >=2 ? 'cover_back' : ''}`}>
          <h1>Drawings</h1>
          <img className='page5-Img' src={Drawing1} alt='You drawing on me' />
          <img className='page5-Img' src={Drawing2} alt='You drawing on me' />
          <h3>It's nice when you draw on me because it keeps you busy while I'm doing things on my PC and it feels funny on my skin. You're also really good at it!</h3>
        </div>
        {/* Page 6 */}
        <div className={`page odd ${page >=4 ? 'turn' : ''} `} id={`${page >=3 ? 'cover' : ''}`}>
          <h1>Family</h1>
          <img className='page6-Img' src={Family1} alt='Us and our children' />
          <img className='page6-Img' src={Family2} alt='Us and our children' />
          <img className='page6-Img' src={Family3} alt='Us and our children' />
          <h3>We're so cute together and I'm glad you're the mother of Bacon and lil peenie.</h3>
        </div>
        {/* Page 7 */}
        <div className={`page even ${page >=4 ? 'turn' : ''}`} id={`${page >=3 ? 'cover_back' : ''}`}>
          <h1>Home Cooked</h1>
          <img className='page7-Img' src={Dinner1} alt={`We're Gourmet Chefs`} />
          <img className='page7-Img' src={Dinner2} alt={`We're Gourmet Chefs`} />
          <img className='page7-Img' src={Dinner3} alt={`We're Gourmet Chefs`} />
          <h3>I love cooking dinner with you and taking turns making tasty meals for each other</h3>
        </div>
        {/* Page 8 */}
        <div className={`page odd ${page >=5 ? 'turn' : ''} `} id={`${page >=4 ? 'cover' : ''}`}>
          <h1>Sleep</h1>
          <img className='page8-Img' src={Sleep1} alt='Cuddlebugs' />
          <img className='page8-Img' src={Sleep2} alt='Cuddlebugs' />
          <img className='page8-Img' src={Sleep3} alt='Cuddlebugs' />
          <h3>I love cuddling with you all the time. You make me super happy and I'm glad I get to spend my mornings waking up next to you.</h3>
        </div>
        {/* Page 9 */}
        <div className={`page even ${page >=5 ? 'turn' : ''}`} id={`${page >=4 ? 'cover_back' : ''}`}>
          <h1>Kisses</h1>
          <img className='page9-Img' src={Kiss1} alt='Me kissing you' />
          <img className='page9-Img' src={Kiss2} alt='Me kissing you' />
          <img className='page9-Img' src={Kiss3} alt='Me kissing you' />
          <img className='page9-Img' src={Kiss4} alt='Me kissing you' />
          <h3>Kissing you is amazing. You have the nicest and softest lips I've ever kissed and I don't wanna stop kissing you ever.</h3>
        </div>
        {/* Page 10 */}
        <div className={`page odd ${page >=6 ? 'turn' : ''} `} id={`${page >=5 ? 'cover' : ''}`}>
          <h1>Just a Couple of Goofballs</h1>
          <img className='page10-Img' src={Silly1} alt='Us goofing around' />
          <img className='page10-Img' src={Silly2} alt='Us goofing around' />
          <img className='page10-Img' src={Silly3} alt='Us goofing around' />
          <img className='page10-Img' src={Silly4} alt='Us goofing around' />
          <img className='page10-Img' src={Silly5} alt='Us goofing around' />
          <img className='page10-Img' src={Silly6} alt='Us goofing around' />
          <h3>I love being silly with you and goofing around. We have such a great time together.</h3>
        </div>
        {/* Page 11 */}
        <div className={`page even ${page >=6 ? 'turn' : ''}`} id={`${page >=5 ? 'cover_back' : ''}`}>
          <h1>Good Times</h1>
          <img className='page11-Img' src={Happy1} alt='We happy campers' />
          <img className='page11-Img' src={Happy2} alt='We happy campers' />
          <img className='page11-Img' src={Happy3} alt='We happy campers' />
          <img className='page11-Img' src={Happy4} alt='We happy campers' />
          <img className='page11-Img' src={Happy5} alt='We happy campers' />
          <img className='page11-Img' src={Happy6} alt='We happy campers' />
        </div>
        {/* Page 12 */}
        <div className={`page odd ${page >=7 ? 'turn' : ''} `} id={`${page >=6 ? 'cover' : ''}`}>
          <h4>
            Seeing you happy makes everything going wrong less worse and you help me through angering situations. Even when things aren't
            going the best between us, I can always count on coming back to you. The time we spent together this past year has taught us a 
            lot about what love really is and I'm glad I get to love you everyday even if I'm not with you. I love being happy with you and 
            I'm so lucky to have you as my girlfriend and my best friend. Happy Anniversary my sweetheart! 
          </h4>
        </div>
        <div className={`page even ${page >=7 ? 'turn' : ''}`} id={`${page >=6 ? 'cover_back' : ''}`}></div>
        <button className='Next' onClick={next}>{'>>'}</button>

      </div>
    </div>
    
  );
}

export default App;
