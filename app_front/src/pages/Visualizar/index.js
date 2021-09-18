import React, {useCallback, useState} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Alert, Text } from 'react-native';
import { Container, TitleContent, DescContent } from './styles';

import api from '../../config/configApi';

export default function Visualizar({ route }){

    const [orcamento, setOrcamento] = useState('');

    const navigation = useNavigation();
    
    const getOrcamento = async () => {
        try {
            const { orcamentoId } = route.params;
            const response = await api.get('/visualizar-orcamento/' + orcamentoId);
            setOrcamento(response.data.orcamento);
        }catch(err){
            if(err.response){
                Alert.alert("", err.response.data.mensagem);
                navigation.navigate('Home');
            }else{
                Alert.alert("", "Erro: Nenhum orçamento encontrado, tente mais tarde!");
                navigation.navigate('Home');
            }
        }
    }

    
    
    useFocusEffect(
        useCallback(() => {
            getOrcamento();
        }, [])
    );

    return (
        <Container>
            <TitleContent>ID</TitleContent>
            <DescContent>{orcamento.id}</DescContent>

            <TitleContent>Nome</TitleContent>
            <DescContent>{orcamento.name}</DescContent>

            <TitleContent>E-mail</TitleContent>
            <DescContent>{orcamento.email}</DescContent>

            <TitleContent>Assunto</TitleContent>
            <DescContent>{orcamento.subject}</DescContent>

            <TitleContent>Conteúdo</TitleContent>
            <DescContent>{orcamento.content}</DescContent>
        </Container>    
    )
}



