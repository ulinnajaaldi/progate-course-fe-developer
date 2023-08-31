import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import TaskProgress from '../features/tasks/components/TaskProgress/TaskProgress'
import '@testing-library/jest-dom'

describe('TaskProgress', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <TaskProgress />
      </RecoilRoot>,
    )
  })

  test('Task Progress heading is shown', () => {
    expect(screen.getByText('Task Progress')).toBeInTheDocument()
  })

  test('Not Started column is shown', () => {
    expect(screen.getByText('Not Started')).toBeInTheDocument()
  })

  test('In Progress column is shown', () => {
    expect(screen.getByText('In Progress')).toBeInTheDocument()
  })

  test('Waiting column is shown', () => {
    expect(screen.getByText('Waiting/In Review')).toBeInTheDocument()
  })

  test('Completed column is shown', () => {
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })
})
