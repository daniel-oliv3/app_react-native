import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, Text } from 'react-native';

import api from '../../config/configApi';

export default function Visualizar({ route }){

    const [orcamento, setOrcamento] = useState('');
    
    const getOrcamento = async () => {
        try {
            const { orcamentoId } = route.params;
            const response = await api.get('/visualizar-orcamento/' + orcamentoId);
            setOrcamento(response.data.orcamento);
            console.log(response.data.orcamento);
        }catch(err){
            if(err.response){
                Alert.alert("", err.response.data.mensagem);
            }else{
                Alert.alert("", "Erro: Nenhum orçamento encontrado, tente mais tarde!");
            }
        }
    }

    
    
    useFocusEffect(
        useCallBack(() => {
            getOrcamento();
        }, [])
    );

    return (
        <Text>Visualizar Orçamento</Text>
    )
}



