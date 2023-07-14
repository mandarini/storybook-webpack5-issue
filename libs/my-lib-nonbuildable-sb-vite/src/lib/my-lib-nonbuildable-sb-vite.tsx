import styles from './my-lib-nonbuildable-sb-vite.module.css';

/* eslint-disable-next-line */
export interface MyLibNonbuildableSbViteProps {}

export function MyLibNonbuildableSbVite(props: MyLibNonbuildableSbViteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLibNonbuildableSbVite!</h1>
    </div>
  );
}

export default MyLibNonbuildableSbVite;
