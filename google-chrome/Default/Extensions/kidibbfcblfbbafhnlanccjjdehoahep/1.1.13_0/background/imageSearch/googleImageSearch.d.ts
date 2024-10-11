import { ISearchResult } from '../../searchResult/stores/searchResultStore';
import { BaseImageSearch } from './baseImageSearch';
export declare class GoogleImageSearch extends BaseImageSearch {
    protected searchInternal(imageUrl: string, result: ISearchResult, updateResultCallback: () => void): Promise<void>;
    private getActualUrl;
    private getKeyword;
    private getResults;
}
