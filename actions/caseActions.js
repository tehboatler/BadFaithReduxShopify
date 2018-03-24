"use strict"
import actions from './constants';

export const getCases = () => ({
  type: actions.GET_CASES,
})


export const postCase = (caseItem) => ({
  type: actions.POST_CASE,
  payload: caseItem,
})

export const deleteCase = (caseItem) => ({
  type: actions.DELETE_CASE,
  payload: caseItem
})

export const updateCase = (caseItem) => ({
  type: actions.UPDATE_CASE,
  payload: caseItem
})
