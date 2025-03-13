import React, { useState, useEffect } from 'react';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import News from './types/News';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastStyles.css';

const App: React.FC = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  const addNews = (news: News) => {
    setNewsList([...newsList, news]);
    toast.success('Новость добавлена!');
  };

  const editNews = (news: News) => {
    const editingNewsList = newsList.map((item) => item.id === news.id ? news : item);
    setNewsList(editingNewsList);
    toast.info('Изменения сохранены!');
  };

  const deleteNews = (id: number) => {
    setNewsList(newsList.filter((news) => news.id !== id));
    toast.error('Новость удалена!');
  };

  // Загрузка новостей из локального хранилища при первом рендере
  useEffect(() => {
    const storedNews = localStorage.getItem('newsList');
    if (storedNews) {
      setNewsList(JSON.parse(storedNews));
    }
  }, []);

  // Сохранение новостей в локальное хранилище при изменении списка
  useEffect(() => {
    localStorage.setItem('newsList', JSON.stringify(newsList));
  }, [newsList]);

  return (
    <div>
      <h1>Список новостей</h1>
      <NewsForm onSubmit={addNews} />
      <NewsList newsList={newsList} onEdit={editNews} onDelete={deleteNews} />
      <ToastContainer />
    </div>
  );
}

export default App;
