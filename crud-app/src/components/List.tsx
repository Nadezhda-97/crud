import React from "react";
import News from "../types/News";
import NewsItem from "./NewsItem";

interface ListProps {
  newsList: News[];
  onEdit: (news: News) => void;
  onDelete: (id: number) => void;
}

const List: React.FC<ListProps> = ({ newsList, onEdit, onDelete }) => {
  return (
    <ul>
      {newsList.map((news) => (
        <NewsItem key={news.id} news={news} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;