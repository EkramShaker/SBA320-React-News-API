import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return { ...state, news: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};


export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, { news: [], loading: true });

  useEffect(() => {
    const fetchNews = async () => {
      try {
       
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?country=us&token=e110f4446ac6ba334ade02b94cc356db`
        );

        console.log('News API Response:', response.data);

        dispatch({ type: 'SET_NEWS', payload: response.data.articles });
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        console.error('Error fetching news:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news: state.news, loading: state.loading }}>
      {children}
    </NewsContext.Provider>
  );
};


export const useNews = () => useContext(NewsContext);
