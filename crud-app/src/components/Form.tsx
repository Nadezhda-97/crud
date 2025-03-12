import React, { useState } from "react";
import News from "../types/News";

interface FormProps {
  onSubmit: (news: News) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNews = {
      id: Date.now(),
      title,
      description,
    };
    onSubmit(newNews);
    setTitle('');
    setDescription('');
  };

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
        <button type="submit">Добавить новость</button>
      </form>
    </>
  )
};

export default Form;