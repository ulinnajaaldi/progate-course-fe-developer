import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { tasksState } from '../../TaskAtoms'
import TaskListItem from './TaskListItem'
import type { Task, CSSProperties } from '../../../../types'
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../../../constants/app'
import TaskModal from '../shared/TaskModal'
import TaskFilter from '../shared/TaskFilter'

const TaskList = () => {
  const tasks: Task[] = useRecoilValue(tasksState)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const [filter, setFilter] = useState<Array<number>>([0])

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Tasks</h1>
      <div style={styles.taskButtons}>
        <button
          style={styles.button}
          onClick={(): void => {
            setIsModalOpen(true)
          }}
          data-testid="add-task-button"
        >
          <span className="material-icons">add</span>Add task
        </button>
        <button
          style={styles.button}
          onClick={(): void => {
            setIsFilterOpen(true)
          }}
          data-testid="filter-task-button"
        >
          <span className="material-icons">sort</span>Filter tasks
        </button>
      </div>
      <div>
        <div style={styles.tableHead}>
          <div style={styles.tableHeaderTaskName}>Task Name</div>
          <div style={styles.tableHeaderDetail}>Detail</div>
          <div style={styles.tableHeaderDueDate}>Due Date</div>
          <div style={styles.tableHeaderProgress}>Progress</div>
        </div>
        {tasks
          .filter((task) => {
            if (filter.find((i) => i > 0)) {
              return filter.includes(task.progressOrder)
            } else {
              return true
            }
          })
          .map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD}
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
          selectedData={{} as Task}
        />
      )}
      {isFilterOpen && <TaskFilter setFilter={setFilter} setIsFilterOpen={setIsFilterOpen} />}
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '20px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  taskButtons: {
    display: 'flex',
    marginBottom: '30px',
    position: 'relative',
  },
  button: {
    padding: '16px',
    fontSize: '16px',
    marginRight: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  tableHead: {
    display: 'flex',
    fontSize: '24px',
    borderBottom: '1px solid #D8D8D8',
  },
  tableHeaderTaskName: {
    padding: '16px',
    width: '15%',
  },
  tableHeaderDetail: {
    padding: '16px',
    width: '30%',
  },
  tableHeaderDueDate: {
    padding: '16px',
    width: '10%',
  },
  tableHeaderProgress: {
    padding: '16px',
    width: '15%',
  },
}

export default TaskList
