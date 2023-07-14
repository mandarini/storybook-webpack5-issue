import styles from './my-lib-rollup-with-sb-vite.module.css';

/* eslint-disable-next-line */
export interface MyLibRollupWithSbViteProps {}

export function MyLibRollupWithSbVite(props: MyLibRollupWithSbViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLibRollupWithSbVite!</h1>
    </div>
  );
}

export default MyLibRollupWithSbVite;
