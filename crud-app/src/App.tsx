import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import News from './types/News';

const App: React.FC = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  const addNews = (news: News) => {
    setNewsList([...newsList, news]);
  };

  const editNews = (news: News) => {
    const editingNewsList = newsList.map((item) => item.id === news.id ? news : item);
    setNewsList(editingNewsList);
  };

  const deleteNews = (id: number) => {
    setNewsList(newsList.filter((news) => news.id !== id));
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
    <div className='container'>
      <h1>Список новостей</h1>
      <Form onSubmit={addNews} />
      <List newsList={newsList} onEdit={editNews} onDelete={deleteNews} />
    </div>
  );
}

export default App;
