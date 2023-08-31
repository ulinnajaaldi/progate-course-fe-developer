import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import TaskSummary from '../features/tasks/components/TaskSummary'
import '@testing-library/jest-dom'

describe('TaskSummary', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <TaskSummary />
        </BrowserRouter>
      </RecoilRoot>,
    )
  })

  test('Summary of Your Tasks heading is shown', () => {
    expect(screen.getByText('Summary of Your Tasks')).toBeInTheDocument()
  })

  test('Completed tasks count is shown', () => {
    expect(screen.getByText(/You have completed \d+ task/)).toBeInTheDocument()
  })

  test('Uncompleted tasks count is shown', () => {
    expect(screen.getByText(/You still have \d+ task/)).toBeInTheDocument()
  })

  test('See Your Task List link is shown', () => {
    expect(screen.getByText('See Your Task List')).toBeInTheDocument()
  })

  test('Manage Your Task Progress link is shown', () => {
    expect(screen.getByText('Manage Your Task Progress')).toBeInTheDocument()
  })
})
