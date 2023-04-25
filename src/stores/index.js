import { writable } from 'svelte/store';

import api from '../services/api.js';

export const searchInput = writable('');

export const listProducts = writable(api);
