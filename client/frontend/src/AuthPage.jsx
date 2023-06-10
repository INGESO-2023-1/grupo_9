import axios from "axios";
import "./login.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import * as Unicons from '@iconscout/react-unicons';


const AuthPage = (props) => {

  const onSubmit1 = (e) => {
	const logemail = e.target.logemail.value;
	const logpass = e.target.logpass.value;
	// axios .post hacia localhost:8080/login, ver si es valido y
	// guardar datos de la respuesta y crear sesión (probablemente con localstorage)
	// enviar usuario a la pagina principal
  }

  const onSubmit2 = (e) => {
    e.preventDefault();
    const signname = e.target.signname.value;
	const signemail = e.target.signemail.value;
	const signpass = e.target.signpass.value;
    axios
      .post("http://localhost:8080/singup", { username: signname, email: signemail, password: signpass })
      .then((response) => {
		const { data } = response;
		const user = {
			id: data.id,
			username: data.username,
			email: data.email
		};
	  })
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <body id="body1">
		<link rel="stylesheet" href="https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css"></link>
    <div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
												<form id="form-login" onSubmit={onSubmit1}>
													<div class="form-group">
														<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
														<i class="input-icon uil uil-at"></i>
													</div>	
													<div class="form-group mt-2">
														<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
														<i class="input-icon uil uil-lock-alt"></i>
													</div>
                        							<button className="auth-button" class="btn mt-4 btn-light" type="submit">submit</button>
												</form>
                        <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
												<form id="form-sign" onSubmit={onSubmit2}>
													<div class="form-group">
														<input type="text" name="signname" class="form-style" placeholder="Your Full Name" id="signname" autocomplete="off"/>
														<i class="input-icon uil uil-user"></i>
													</div>	
													<div class="form-group mt-2">
														<input type="email" name="signemail" class="form-style" placeholder="Your Email" id="signemail" autocomplete="off"/>
														<i class="input-icon uil uil-at"></i>
													</div>	
													<div class="form-group mt-2">
														<input type="password" name="signpass" class="form-style" placeholder="Your Password" id="signpass" autocomplete="off"/>
														<i class="input-icon uil uil-lock-alt"></i>
													</div>
													<button className="auth-button" class="btn mt-4 btn-light" type="submit">submit</button>
												</form>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
  </body>
  );
};

export default AuthPage;