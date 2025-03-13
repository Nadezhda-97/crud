import React, { useState } from "react";
import News from "../types/News";

interface NewsItemProps {
  news: News;
  onEdit: (news: News) => void;
  onDelete: (id: number) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>(news.title);
  const [updatedDescription, setUpdatedDescription] = useState<string>(news.description);

  const handleEdit = () => {
    const updatedNews: News = { ...news, title: updatedTitle, description: updatedDescription };
    onEdit(updatedNews);
    setIsEditing(false);
  };

  return (
    <div className="news-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="Введите новый заголовок"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            autoFocus
          />
          <textarea
            placeholder="Добавьте новое описание новости"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button className="save" onClick={handleEdit}>Сохранить</button>
          <button className="cancel" onClick={() => setIsEditing(false)}>Отмена</button>
        </div>
      ) : (
        <div>
          <h3 className="news-title">{news.title}</h3>
          <p>{news.description}</p>
          <button className="edit" onClick={() => setIsEditing(true)}>Редактировать</button>
          <button className="delete" onClick={() => onDelete(news.id)}>Удалить</button>
        </div>
      )}
    </div>
  )
};

export default NewsItem;