import styles from './my-lib-nonbuildable.module.css';

/* eslint-disable-next-line */
export interface MyLibNonbuildableProps {}

export function MyLibNonbuildable(props: MyLibNonbuildableProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLibNonbuildable!</h1>
    </div>
  );
}

export default MyLibNonbuildable;
