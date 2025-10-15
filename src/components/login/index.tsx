import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
    const router = useRouter();
    //Infos de login pré-preenchidas (por enquanto!)
    const [email, setEmail] = useState("aluno@teste.com");
    const [password, setPassword] = useState("123@senac");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    //Verifica se email e senha estão preenchidos
    const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

    const handleSignIn = async () => {
        try {
            setLoading(true);
            setLoginError("");
            //Simulação (sem back-end) só pra validar com os dados pré-preenchidos
            /*Simula uma latência de rede (espera) de 600 milissegundos
            new Promise((r) => setTimeout(r, 600)) cria uma promessa que resolve depois
            de 600 ms; await pausa a função até passar esse tempo*/
            await new Promise((r) => setTimeout(r, 600));

            if (email.toLowerCase() === "aluno@teste.com" && password === "123@senac") {
                Alert.alert("Login simulado com sucesso!");
            }
            else {
                setLoginError("E-mail ou senha inválidos!");
            }
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            {/*Formulario*/}
            <View>
                {/*Email*/}
                <Text>E-mail</Text>
                <TextInput
                    placeholder="exemplo@gmail.com"
                    value={email}
                    onChangeText={setEmail}
                />

                {/*Senha*/}
                <Text>Senha</Text>
                <TextInput
                    placeholder="********"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
        </SafeAreaView>
    );
}