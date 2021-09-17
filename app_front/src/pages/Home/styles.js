import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 8px;
    background-color: #f6f6f6;
    
`;

export const ListData = styled.FlatList`
    width: 100%;
`;

export const ItemData = styled.View`
    color: #333;
    font-size: 16px;
    border-color: #b02ab7;
    border-width: 1px;
    border-radius: 6px;
    margin-bottom: 5px;
    padding: 2px 5px;
`;

export const TitleItem = styled.Text`
    color: #444;
    font-size: 18px;
    padding-bottom: 2px;
`;

export const DescItem = styled.Text`
    color: #333;
    font-size: 14px;
    padding-bottom: 2px;
`;