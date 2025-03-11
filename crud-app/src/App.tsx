import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import News from './types/News';

const App: React.FC = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [currentNews, setCurrentNews] = useState<News | null>(null);

  // Добавление или обновление новости
  const addOrEditNews = (news: News) => {
    if (currentNews) {
      // Обновляем существующую новость
      setNewsList(newsList.map((n) => (n.id === news.id ? news : n)));
      setCurrentNews(null); // сброс текущей новости после обновления
    } else {
      // Добавляем новую новость
      setNewsList([...newsList, news]);
    }
  };

  // Установка текущей новости для редактирования
  const editNews = (news: News) => {
    setCurrentNews(news);
  };

  // Удаление новости
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
      <Form onSubmit={addOrEditNews} currentNews={currentNews}/>
      <List newsList={newsList} onEdit={editNews} onDelete={deleteNews} />
    </div>
  )
}

export default App;
