import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://google.com",
  urlToImage: "http://via.placeholder.com/160",
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=f57d78cbba374f67838c07cf73a53a41"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
