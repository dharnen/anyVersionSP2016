import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

/**
 * Fix to make it work with OUIFR 7.x
 */

import * as strings from 'NavigatorWebPartStrings';

import { INavigatorProps } from './components/INavigatorProps';

import { GlobalSettings } from '@uifabric/utilities/lib/GlobalSettings';
import { getTheme } from '@uifabric/styling/lib/styles/theme';
import { initializeIcons } from '@uifabric/icons';
import Navigator from './components/Navigator';

const customizations = GlobalSettings.getValue('customizations');
const theme = getTheme();
(customizations as any).settings.theme.effects = { ...theme.effects };
(customizations as any).settings.theme.spacing = { ...theme.spacing };
initializeIcons();

/**
 * End of fix
 */

export interface INavigatorWebPartProps {
  description: string;
}

export default class NavigatorWebPart extends BaseClientSideWebPart<INavigatorWebPartProps> {

  public render(): void {
    const element: React.ReactElement<INavigatorProps > = React.createElement(
      Navigator,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
