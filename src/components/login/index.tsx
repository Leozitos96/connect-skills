import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login(){
    const router = useRouter();

    const [email, setEmail] = useState("aluno@teste.com");
    const [password, setPassword] = useState("123@senac");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

    async function handleSignIn() {
        try {
            setLoading(true);
            setLoginError("");


            await new Promise((r) => setTimeout(r, 600));

            if(email.toLocaleLowerCase() === "aluno@teste.com" && password === "123@senac") {
                Alert.alert("Login Simulado com sucesso!");
            }else{
                    setLoginError("E-mail ou senha inválidos!");
            }
        } finally {
            setLoading(false);
            
        }
    }
    return (
        <SafeAreaView>
            {/*Formulario*/}
            <View>
                {/*Email*/}
                <Text>E-mail</Text>
                <TextInput
                placeholder="exemplo@gmail.com"
                value={email}
                onChangeText={setEmail}/>

                {/*Senha*/}
                <Text>E-mail</Text>
                <TextInput
                placeholder="*********"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}/>
            </View>
        </SafeAreaView>
    )
}