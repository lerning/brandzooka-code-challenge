import expect from 'expect'
import * as actions from '../../actions'


describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })


it('deleteTodo should create DELETE_TODO action', () => {
  expect(actions.deleteTodo(1)).toEqual(
     {
    type: 'DELETE_TODO',
    id: 1
  })
})

it('grabTodos should create GRAB_TODOS action', () => {
  expect(actions.grabTodos()).toEqual(
     {
    type: 'GRAB_TODOS'
  })
})



})
