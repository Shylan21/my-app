import background from './pictures/picture.jpeg'
import profilePic from './pictures/foto.png'
import './App.css'

function App() {
	return (
		<div className="App">
			<header>
				<img
					className="bkg-img"
					style={{ backgroundImage: `url(${background})` }}
					alt=""
				/>
				<div className="bkg-shadow">
					<h1>Welcome</h1>
					<h2>
						I'm Isabelle, a Full-Stack Software Developer living in Scotland.
					</h2>
					<div className="button-container">
						<button>About Me</button>
						<button>Projects</button>
						<button>Skills</button>
						<button>Contacts</button>
					</div>
				</div>
			</header>
			<main>
        <div className="main-bkg">
          <div className="main-container">
            <h1 className="about-me"> A Bit About Me</h1>
					<img className="profile-pic" src={profilePic} alt="" />
					<p>
						{' '}
						My journey into the world of technology was preceded by a
						distinguished 10-year career in the hospitality industry, where I
						honed my skills as a chef. This unique blend of experience has
						equipped me with a deep understanding of teamwork, time management,
						adaptability, and attention to detail; qualities that seamlessly
						translate into my career as a software developer. I am excited to
						leverage my passion for technology and my newly acquired software
						development knowledge to excel as a junior software developer.
					</p>
          </div>
					
				</div>
			</main>
		</div>
	)
}

export default App
