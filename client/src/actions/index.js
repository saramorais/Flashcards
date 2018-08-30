import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_SETS = 'FETCH_SETS';
export const ADD_SET = 'ADD_SET';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_SET = 'DELETE_SET';
export const DELETE_CARD = 'DELETE_CARD';

export function fetchSets() {
  const request = axios.get(`/api/set`);
  return {
    type: FETCH_SETS,
    payload: request
  }
}

export function addSet(value) {
  const request = axios({
    method: 'post',
    url: `/api/set`,
    data: {
      name: value
    }
  });
  return {
    type: ADD_SET,
    payload: request
  }
}

export function fetchCards(id) {
  const request = axios.get(`/api/set/${id}`);
  return {
    type: FETCH_CARDS,
    payload: request
  }
}

export function addCard(value, id) {
  console.log(value, id);
  const request = axios({
    method: 'post',
    url: `/api/card`,
    data: {
      question: value.question,
      answer: value.answer,
      set_id: id
    }
  });
  return {
    type: ADD_CARD,
    payload: request
  }
}

export function deleteSet(id, callback) {
  const request = axios({
    method: 'delete',
    url: `/api/set/${id}` })
  .then(function (response) {
    callback();
  })
  .catch(function (error) {
    console.log(error);
  });
  return {
    type: DELETE_SET,
    payload: request
  }
}

export function deleteCard(card, callback, setId) {
  const request = axios({
    method: 'delete',
    url: `/api/card/${card.id}` })
  .then(function (response) {
    callback(setId);
  })
  .catch(function (error) {
    console.log(error);
  });
  return {
    type: DELETE_CARD,
    payload: request
  }
}