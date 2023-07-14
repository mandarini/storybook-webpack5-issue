import styles from './my-lib-vite.module.css';

/* eslint-disable-next-line */
export interface MyLibViteProps {}

export function MyLibVite(props: MyLibViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLibVite!</h1>
    </div>
  );
}

export default MyLibVite;
