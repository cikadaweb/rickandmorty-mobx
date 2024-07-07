import axios from 'axios';
import { IServerResponse } from '../types/server.ts';
import { ICharacter } from '../types/character.ts';

const url = import.meta.env.VITE_API_URL;

export const getAllCharacters = async (): Promise<IServerResponse<ICharacter>> => {
    try {
        const response = await axios.get<IServerResponse<ICharacter>>(`${url}/character`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getCharacterById = async (id: string): Promise<ICharacter> => {
    try {
        const response = await axios.get<ICharacter>(`${url}/character/${id}`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};