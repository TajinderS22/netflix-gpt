import GPTSearch from "../browse/GPTSearch";
import Header from "../Header";

const GPTSearchPage = () => {
  return (
    <div className="bg-[#4d070e] min-h-screen flex  w-screen max-w-[1920px]  ">
      <Header />
      <div className="bg-purple-400 w-full" >
        <GPTSearch />
      </div>
    </div>
  );
};

export default GPTSearchPage;
