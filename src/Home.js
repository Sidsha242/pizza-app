
import user1 from './images/pizza-title.mp4';
import user2 from './images/pizza-title.webm';
import './Home.css';

function Home() {
    return (
        <section className='home-page'>
            <div className="hero">
                <div className='title-cont'>
                    <h1 className='title'>The Pizza Store</h1>
                </div>
                <div className='video-container'>
                    <video autoPlay loop={true} >
                        <source src={user1} type="video/mp4" />
                        <source src={user2} type="video/webm" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
            <div className='info-cont'>
                <div className='info-row row'>
                    <div className="feature-box col-lg-4 col-md-12">
                        <i class="icon fa-solid fa-circle-check fa-4x"></i>
                        <h3>Fresh Ingredients Guaranteed</h3>
                    </div>

                    <div className="feature-box col-lg-4 col-md-12">
                        <i class="icon fa-solid fa-pizza-slice fa-4x"></i>
                        <h3>Thin Wood fired pizza staright from Naples</h3>
                    </div>

                    <div className="feature-box col-lg-4 col-md-12">
                        <i class="icon fa-solid fa-carrot fa-4x"></i>
                        <h3>Locally sourced produce.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home