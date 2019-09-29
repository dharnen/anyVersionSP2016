import * as React from 'react';
import styles from './PartConfig.module.scss';
import { IPartConfigProps } from './IPartConfigProps';
import { mergeStyleSets } from '@uifabric/styling';

const colorSwatch = mergeStyleSets({
  a1: {
    backgroundColor: '#FBF4F9'
  },
  a2: {
    backgroundColor: '#EBC0DB'
  },
  a3: {
    backgroundColor: '#D58CBD'
  },
  a4: {
    backgroundColor: '#754D68'
  },
  b5: {
    backgroundColor: '#E8F4F7'
  },
  b6: {
    backgroundColor: '#76BFC'
  },
  b7: {
    backgroundColor: '#048BA8'
  },
  b8: {
    backgroundColor: '#034C5C'
  },
  c9: {
    backgroundColor: '#E9FBF5'
  },
  c10: {
    backgroundColor: '#7FEBC4'
  },
  c11: {
    backgroundColor: '#16DB93'
  },
  c12: {
    backgroundColor: '#0C7851'
  },
  d13: {
    backgroundColor: '#FDFDF0'
  },
  d14: {
    backgroundColor: '#F6F3A5'
  },
  d15: {
    backgroundColor: '#EFEA5A'
  },
  d16: {
    backgroundColor: '#838032'
  }
});

export default class PartConfig extends React.Component<IPartConfigProps, {}> {
  public render(): React.ReactElement<IPartConfigProps> {
    return (
      <div className={styles.partConfig}>
        <div className={styles.row}>
          <div className={`${styles.column} ${colorSwatch.a1}`}>1</div>
          <div className={`${styles.column} ${colorSwatch.a2}`}>2</div>
          <div className={`${styles.column} ${colorSwatch.a3}`}>3</div>
          <div className={`${styles.column} ${colorSwatch.a4}`}>4</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.column} ${colorSwatch.b5}`}>5</div>
          <div className={`${styles.column} ${colorSwatch.b6}`}>6</div>
          <div className={`${styles.column} ${colorSwatch.b7}`}>7</div>
          <div className={`${styles.column} ${colorSwatch.b8}`}>8</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.column} ${colorSwatch.c9}`}>9</div>
          <div className={`${styles.column} ${colorSwatch.c10}`}>10</div>
          <div className={`${styles.column} ${colorSwatch.c11}`}>11</div>
          <div className={`${styles.column} ${colorSwatch.c12}`}>12</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.column} ${colorSwatch.d13}`}>13</div>
          <div className={`${styles.column} ${colorSwatch.d14}`}>14</div>
          <div className={`${styles.column} ${colorSwatch.d15}`}>15</div>
          <div className={`${styles.column} ${colorSwatch.d16}`}>16</div>
        </div>
      </div>
    );
  }
}
