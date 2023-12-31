import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties } from '../../../../types'
import type { Task } from '../../../../types'
import { useTasksAction } from '../../../../hooks/Tasks'
import { TASK_MODAL_TYPE } from '../../../../constants/app'
import TaskModal from './TaskModal'

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  task: Task
}

const TaskMenu = ({ setIsMenuOpen, task }: TaskMenuProps) => {
  const { deleteTask } = useTasksAction()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [type, setType] = useState<string>(TASK_MODAL_TYPE.ADD)

  return (
    <div style={styles.menu} data-testid="task-menu">
      <div
        style={styles.menuItem}
        onClick={(): void => {
          setType(TASK_MODAL_TYPE.EDIT)
          setIsModalOpen(true)
        }}
        data-testid="edit-button"
      >
        <span className="material-icons">edit</span>Edit
      </div>
      <div
        style={styles.menuItem}
        onClick={(): void => {
          deleteTask(task.id)
          setIsMenuOpen(false)
        }}
        data-testid="delete-button"
      >
        <span className="material-icons">delete</span>Delete
      </div>
      <span
        className="material-icons"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsMenuOpen(false)
        }}
      >
        close
      </span>
      {isModalOpen && (
        <TaskModal
          headingTitle={type === TASK_MODAL_TYPE.ADD ? 'Add your task' : 'Edit your task'}
          type={type}
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={task.progressOrder}
          selectedData={task}
        />
      )}
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '-10px',
    right: '4%',
    zIndex: 10,
  },
  menuItem: {
    display: 'flex',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    top: '0px',
    right: '2px',
    cursor: 'pointer',
  },
}

export default TaskMenu
