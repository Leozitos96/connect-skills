/* Stack criado para empilhar telas
de autenticação (Login e cadastro)*/

import { Stack } from "expo-router";

export default function AuthLayout(){
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="login"></>
        <Stack/>
    );
}