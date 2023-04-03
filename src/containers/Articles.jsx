import { useParams } from "react-router-dom";
import ContentWrapper from "./ContentWrapper.jsx";
import { ArticlesContent } from "../constants/ArticlesContent.js";
import StyledLinkList from "../components/StyledLinkList.jsx";

const Articles = () => {
  const { id } = useParams();

  const article = ArticlesContent.at(id);

  const ArticleContentText = () =>
    article.content.map((paragraph, index) => {
      return (
        <p key={index} className="pt-8 text-base tracking-wider">
          {paragraph}
        </p>
      );
    });

  return (
    <main>
      <ContentWrapper>
        <div className="mt-6">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
            <div className="order-first mt-8 lg:mr-8">
              <div>
                <p className="text-base tracking-wider">{article.summary}</p>
              </div>
              <div className="mt-8">
                <img src={article.images[0]} />
              </div>
            </div>

            <div className="lg:row-span-2 lg:ml-8">
              <ArticleContentText />
            </div>
            <div className="mt-12">
              <StyledLinkList links={article.links} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
};

export default Articles;
