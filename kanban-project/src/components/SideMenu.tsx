import React from 'react'
import { NavLink } from 'react-router-dom'
import type { CSSProperties } from '../types'

interface IsActiveInterface {
  isActive: boolean
}

const SideMenu = () => {
  return (
    <div style={styles.container}>
      <NavLink
        to="/"
        style={({ isActive }: IsActiveInterface) => (isActive ? styles.activeLink : styles.link)}
      >
        <span className="material-icons" style={styles.icon}>
          home
        </span>
        <p style={styles.text}>Home</p>
      </NavLink>
      <NavLink
        to="/task-list"
        style={({ isActive }: IsActiveInterface) => (isActive ? styles.activeLink : styles.link)}
      >
        <span className="material-icons" style={styles.icon}>
          format_list_bulleted
        </span>
        <p style={styles.text}>Task List</p>
      </NavLink>
      <NavLink
        to="/task-progress"
        style={({ isActive }: IsActiveInterface) => (isActive ? styles.activeLink : styles.link)}
      >
        <span className="material-icons" style={styles.icon}>
          check_box
        </span>
        <p style={styles.text}>Task Progress</p>
      </NavLink>
    </div>
  )
}

const commonLinkStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: '12px 0',
  textDecoration: 'none',
}

const styles: CSSProperties = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#55ACC8',
    padding: '20px',
    minHeight: '100vh',
    width: '300px',
  },
  link: {
    ...commonLinkStyles,
    color: '#fff',
  },
  activeLink: {
    ...commonLinkStyles,
    color: '#255261',
  },
  icon: {
    fontSize: '40px',
  },
  text: {
    fontSize: '24px',
    marginLeft: '8px',
  },
}

export default SideMenu
