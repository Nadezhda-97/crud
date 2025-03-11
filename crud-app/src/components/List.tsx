import React from "react";
import News from "../types/News";

interface ListProps {
  newsList: News[];
  onEdit: (news: News) => void;
  onDelete: (id: number) => void;
}

const List: React.FC<ListProps> = ({ newsList, onEdit, onDelete }) => {
  return (
    <ul>
      {newsList.map((news) => (
        <li key={news.id}>
          <h3 className="news-title">{news.title}</h3>
          <p>{news.description}</p>
          <button className="edit" onClick={() => onEdit(news)}>Редактировать</button>
          <button className="delete" onClick={() => onDelete(news.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default List;