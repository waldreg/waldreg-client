const Home = () => {
  return (
    <>
      <div>Home</div>
      <p>토큰 값 : {localStorage.getItem("access_token")}</p>
    </>
  );
};

export default Home;
