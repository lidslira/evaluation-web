import { api } from '../../lib/axios';
import { GetRatingProps, SendRatingProps } from './types';

export const getLastRating = async (props: GetRatingProps) => {
  const resp = await api.get('ratings');
  const ratings = resp.data;
  
  props.setLastRating(ratings[ratings.length-1])
  return resp.data;
};

export const sendRating = async (props: SendRatingProps) => {
  await api.post('rating', {
    stars: props.value,
  })
    props.setValue(0)
}