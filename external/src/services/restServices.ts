import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { sp } from '@pnp/sp';

export class RestServie {
    constructor(private context: IWebPartContext) {
    }

    /**
     * REST request that gets items from list passed in argument
     * @param listName Name of list to get items from
     * @param filterColumn Name of column to filter items by
     * @param filterValue Value to filter items by
     * @param orderColumn Name of column to order by ascending
     */
    public pnpGetItems(listName: string, filterColumn: string, filterValue: string | number, orderColumn?: string): Promise<any> {
        if (orderColumn === undefined) {
            orderColumn = filterColumn;
        }

        return sp.web.lists.getByTitle(listName).items.orderBy(orderColumn, true).filter(`${filterColumn} eq ${filterValue}`).get();
    }

    /**
     * REST request to post new item to specified list
     * @param listName Name of list to post new item to
     * @param data JSON object representing the columns and values of new item
     */
    public pnpPostItem(listName: string, data: {}): Promise<any> {
      return sp.web.lists.getByTitle(listName).items.add(data);
    }

    /**
     * REST request that merges passed into with an existing list item
     * @param listName Name of list target item belongs to
     * @param itemID ID number of target list item
     * @param data JSON object representing columns and values to merge
     */
    public pnpMergeItem(listName: string, itemID: number, data: {}): Promise<any> {
      return sp.web.lists.getByTitle(listName).items.getById(itemID).update(data);
    }

    /**
     * REST request to delete a target item from list
     * @param listName List name of target item
     * @param itemID ID number of target list item
     */
    public pnpDeleteItem(listName: string, itemID: number): Promise<any> {
      return sp.web.lists.getByTitle(listName).items.getById(itemID).delete();
    }

}
