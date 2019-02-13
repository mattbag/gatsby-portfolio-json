import React, { Component } from 'react'
import styles from '../styles/master.module.css'
import appStyles from '../styles/apps.module.css'

export default class Phone extends Component {
  constructor(props) {
    super(props)
    this.state = { play: false }
  }
  play = () => {
    this.setState({ play: true })
  }
  render() {
    return (
      <div
        className={`${appStyles.phone} ${styles.bg} ${styles.shadow} ${
          styles.show__dk
        }`}
        style={{
          paddingTop: `${640 / 420 * 100}%`,
        }}
      >
        <div
          onClick={this.play}
          className={appStyles.play}
          style={{
            display: this.state.play ? 'none' : 'initial',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div className={appStyles.pulse} />
            <div
              className={appStyles.pulse}
              style={{
                width: '3rem',
                height: '3rem',
                // animationDelay: '400ms',
                animationDuration: '2500ms',
              }}
            />
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style={{ width: '100%', height: '100%', zIndex: 1 }}
            >
              <path
                // className={styles.shadow}
                fill="currentColor"
                d="M91.434 483.987c-.307-16.018 13.109-29.129 29.13-29.129h62.293v-5.714H56.993c-16.021 0-29.437-13.111-29.13-29.129C28.16 404.491 40.835 392 56.428 392h126.429v-5.714H29.136c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h154.286v-5.714H57.707c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h168.566l-31.085-22.606c-12.762-9.281-15.583-27.149-6.302-39.912 9.281-12.761 27.15-15.582 39.912-6.302l123.361 89.715a34.287 34.287 0 0 1 14.12 27.728v141.136c0 15.91-10.946 29.73-26.433 33.374l-80.471 18.934a137.16 137.16 0 0 1-31.411 3.646H120c-15.593-.001-28.269-12.492-28.566-28.014zm73.249-225.701h36.423l-11.187-8.136c-18.579-13.511-20.313-40.887-3.17-56.536l-13.004-16.7c-9.843-12.641-28.43-15.171-40.88-5.088-12.065 9.771-14.133 27.447-4.553 39.75l36.371 46.71zm283.298-2.103l-5.003-152.452c-.518-15.771-13.722-28.136-29.493-27.619-15.773.518-28.137 13.722-27.619 29.493l1.262 38.415L283.565 11.019c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l76.889 98.745-4.509 3.511-94.79-121.734c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l94.443 121.288-4.509 3.511-77.675-99.754c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l52.053 66.849c12.497-8.257 29.055-8.285 41.69.904l123.36 89.714c10.904 7.93 17.415 20.715 17.415 34.198v16.999l61.064-47.549a34.285 34.285 0 0 0 13.202-28.177z"
              />
            </svg>
          </div>
        </div>
        <iframe
        title={this.props.name}
          src={this.state.play ? this.props.url : ''}
          className={appStyles.frame}
        />
      </div>
    )
  }
}