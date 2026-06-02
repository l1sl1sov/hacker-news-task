import { useFetchNews } from '../hooks/useFetchNews';
import { useFilterSelector } from '../store/useFilterStore';
import { fetchNewsService } from '../server/services';
import { useEffect, useState } from 'react';

export const NewsList = () => {
  const filter = useFilterSelector();
  const { news, isFetchingNews, isPlaceholderData } = useFetchNews(filter);
  console.log(news);

  return (
    <div>
      {news && news.length > 0 ? (
        <ul className={isPlaceholderData ? 'opacity-50' : 'opacity-100'}>
          {news.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: '20px',
                padding: '10px',
                border: '1px solid #eee',
              }}
            >
              <h3>
                <a href={item.url} target="_blank" rel="noopenerer">
                  {item.title}
                </a>
              </h3>
              <p>
                <strong>Автор:</strong> {item.by}
              </p>
              <p>
                <strong>Рейтинг:</strong> {item.score}
              </p>
              <p>
                <strong>Комментариев:</strong> {item.descendants}
              </p>
              <small>
                Опубликовано: {new Date(item.time * 1000).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      ) : null}

      {isFetchingNews && <p>Loading...</p>}
    </div>
  );
};
