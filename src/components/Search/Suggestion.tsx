import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/fetchWeather';
import { SuggestionItem } from './styled';
import { useNavigate } from 'react-router';
import { ThunkDispatch } from '@reduxjs/toolkit';

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate()

  const onClick = () => {
    dispatch(fetchWeather(props.label.split(',')[0]));
    navigate('/weatherInfo')
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return <SuggestionItem onClick={onClick}>{props.label}</SuggestionItem>;
};

export default Suggestion;
