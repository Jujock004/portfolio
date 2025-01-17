import Header from '../components/Header'
import '../styles/Home.css'

function Home() {
    return (
        <>
            <Header />
            <div home-header>
                <h1 className='title-home'>
                    Hi! <br />
                    I'm <span className='higlight-green'>Julien</span>,
                </h1>
                <p className='text-home'>
                    full stack web developer in training. <br />
                    I’m driven by the desire to bring ideas
                    to life.
                </p>
            </div>
            <div className='buttons'>
                <a className='button button-resume' href="src/assets/files/CV_Julien_Joecker.pdf" download="CV_Julien_Joecker.pdf" type="application/pdf">myResume<img src='src/assets/images/Arrow up-circle.png' alt='arrow up' />
                </a>
                <a className='button button-projects' href=""><img src="src/assets/images/Arrow down-circle.png" alt="arrow down" />myProjects</a>
            </div>
        </>
    )
}

export default Home