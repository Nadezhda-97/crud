import React, { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  description: string;
}

interface FormProps {
  onSubmit: (news: News) => void;
  currentNews?: News
}

const Form: React.FC<FormProps> = ({ onSubmit, currentNews}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      const newNews = {
        id: currentNews ? currentNews.id : Date.now(),
        title,
        description,
      };
      onSubmit(newNews);
      setTitle('');
      setDescription('');
    }
  };

  useEffect(() => {
    if (currentNews) {
      setTitle(currentNews.title);
      setDescription(currentNews.description);
    }
  }, [currentNews]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Введите заголовок новости"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />
        <textarea
          placeholder="Добавьте описание новости"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{currentNews ? 'Обновить' : 'Добавить'}</button>
      </form>
    </>
  )
};

export default Form;