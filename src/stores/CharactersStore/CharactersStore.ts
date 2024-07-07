import {action, computed, makeObservable, observable, reaction, runInAction} from "mobx";
import { ICharacter } from "../../types/character";
import { getAllCharacters } from "../../services";

class CharactersStore {
    isLoading: boolean = false;
    characters: ICharacter[] = [];
    totalCount: number = 0;

    constructor() {
        makeObservable(this, {
            isLoading: observable,
            characters: observable,
            fetchCharacters: action.bound,
            charactersTotalCount: computed,
        });

        reaction(
            () => this.characters.length,
            (length: number) => {
                console.log(`Текущее количество персонажей: ${length}`);
            }
        );
    }

    get charactersTotalCount() {
        return this.totalCount * 2;
    }

    async fetchCharacters(): Promise<void> {
        this.isLoading = true;
        try {
            const data = await getAllCharacters();
            runInAction(() => {
                this.characters = data.results;
                this.isLoading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}

export default new CharactersStore();
