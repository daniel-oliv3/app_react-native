import React, {useCallback, useState} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Alert, TouchableOpacity } from 'react-native';


import { Container, ListData, ItemData, TitleItem, DescItem } from './styles';

import api from '../../config/configApi';


export default function Home(){

    const navigation = useNavigation();

    const [orcamentos, setOrcamentos] = useState('');

    const getOrcamento = async () => {
        try {
            const response = await api.get('/listar-orcamento');
            setOrcamentos(response.data.orcamento);
            console.log(response.data.orcamento);
        }catch(err){
            Alert.alert("", "Erro: Nenhum orçamento encontrado! tente mais tarde!")
        }
    }


    useFocusEffect(
        useCallback(() => {
            getOrcamento();
        },[])
    )

    return (
        <Container>
            <ListData
                data={orcamentos}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Visualizar', {
                            orcamentoId: item.id
                        });
                    }}>
                        <ItemData>
                            <TitleItem>{item.id + " - " + item.name}</TitleItem>
                            <DescItem>{item.subject}</DescItem>
                        </ItemData>
                    </TouchableOpacity>
                )} keyExtractor={orcamentos => String(orcamentos.id)}
            />
        </Container>
    )
}