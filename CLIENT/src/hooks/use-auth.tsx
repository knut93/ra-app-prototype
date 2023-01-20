import { useContext } from 'react';
import { AuthContext, ProviderContextInterface } from '../context/auth';

function useAuth() {

    return useContext<ProviderContextInterface>(AuthContext);
}

export default useAuth; 