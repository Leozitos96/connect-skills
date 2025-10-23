// /*Stack: container de navegação (baseado no empilhamento de telas) => push/replace/back
// router.push("/rota") => empilha uma nova tela por cima da atual => usuário navega para a próxima 
// tela, mas ainda deve poder voltar para a anterior
// router.replace("/rota") => substitui a tela atual (não empilha) => quando você não quer permitir
// voltar, como após o login (após se autenticar!)
// router.back() => remove o topo da pilha (volta uma tela) => quando o usuário clica em "voltar" */
// import { AuthProvider } from '@/contexts/authContext';

import { Slot } from "expo-router";

export default function RootLayout() {
    return (
        <Slot />
    );
}
