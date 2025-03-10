import React from "react";

interface News {
  id: number;
  title: string;
  description: string;
}

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
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <button onClick={() => onEdit(news)}>Редактировать</button>
          <button onClick={() => onDelete(news.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default List;