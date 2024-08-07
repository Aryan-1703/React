import ServiceOverview from "../components/Home/ServiceOverview";
import Appointment from "../components/Home/appointment";
import "../styles/Home/Home.css";
import Whyus from "../components/Home/whyus";
import Gallery from "../components/Home/gallery";
import Process from "../components/Home/Process";

const Home = () => {
	return (
		<div>
			<div className="home-start">
				<div className="container">
					<div className="box">
						<h2>HELLO!</h2>
						<h1>
							YOU HAD AN <span className="highlight">ACCIDENT?</span>
						</h1>
						<p className="box-desc">
							Give us a call. We’ll walk you through the process from start to finish and
							deal directly with the insurance companies so you don’t have to. At 4Wheels
							Auto Collision, your safety and satisfaction are our main priorities.
						</p>
						<button className="appointmentbtn">RESERVE APPOINTMENT</button>
					</div>
				</div>
			</div>
			<Whyus />
			<ServiceOverview />
			<Appointment />
			<Gallery />
			<Process />
		</div>
	);
};
export default Home;
