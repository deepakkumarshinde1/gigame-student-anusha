function Header({ user }) {
  return (
    <>
      <h1>
        Welcome,
        <i
          style={{ color: user.gender === "male" ? "red" : "green" }}
          className={`fa fa-${user.gender}`}
          aria-hidden="true"
        ></i>
        {user.name}
      </h1>
    </>
  );
}

export default Header;
