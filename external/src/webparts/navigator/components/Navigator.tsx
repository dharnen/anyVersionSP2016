import * as React from 'react';
import { INavigatorProps } from './INavigatorProps';
import {
  Fabric,
  loadTheme,
  getTheme,
  CommandBar,
  DetailsList,
  IColumn,
  HoverCard,
  IExpandingCardProps,
  ICommandBarItemProps
} from 'office-ui-fabric-react';
import { mergeStyles, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import styles from './Navigator.module.scss';
import { INavigatorStates } from './INavigatorStates';

const testListItems: any[] = [
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  },
  {
    firstName: 'Drake',
    lastName: 'Harnen',
    age: 28,
    height: 74,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'
  },
  {
    firstName: 'Neilson',
    lastName: 'Smith',
    age: 39,
    height: 72,
    imgSrc: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg'
  },
  {
    firstName: 'Jaime',
    lastName: 'Kempen',
    age: 41,
    height: 69,
    imgSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg'
  }
];

const theme1 = {
  palette: {
    themePrimary: '#b954ba',
    themeLighterAlt: '#fcf7fc',
    themeLighter: '#f4dff4',
    themeLight: '#eac4ea',
    themeTertiary: '#d58fd6',
    themeSecondary: '#c165c3',
    themeDarkAlt: '#a64ca8',
    themeDark: '#8d408e',
    themeDarker: '#682f68',
    neutralLighterAlt: '#000000',
    neutralLighter: '#000000',
    neutralLight: '#000000',
    neutralQuaternaryAlt: '#000000',
    neutralQuaternary: '#000000',
    neutralTertiaryAlt: '#000000',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#000000',
    error: 'a80000',
    infoBackground: '#f4f4f4',
    infoText: '#333333',
    info: '#767676',
    severeWarningBackground: '#fed9cc',
    severeWarningText: '#333333',
    severeWarning: '#d83b01'
  }
};

const theme2 = {
  palette: {
    themePrimary: '#9e2b60',
    themeLighterAlt: '#fbf4f7',
    themeLighter: '#efd4e0',
    themeLight: '#e2b1c7',
    themeTertiary: '#c56f96',
    themeSecondary: '#a93d6f',
    themeDarkAlt: '#8e2756',
    themeDark: '#782149',
    themeDarker: '#581836',
    neutralLighterAlt: '#d8ddd6',
    neutralLighter: '#d4d9d2',
    neutralLight: '#ccd0ca',
    neutralQuaternaryAlt: '#bec2bc',
    neutralQuaternary: '#b5b9b3',
    neutralTertiaryAlt: '#aeb2ac',
    neutralTertiary: '#a2c5e3',
    neutralSecondary: '#5592c7',
    neutralPrimaryAlt: '#1c69ac',
    neutralPrimary: '#0859a1',
    neutralDark: '#06447a',
    black: '#04325a',
    white: '#dee3dc',
    error: 'a80000',
    infoBackground: '#f4f4f4',
    infoText: '#333333',
    info: '#767676',
    severeWarningBackground: '#fed9cc',
    severeWarningText: '#333333',
    severeWarning: '#d83b01'
  }
};

const defaultTheme: any = getTheme();

const columns: IColumn[] = [
  {
    key: 'firstName',
    name: 'First Name',
    fieldName: 'firstName',
    minWidth: 20,
    maxWidth: 100
  },
  {
    key: 'lastName',
    name: 'Last Name',
    fieldName: 'lastName',
    minWidth: 20,
    maxWidth: 100
  },
  {
    key: 'age',
    name: 'Age',
    fieldName: 'age',
    minWidth: 20,
    maxWidth: 100
  },
  {
    key: 'height',
    name: 'Height',
    fieldName: 'height',
    minWidth: 20,
    maxWidth: 100
  }
];

const classNames = mergeStyleSets({
  compactCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  expandedCard: {
    padding: '16px 24px',
    width: '100%'
  },
  item: {
    selectors: {
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    }
  },
  cardImageLabel: {
    margin: '5px',
    display: 'block'
  },
  cardImage: {
    display: 'flex',
    width: '100%'
  }
});

const listStyles = mergeStyleSets({
  listContainer: {
    height: '100%',
    overflowY: 'scroll'
  },
  commandBar: {
    position: 'relative',
    top: '0',
    zIndex: 1
  }
});

export default class Navigator extends React.Component<INavigatorProps, INavigatorStates> {
  constructor(props) {
    super(props);

    this.state = {
      curTheme: getTheme()
    };
  }

  public render(): JSX.Element {

    return (
      <Fabric>

        <div className={styles.navigator}>
          <div className={`ms-grid`} dir='ltr'>
            <div className={`ms-Grid-row`}>
              <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg12`}>
                  <div className={listStyles.commandBar}>
                    <CommandBar
                      items={this._getItems()}
                      overflowItems={this._getOverflowItems()}
                      farItems={this._getFarItems()}
                    />
                  </div>
                <div className={listStyles.listContainer}>
                  <DetailsList
                    setKey='hoverSet'
                    items={testListItems}
                    columns={columns}
                    onRenderItemColumn={this._onRenderItemColumn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fabric>
    );
  }

  private _handleChangeTheme(newPalette: any): void {
    const stateClone: INavigatorStates = Object.assign({}, this.state);
    loadTheme(newPalette);
    stateClone.curTheme = getTheme();
    this.setState(stateClone);
  }

  private _getItems(): ICommandBarItemProps[] {
    return (
      [
        {
          key: 'newItem',
          name: 'New',
          cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
          iconProps: {
            iconName: 'Add'
          },
          ariaLabel: 'New',
          subMenuProps: {
            items: [
              {
                key: 'emailMessage',
                name: 'Email message',
                iconProps: {
                  iconName: 'Mail'
                }
              },
              {
                key: 'calendarEvent',
                name: 'Calendar event',
                iconProps: {
                  iconName: 'Calendar'
                }
              }
            ]
          }
        },
        {
          key: 'upload',
          name: 'Upload',
          iconProps: {
            iconName: 'Upload'
          },
          ['data-automation-id']: 'uploadButton'
        },
        {
          key: 'share',
          name: 'Share',
          iconProps: {
            iconName: 'Share'
          },
          onClick: () => console.log('Share')
        },
        {
          key: 'download',
          name: 'Download',
          iconProps: {
            iconName: 'Download'
          },
          onClick: () => console.log('Download')
        },
        {
          key: 'changeTheme',
          name: 'Theme',
          iconProps: {
            iconName: 'Color'
          },
          subMenuProps: {
            items: [
              {
                key: 'theme1',
                name: 'Theme 1',
                onClick: () => this._handleChangeTheme(theme1)
              },
              {
                key: 'theme2',
                name: 'Theme 2',
                onClick: () => this._handleChangeTheme(theme2)
              },
              {
                key: 'deafultTheme',
                name: 'Default',
                onClick: () => this._handleChangeTheme(defaultTheme)
              }
            ]
          }
        }
      ]
    );
  }

  private _getOverflowItems(): ICommandBarItemProps[] {
    return (
      [
        {
          key: 'move',
          name: 'Move to...',
          onClick: () => console.log('Move to'),
          iconProps: {
            iconName: 'MoveToFolder'
          }
        },
        {
          key: 'copy',
          name: 'Copy to...',
          onClick: () => console.log('Copy to'),
          iconProps: {
            iconName: 'Copy'
          }
        },
        {
          key: 'rename',
          name: 'Rename...',
          onClick: () => console.log('Rename'),
          iconProps: {
            iconName: 'Edit'
          }
        }
      ]
    );
  }

  private _getFarItems = () => {
    return [
      {
        key: 'sort',
        name: 'Sort',
        ariaLabel: 'Sort',
        iconProps: {
          iconName: 'SortLines'
        },
        onClick: () => console.log('Sort')
      },
      {
        key: 'tile',
        name: 'Grid view',
        ariaLabel: 'Grid view',
        iconProps: {
          iconName: 'Tiles'
        },
        iconOnly: true,
        onClick: () => console.log('Tiles')
      },
      {
        key: 'info',
        name: 'Info',
        ariaLabel: 'Info',
        iconProps: {
          iconName: 'Info'
        },
        iconOnly: true,
        onClick: () => console.log('Info')
      }
    ];
  }

  private _onRenderItemColumn = (item: any, index: number, column: IColumn): JSX.Element | React.ReactText => {
    const expandingCardProps: IExpandingCardProps = {
      onRenderCompactCard: this._onRenderCompactCard,
      onRenderExpandedCard: this._onRenderExpandedCard,
      renderData: item
    };

    if (column.key === 'firstName') {
      return (
        <HoverCard expandingCardProps={expandingCardProps} instantOpenOnClick={true}>
          <div className={classNames.item}>{item.firstName}</div>
        </HoverCard>
      );
    } else {
      return (
        <div>{item[`${column.key}`]}</div>
      );
    }
  }

  private _onRenderCompactCard = (item: any): JSX.Element => {
    return (
      <div className={classNames.compactCard}>
        <div className={classNames.cardImageLabel}>{item.firstName}</div>
        <div>
          <img src={item.imgSrc} className={classNames.cardImage} />
        </div>
      </div>
    );
  }

  private _onRenderExpandedCard = (item: any): JSX.Element => {
    return (
      <div className={classNames.expandedCard}>
        Another List! Could add a commandBar if we wanted to.
        <DetailsList setKey='expandedCardSet' items={testListItems} columns={columns} />
      </div>
    );
  }

}
