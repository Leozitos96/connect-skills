import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    backgroundColor: "#007AFF20",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#007AFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  helper: {
    fontSize: 12,
    color: "#777",
    marginTop: 6,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  selectBox: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    borderWidth: 0,
  },
  selectInput: {
    fontSize: 16,
  },
  selectDropdown: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 0,
  },
});
