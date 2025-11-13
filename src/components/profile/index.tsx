import { styles } from "@/components/profile/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export function ProfileScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [{ key: '1', value: 'Programação' },
  { key: '2', value: 'Música' },
  { key: '3', value: 'Culinária' },
  { key: '4', value: 'Ciências' },
  { key: '5', value: 'Exatas' },
  { key: '6', value: 'Ciências' },
  { key: '7', value: 'Humanas' },
  { key: '8', value: 'Edição de imagem' },
  { key: '9', value: 'Edição de vídeo' },
  ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AB</Text>
        </View>
        <Text style={styles.title}>Seu Perfil</Text>
        <Text style={styles.subtitle}>Gerencie suas informações pessoais</Text>
      </View>

      {/* Campo Nome */}
      <View style={styles.field}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Seu nome completo"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>

      {/* Campo E-mail */}
      <View style={styles.field}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="voce@exemplo.com"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <Text style={styles.helper}>Alterar e-mail pode exigir confirmação.</Text>
      </View>

      {/* Campo Nova Senha */}
      <View style={styles.field}>
        <Text style={styles.label}>Nova senha (opcional)</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="********"
            secureTextEntry={!showPassword}
            placeholderTextColor="#aaa"
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#555"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo Habilidade */}
      <View style={styles.field}>
        <Text style={styles.label}>Habilidade que você ensina</Text>
        <SelectList
          setSelected={(val) => setSelectedSkill(val)}
          data={skills}
          save="value"
          placeholder="Ex.: Programação, Musica, Culinária..."
          search={false}
          boxStyles={styles.selectBox}
          inputStyles={styles.selectInput}
          dropdownStyles={styles.selectDropdown}
        />
      </View>
    </ScrollView>
  );
}
