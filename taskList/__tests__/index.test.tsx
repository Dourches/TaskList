import { render, screen } from '@testing-library/react'
import TaskList from '@/components/taskList'

describe('Task', () => {
  it('renders a task', () => {
    render(<TaskList />)

    const task = screen.getByText(/to do:/i);

    expect(task).toBeInTheDocument()
  })
})
