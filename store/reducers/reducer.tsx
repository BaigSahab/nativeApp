import { combineReducers } from 'redux';
import { SET_SOME_DATA } from '../constants';

interface MachinesState {
    machines: string[];
}

interface SubMachinesState {
    name: string;
    email: string;
}

export interface AppState {
    machines: MachinesState;
    subMachines: SubMachinesState;
}

const initialMachineState: MachinesState = {
    machines: [],
};

const initialUserState: SubMachinesState = {
    name: '',
    email: '',
};

// Define your reducer
const machinesReducer = (state = initialMachineState, action: any): MachinesState => {
    switch (action.type) {
        case SET_SOME_DATA:
            return { ...state, machines: action.payload };
        default:
            return state;
    }
};

const subMachinesReducer = (state = initialUserState, action: any): SubMachinesState => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers<AppState>({
    machines: machinesReducer,
    subMachines: subMachinesReducer,
});

export default rootReducer;
