import "./auth.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-top">
            <img
              src="https://www.freeiconspng.com/uploads/live-chat-icon-5.png"
              alt=""
            />
            <h2>Onek Kotha</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus.
            </p>
            <div className="auth-form">
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="file" placeholder="Photo" />
                <button>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
