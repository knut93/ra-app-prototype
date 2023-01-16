import { useContext } from 'react';
import { NavigationContext, ProviderContextInterface } from '../context/navigation';

function useNavigation() {

    return useContext<ProviderContextInterface>(NavigationContext);
}

export default useNavigation; 